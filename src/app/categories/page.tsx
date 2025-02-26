"use client";

import { useContext, useState } from "react";
import { TodoContext } from "@/components/ClientLayout";

interface Category {
  id: string;
  name: string;
  color: string;
}

export default function CategoriesPage() {
  const { categories, setCategories } = useContext(TodoContext);
  const [newCategory, setNewCategory] = useState("");
  const [selectedColor, setSelectedColor] = useState("bg-blue-500");

  const colors = [
    "bg-blue-500",
    "bg-purple-500",
    "bg-green-500",
    "bg-red-500",
    "bg-yellow-500",
    "bg-pink-500",
    "bg-indigo-500",
    "bg-orange-500",
  ];

  const handleAddCategory = (e: React.FormEvent) => {
    e.preventDefault();
    if (newCategory.trim()) {
      const category = {
        id: Math.random().toString(36).substring(7),
        name: newCategory.trim(),
        color: selectedColor,
      };
      setCategories([...categories, category]);
      setNewCategory("");
    }
  };

  const handleDeleteCategory = (id: string) => {
    setCategories(categories.filter((category) => category.id !== id));
  };

  return (
    <div className="bg-[#0A0B14] text-white min-h-screen">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-8">Categories</h1>

        {/* Add Category Form */}
        <div className="bg-[#1A1B23] p-6 rounded-lg border border-gray-800 mb-8">
          <form onSubmit={handleAddCategory} className="space-y-4">
            <div className="flex gap-4">
              <input
                type="text"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                placeholder="New category name"
                className="flex-1 bg-[#2A2B33] text-white px-4 py-3 rounded-md border border-gray-700 focus:border-blue-500 focus:outline-none"
              />
              <div className="flex items-center space-x-2">
                {colors.map((color) => (
                  <button
                    key={color}
                    type="button"
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full ${color} ${
                      selectedColor === color ? "ring-2 ring-white" : ""
                    }`}
                  />
                ))}
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md transition-colors"
              >
                Add Category
              </button>
            </div>
          </form>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-[#1A1B23] p-4 rounded-lg border border-gray-800 flex items-center justify-between group hover:bg-[#2A2B33] transition-colors"
            >
              <div className="flex items-center space-x-3">
                <div className={`w-4 h-4 rounded-full ${category.color}`} />
                <span className="text-gray-300">{category.name}</span>
              </div>
              <button
                onClick={() => handleDeleteCategory(category.id)}
                className="text-gray-500 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
