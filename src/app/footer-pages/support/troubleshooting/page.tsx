"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaSearch,
  FaBug,
  FaExclamationTriangle,
  FaSync,
  FaLock,
  FaBell,
} from "react-icons/fa";

const TroubleshootingPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const commonIssues = [
    {
      category: "Hesap ve Giriş",
      icon: FaLock,
      problems: [
        {
          title: "Şifremi unuttum",
          solution:
            "Giriş sayfasındaki 'Şifremi Unuttum' bağlantısını kullanarak şifre sıfırlama e-postası alabilirsiniz.",
          steps: [
            "Giriş sayfasına gidin",
            "'Şifremi Unuttum' bağlantısına tıklayın",
            "E-posta adresinizi girin",
            "Gelen e-postadaki talimatları takip edin",
          ],
        },
        {
          title: "Hesabıma erişemiyorum",
          solution:
            "Hesap erişim sorunları genellikle yanlış kimlik bilgileri veya hesap kilitlemeleriyle ilgilidir.",
          steps: [
            "Doğru e-posta adresi kullandığınızdan emin olun",
            "Caps Lock tuşunun kapalı olduğunu kontrol edin",
            "Tarayıcı önbelleğini temizleyin",
            "Sorun devam ederse destek ekibiyle iletişime geçin",
          ],
        },
      ],
    },
    {
      category: "Senkronizasyon",
      icon: FaSync,
      problems: [
        {
          title: "Görevlerim senkronize olmuyor",
          solution:
            "Senkronizasyon sorunları genellikle internet bağlantısı veya tarayıcı önbelleği kaynaklıdır.",
          steps: [
            "İnternet bağlantınızı kontrol edin",
            "Sayfayı yenileyin",
            "Tarayıcı önbelleğini temizleyin",
            "Farklı bir tarayıcı deneyin",
          ],
        },
        {
          title: "Değişiklikler kaydedilmiyor",
          solution:
            "Değişikliklerin kaydedilmemesi durumunda aşağıdaki adımları deneyin:",
          steps: [
            "İnternet bağlantınızı kontrol edin",
            "Sayfayı yenileyin",
            "Tarayıcı önbelleğini temizleyin",
            "Oturumu kapatıp tekrar açın",
          ],
        },
      ],
    },
    {
      category: "Bildirimler",
      icon: FaBell,
      problems: [
        {
          title: "Bildirimler gelmiyor",
          solution:
            "Bildirim sorunları genellikle tarayıcı ayarları veya sistem izinleriyle ilgilidir.",
          steps: [
            "Tarayıcı bildirim izinlerini kontrol edin",
            "Sistem bildirim ayarlarını kontrol edin",
            "Tarayıcıyı yeniden başlatın",
            "Bildirim tercihlerinizi güncelleyin",
          ],
        },
        {
          title: "Bildirimler geç geliyor",
          solution: "Bildirim gecikmelerini çözmek için şu adımları izleyin:",
          steps: [
            "İnternet bağlantınızı kontrol edin",
            "Tarayıcı önbelleğini temizleyin",
            "Bildirim ayarlarını kontrol edin",
            "Uygulamayı yeniden başlatın",
          ],
        },
      ],
    },
    {
      category: "Performans",
      icon: FaBug,
      problems: [
        {
          title: "Uygulama yavaş çalışıyor",
          solution:
            "Performans sorunlarını çözmek için aşağıdaki adımları deneyin:",
          steps: [
            "Tarayıcı önbelleğini temizleyin",
            "Diğer sekmeleri kapatın",
            "Tarayıcıyı güncelleyin",
            "İnternet bağlantınızı kontrol edin",
          ],
        },
        {
          title: "Sayfa yüklenmiyor",
          solution: "Sayfa yükleme sorunlarını çözmek için:",
          steps: [
            "Sayfayı yenileyin",
            "Tarayıcı önbelleğini temizleyin",
            "İnternet bağlantınızı kontrol edin",
            "Farklı bir tarayıcı deneyin",
          ],
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#0A0B14] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Sorun Giderme
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Yaygın sorunlar ve çözüm yolları
          </p>

          <div className="max-w-2xl mx-auto relative">
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Sorun veya çözüm arayın..."
              className="w-full bg-[#1A1B23] text-white pl-12 pr-4 py-4 rounded-lg border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none"
            />
          </div>
        </motion.div>

        <div className="space-y-8">
          {commonIssues.map((category) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#1A1B23] rounded-xl p-6 border border-gray-800"
            >
              <div className="flex items-center space-x-4 mb-6">
                <category.icon className="w-6 h-6 text-blue-500" />
                <h2 className="text-2xl font-semibold">{category.category}</h2>
              </div>

              <div className="space-y-6">
                {category.problems.map((problem) => (
                  <div
                    key={problem.title}
                    className="bg-[#2A2B33] rounded-lg p-6 space-y-4"
                  >
                    <h3 className="text-xl font-semibold flex items-center">
                      <FaExclamationTriangle className="w-5 h-5 text-yellow-500 mr-3" />
                      {problem.title}
                    </h3>
                    <p className="text-gray-400">{problem.solution}</p>
                    <div className="mt-4">
                      <h4 className="font-semibold mb-2">Çözüm Adımları:</h4>
                      <ol className="list-decimal list-inside space-y-2 text-gray-400">
                        {problem.steps.map((step, stepIndex) => (
                          <li key={stepIndex}>{step}</li>
                        ))}
                      </ol>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-semibold mb-4">
            Sorununuz çözülmedi mi?
          </h2>
          <p className="text-gray-400 mb-8">
            Destek ekibimiz size yardımcı olmaktan memnuniyet duyacaktır.
          </p>
          <a
            href="/footer-pages/support/contact"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
          >
            İletişime Geçin
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default TroubleshootingPage;
