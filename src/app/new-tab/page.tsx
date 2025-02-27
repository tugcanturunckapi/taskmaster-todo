"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGoogle, FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import Image from "next/image";

interface Shortcut {
  id: string;
  title: string;
  url: string;
}

// URL'den domain adını çıkaran yardımcı fonksiyon
function extractDomain(url: string): string {
  try {
    const urlObj = new URL(url);
    return urlObj.hostname;
  } catch {
    return url;
  }
}

export default function NewTab() {
  const [shortcuts, setShortcuts] = useState<Shortcut[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("shortcuts");
      return saved
        ? JSON.parse(saved)
        : [
            { id: "1", title: "GitHub", url: "https://github.com" },
            { id: "2", title: "LinkedIn", url: "https://linkedin.com" },
            { id: "3", title: "TaskMaster", url: "/" },
            { id: "4", title: "Ekşi Sözlük", url: "https://eksisozluk.com" },
          ];
    }
    return [];
  });

  const [userName, setUserName] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("userName") || "Guest";
    }
    return "Guest";
  });
  const [isEditingName, setIsEditingName] = useState(false);
  const [greeting, setGreeting] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [newShortcutTitle, setNewShortcutTitle] = useState("");
  const [newShortcutUrl, setNewShortcutUrl] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingShortcut, setEditingShortcut] = useState<Shortcut | null>(null);

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const hour = now.getHours();

      if (hour >= 5 && hour < 12) {
        setGreeting("Good Morning");
      } else if (hour >= 12 && hour < 18) {
        setGreeting("Good Afternoon");
      } else if (hour >= 18 && hour < 22) {
        setGreeting("Good Evening");
      } else {
        setGreeting("Good Night");
      }

      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        })
      );

      setCurrentDate(
        now.toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      );
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    localStorage.setItem("userName", userName);
  }, [userName]);

  const handleNameChange = (e: React.FormEvent) => {
    e.preventDefault();
    const input = (e.target as HTMLFormElement).querySelector("input");
    const newName = input?.value.trim();
    if (newName) {
      setUserName(newName);
      setIsEditingName(false);
    }
  };

  useEffect(() => {
    localStorage.setItem("shortcuts", JSON.stringify(shortcuts));
  }, [shortcuts]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `https://www.google.com/search?q=${encodeURIComponent(
        searchQuery
      )}`;
    }
  };

  const handleAddShortcut = (e: React.FormEvent) => {
    e.preventDefault();
    if (newShortcutTitle.trim() && newShortcutUrl.trim()) {
      const newShortcut = {
        id: Math.random().toString(36).substring(7),
        title: newShortcutTitle.trim(),
        url: newShortcutUrl.trim().startsWith("http")
          ? newShortcutUrl.trim()
          : `https://${newShortcutUrl.trim()}`,
      };
      setShortcuts([...shortcuts, newShortcut]);
      setNewShortcutTitle("");
      setNewShortcutUrl("");
      setShowAddForm(false);
    }
  };

  const handleRemoveShortcut = (id: string) => {
    setShortcuts(shortcuts.filter((shortcut) => shortcut.id !== id));
  };

  const getFaviconUrl = (url: string) => {
    if (url === "/") {
      return null; // TaskMaster için özel logo kullanacağız
    }
    const domain = extractDomain(url);
    return `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
  };

  const handleDragEnd = (result: {
    destination: { index: number } | null;
    source: { index: number };
  }) => {
    if (!result.destination) return;

    const items = Array.from(shortcuts);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setShortcuts(items);
    localStorage.setItem("shortcuts", JSON.stringify(items));
  };

  const handleUrlDrop = (e: React.DragEvent) => {
    e.preventDefault();

    const url =
      e.dataTransfer.getData("text/uri-list") ||
      e.dataTransfer.getData("text/plain");

    if (url) {
      try {
        const urlObj = new URL(url);
        const newShortcut = {
          id: Math.random().toString(36).substring(7),
          title:
            urlObj.hostname
              .replace(/^www\./, "")
              .split(".")[0]
              .charAt(0)
              .toUpperCase() +
            urlObj.hostname
              .replace(/^www\./, "")
              .split(".")[0]
              .slice(1),
          url: url,
        };
        setShortcuts([...shortcuts, newShortcut]);
      } catch {
        console.error("Invalid URL dropped");
      }
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.currentTarget.classList.add(
      "border-blue-500",
      "border-dashed",
      "border-2",
      "bg-blue-500/10",
      "scale-105"
    );
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.currentTarget.classList.remove(
      "border-blue-500",
      "border-dashed",
      "border-2",
      "bg-blue-500/10",
      "scale-105"
    );
  };

  const handleEditShortcut = (shortcut: Shortcut) => {
    setEditingShortcut(shortcut);
    setNewShortcutTitle(shortcut.title);
    setNewShortcutUrl(shortcut.url);
  };

  const handleUpdateShortcut = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingShortcut && newShortcutTitle && newShortcutUrl) {
      setShortcuts(
        shortcuts.map((s) =>
          s.id === editingShortcut.id
            ? { ...s, title: newShortcutTitle, url: newShortcutUrl }
            : s
        )
      );
      setEditingShortcut(null);
      setNewShortcutTitle("");
      setNewShortcutUrl("");
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0B14] text-white flex flex-col items-center justify-center p-8 relative">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h1 className="text-6xl font-bold mb-4 py-10">
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            {greeting}
          </span>
          {isEditingName ? (
            <form onSubmit={handleNameChange} className="inline-block ml-2">
              <input
                type="text"
                defaultValue={userName}
                className="bg-[#1A1B23] text-white px-4 py-2 rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none text-4xl w-40"
                autoFocus
                onBlur={(e) => {
                  if (e.target.value.trim()) {
                    setUserName(e.target.value.trim());
                  }
                  setIsEditingName(false);
                }}
              />
            </form>
          ) : (
            <span
              className="text-white ml-2 cursor-pointer"
              onClick={() => setIsEditingName(true)}
              title="Click to edit name"
            >
              {userName}!
            </span>
          )}
        </h1>
        {/* Gmail Button */}
        <motion.a
          href="https://mail.google.com"
          target="_blank"
          className="inline-flex items-center justify-center p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all mb-4"
        >
          <Image
            src="/Gmail_icon.svg"
            alt="Gmail"
            width={20}
            height={20}
            className="w-5 h-5"
          />
        </motion.a>
        <p className="text-4xl font-light text-gray-300 mb-2">{currentTime}</p>
        <p className="text-xl text-gray-400 mb-4">{currentDate}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="w-full max-w-2xl mb-12"
      >
        <motion.form onSubmit={handleSearch}>
          <div className="relative">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <FaGoogle className="text-gray-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Google..."
              className="w-full bg-[#1A1B23] text-white pl-12 pr-4 py-4 rounded-xl border border-gray-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </motion.form>
      </motion.div>

      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="shortcuts" direction="horizontal">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3"
            >
              {shortcuts.map((shortcut, index) => (
                <Draggable
                  key={shortcut.id}
                  draggableId={shortcut.id}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className={`relative group ${
                        snapshot.isDragging ? "z-50" : ""
                      }`}
                      style={{
                        ...provided.draggableProps.style,
                      }}
                    >
                      <a
                        href={shortcut.url}
                        className="block bg-[#1A1B23] p-3 rounded-xl border border-gray-800 hover:border-gray-700 transition-all hover:transform hover:scale-105"
                        onClick={(e) => {
                          if (snapshot.isDragging) {
                            e.preventDefault();
                          }
                        }}
                      >
                        <div className="flex flex-col items-center">
                          {shortcut.url === "/" ? (
                            <div className="w-8 h-8 mb-2 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg flex items-center justify-center text-white text-lg font-bold">
                              T
                            </div>
                          ) : (
                            <Image
                              src={getFaviconUrl(shortcut.url)}
                              alt={shortcut.title}
                              width={24}
                              height={24}
                              className="w-6 h-6"
                            />
                          )}
                          <span className="text-xs text-gray-300 text-center line-clamp-1">
                            {shortcut.title}
                          </span>
                        </div>
                      </a>
                      <div className="absolute top-1 right-1 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            handleEditShortcut(shortcut);
                          }}
                          className="p-1 rounded-lg bg-blue-500/20 hover:bg-blue-500/40 text-blue-400 transition-colors"
                        >
                          <FaEdit size={12} />
                        </button>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            handleRemoveShortcut(shortcut.id);
                          }}
                          className="p-1 rounded-lg bg-red-500/20 hover:bg-red-500/40 text-red-400 transition-colors"
                        >
                          <FaTrash size={12} />
                        </button>
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}

              {/* Add Shortcut Card */}
              <motion.button
                onClick={() => setShowAddForm(true)}
                onDrop={handleUrlDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                whileHover={{ scale: 1.05 }}
                className="block bg-[#1A1B23]/50 p-3 rounded-xl border border-gray-800/50 hover:border-gray-600 transition-all w-full h-full backdrop-blur-sm relative group"
              >
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 mb-2 bg-gray-500/20 rounded-lg flex items-center justify-center text-gray-400 group-hover:bg-gray-500/30 transition-colors">
                    <FaPlus
                      size={16}
                      className="group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <span className="text-xs text-gray-400">Add New</span>
                  <span className="text-[10px] text-gray-500 mt-0.5 group-hover:text-gray-400 transition-colors">
                    or drop link
                  </span>
                </div>
                <div className="absolute inset-0 border-2 border-dashed border-gray-800/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.button>

              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      {showAddForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-[#1A1B23] p-6 rounded-xl w-full max-w-md">
            <h3 className="text-xl font-semibold mb-4">Add New Shortcut</h3>
            <form onSubmit={handleAddShortcut} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  Title
                </label>
                <input
                  type="text"
                  value={newShortcutTitle}
                  onChange={(e) => setNewShortcutTitle(e.target.value)}
                  className="w-full bg-[#2A2B33] text-white px-4 py-2 rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  URL
                </label>
                <input
                  type="text"
                  value={newShortcutUrl}
                  onChange={(e) => setNewShortcutUrl(e.target.value)}
                  className="w-full bg-[#2A2B33] text-white px-4 py-2 rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none"
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Shortcut Modal */}
      {editingShortcut && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#1A1B23] rounded-xl p-6 w-full max-w-md mx-4"
          >
            <h3 className="text-xl font-semibold mb-4">Edit Shortcut</h3>
            <form onSubmit={handleUpdateShortcut} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  Title
                </label>
                <input
                  type="text"
                  value={newShortcutTitle}
                  onChange={(e) => setNewShortcutTitle(e.target.value)}
                  className="w-full bg-[#2A2B33] text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter shortcut title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  URL
                </label>
                <input
                  type="url"
                  value={newShortcutUrl}
                  onChange={(e) => setNewShortcutUrl(e.target.value)}
                  className="w-full bg-[#2A2B33] text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter URL"
                />
              </div>
              <div className="flex gap-3">
                <button
                  type="submit"
                  className="flex-1 bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-2 transition-colors"
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setEditingShortcut(null);
                    setNewShortcutTitle("");
                    setNewShortcutUrl("");
                  }}
                  className="flex-1 bg-gray-600 hover:bg-gray-700 text-white rounded-lg px-4 py-2 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
}
