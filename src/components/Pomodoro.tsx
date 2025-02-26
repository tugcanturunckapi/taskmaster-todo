import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PomodoroProps {
  taskTitle: string;
  onClose: () => void;
}

interface TimerSettings {
  focusTime: number;
  shortBreak: number;
  longBreak: number;
}

const Pomodoro = ({ taskTitle, onClose }: PomodoroProps) => {
  const [showSettings, setShowSettings] = useState(false);
  const [settings, setSettings] = useState<TimerSettings>(() => {
    // Load settings from localStorage or use defaults
    const savedSettings = localStorage.getItem("pomodoroSettings");
    return savedSettings
      ? JSON.parse(savedSettings)
      : {
          focusTime: 25,
          shortBreak: 5,
          longBreak: 15,
        };
  });

  const [minutes, setMinutes] = useState(settings.focusTime);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [pomodoroCount, setPomodoroCount] = useState(0);

  // Bildirim izni isteği
  useEffect(() => {
    if ("Notification" in window) {
      Notification.requestPermission();
    }
  }, []);

  // Bildirim ve ses çalma fonksiyonu
  const playNotification = (message: string) => {
    // Ses çal
    const audio = new Audio("/notification.mp3");
    audio.play().catch((error) => {
      console.error("Ses çalma hatası:", error);
    });

    // Tarayıcı bildirimi gönder
    if ("Notification" in window && Notification.permission === "granted") {
      new Notification("Pomodoro Timer", {
        body: message,
        icon: "/favicon.ico",
      });
    }
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isActive) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            // Timer completed
            setIsActive(false);
            if (!isBreak) {
              // Pomodoro completed, start break
              setPomodoroCount((prev) => prev + 1);
              const nextBreakDuration =
                pomodoroCount % 4 === 3
                  ? settings.longBreak
                  : settings.shortBreak;
              setMinutes(nextBreakDuration);
              setIsBreak(true);
              playNotification("Çalışma süresi bitti! Mola zamanı.");
            } else {
              // Break completed, start new pomodoro
              setMinutes(settings.focusTime);
              setIsBreak(false);
              playNotification("Mola bitti! Çalışma zamanı.");
            }
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isActive, minutes, seconds, isBreak, pomodoroCount, settings]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setIsBreak(false);
    setMinutes(settings.focusTime);
    setSeconds(0);
    setPomodoroCount(0);
  };

  const skipPhase = () => {
    setIsActive(false);
    if (isBreak) {
      setIsBreak(false);
      setMinutes(settings.focusTime);
    } else {
      setPomodoroCount((prev) => prev + 1);
      setIsBreak(true);
      setMinutes(
        pomodoroCount % 4 === 3 ? settings.longBreak : settings.shortBreak
      );
    }
    setSeconds(0);
  };

  const saveSettings = (newSettings: TimerSettings) => {
    setSettings(newSettings);
    localStorage.setItem("pomodoroSettings", JSON.stringify(newSettings));
    // Update current timer if needed
    if (!isActive) {
      if (!isBreak) {
        setMinutes(newSettings.focusTime);
      } else {
        setMinutes(
          pomodoroCount % 4 === 3
            ? newSettings.longBreak
            : newSettings.shortBreak
        );
      }
      setSeconds(0);
    }
    setShowSettings(false);
  };

  const getPhaseColor = () => {
    if (isBreak) {
      return pomodoroCount % 4 === 0
        ? "bg-purple-500/10 border-purple-500" // Uzun mola
        : "bg-green-500/10 border-green-500"; // Kısa mola
    }
    return "bg-blue-500/10 border-blue-500"; // Çalışma süresi
  };

  const getPhaseTextColor = () => {
    if (isBreak) {
      return pomodoroCount % 4 === 0
        ? "text-purple-500" // Uzun mola
        : "text-green-500"; // Kısa mola
    }
    return "text-blue-500"; // Çalışma süresi
  };

  const getPhaseTitle = () => {
    if (isBreak) {
      return pomodoroCount % 4 === 0 ? "Long Break" : "Short Break";
    }
    return "Focus Time";
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50"
    >
      <div
        className={`p-6 rounded-xl shadow-xl w-96 border backdrop-blur-md bg-opacity-30 ${getPhaseColor()} transition-colors duration-300`}
      >
        <div className="flex justify-between items-center mb-6">
          <h2
            className={`text-xl font-semibold ${getPhaseTextColor()} transition-colors duration-300`}
          >
            {getPhaseTitle()}
          </h2>
          <div className="flex items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowSettings(true)}
              className={`${getPhaseTextColor()} transition-colors duration-300 hover:opacity-80`}
              title="Settings"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </motion.button>
            <button
              onClick={onClose}
              className={`${getPhaseTextColor()} transition-colors duration-300 hover:opacity-80`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="text-center mb-8">
          <h3 className="text-gray-400 mb-2">{taskTitle}</h3>
          <div
            className={`text-6xl font-bold ${getPhaseTextColor()} transition-colors duration-300 mb-4`}
          >
            {String(minutes).padStart(2, "0")}:
            {String(seconds).padStart(2, "0")}
          </div>
          <div className="text-sm text-gray-400">
            Pomodoro #{Math.floor(pomodoroCount / 4) + 1}.
            {(pomodoroCount % 4) + 1} • {getPhaseTitle()}
          </div>
        </div>

        <div className="flex justify-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTimer}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              isActive
                ? "bg-red-500 hover:bg-red-600 text-white"
                : `${getPhaseColor().replace(
                    "/10",
                    ""
                  )} hover:opacity-90 text-white`
            }`}
          >
            {isActive ? "Pause" : "Start"}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={resetTimer}
            className="px-6 py-2 rounded-lg font-medium bg-gray-700 hover:bg-gray-600 text-white transition-colors"
          >
            Reset
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={skipPhase}
            className="px-6 py-2 rounded-lg font-medium bg-gray-700 hover:bg-gray-600 text-white transition-colors"
          >
            Skip
          </motion.button>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-800">
          <div className="flex justify-between text-sm text-gray-400">
            <span>Completed Pomodoros: {pomodoroCount}</span>
            <span>
              Total Focus Time: {pomodoroCount * settings.focusTime} min
            </span>
          </div>
        </div>

        <AnimatePresence>
          {showSettings && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            >
              <div className="bg-[#1A1B23] p-6 rounded-xl shadow-xl w-96">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-white">
                    Timer Settings
                  </h2>
                  <button
                    onClick={() => setShowSettings(false)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Focus Time (minutes)
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="60"
                      value={settings.focusTime}
                      onChange={(e) =>
                        setSettings({
                          ...settings,
                          focusTime: Number(e.target.value),
                        })
                      }
                      className="w-full bg-[#2A2B33] text-white px-4 py-2 rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Short Break (minutes)
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="30"
                      value={settings.shortBreak}
                      onChange={(e) =>
                        setSettings({
                          ...settings,
                          shortBreak: Number(e.target.value),
                        })
                      }
                      className="w-full bg-[#2A2B33] text-white px-4 py-2 rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Long Break (minutes)
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="60"
                      value={settings.longBreak}
                      onChange={(e) =>
                        setSettings({
                          ...settings,
                          longBreak: Number(e.target.value),
                        })
                      }
                      className="w-full bg-[#2A2B33] text-white px-4 py-2 rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="mt-6 flex justify-end space-x-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowSettings(false)}
                    className="px-4 py-2 rounded-lg font-medium bg-gray-700 hover:bg-gray-600 text-white transition-colors"
                  >
                    Cancel
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => saveSettings(settings)}
                    className="px-4 py-2 rounded-lg font-medium bg-blue-500 hover:bg-blue-600 text-white transition-colors"
                  >
                    Save
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Pomodoro;
