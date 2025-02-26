"use client";

import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaClock,
  FaListUl,
  FaBell,
  FaPalette,
  FaCloud,
  FaGlobe,
  FaLock,
} from "react-icons/fa";

const features = [
  {
    icon: <FaListUl className="w-8 h-8 text-blue-500" />,
    title: "Akıllı Görev Yönetimi",
    description:
      "Görevlerinizi önceliklendirebilir, kategorize edebilir ve kolayca organize edebilirsiniz.",
  },
  {
    icon: <FaClock className="w-8 h-8 text-green-500" />,
    title: "Pomodoro Zamanlayıcı",
    description:
      "Her görev için entegre Pomodoro zamanlayıcısı ile üretkenliğinizi artırın.",
  },
  {
    icon: <FaBell className="w-8 h-8 text-purple-500" />,
    title: "Akıllı Bildirimler",
    description:
      "Görev hatırlatmaları ve Pomodoro bildirimleri ile hiçbir şeyi kaçırmayın.",
  },
  {
    icon: <FaPalette className="w-8 h-8 text-yellow-500" />,
    title: "Özelleştirilebilir Arayüz",
    description: "Tema ve renk seçenekleri ile arayüzü kişiselleştirin.",
  },
  {
    icon: <FaCloud className="w-8 h-8 text-sky-500" />,
    title: "Bulut Senkronizasyonu",
    description:
      "Görevlerinize her cihazdan erişin ve verilerinizi güvenle saklayın.",
  },
  {
    icon: <FaGlobe className="w-8 h-8 text-indigo-500" />,
    title: "Çoklu Dil Desteği",
    description: "Uygulamayı kendi dilinizde kullanın.",
  },
  {
    icon: <FaLock className="w-8 h-8 text-red-500" />,
    title: "Güvenli Veri",
    description: "End-to-end şifreleme ile verileriniz güvende.",
  },
  {
    icon: <FaCheckCircle className="w-8 h-8 text-emerald-500" />,
    title: "İlerleme Takibi",
    description: "Detaylı istatistikler ve raporlar ile gelişiminizi izleyin.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Features() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-900 sm:text-5xl"
          >
            Özelliklerimiz
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-xl text-gray-600"
          >
            Modern ve kullanıcı dostu bir deneyim için tasarlandı
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gray-50 rounded-full mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
