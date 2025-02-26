"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Category {
  id: string;
  name: string;
  color: string;
}

interface AddTodoProps {
  onAdd: (todo: {
    title: string;
    priority: "high" | "medium" | "low";
    categoryId?: string;
  }) => void;
  categories: Category[];
}

const AddTodo = ({ onAdd, categories }: AddTodoProps) => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState<"high" | "medium" | "low">("medium");
  const [categoryId, setCategoryId] = useState<string>("");
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onAdd({
        title: title.trim(),
        priority,
        categoryId: categoryId || undefined,
      });
      setTitle("");
      setPriority("medium");
      setCategoryId("");
      setIsExpanded(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="bg-[#1A1B23] rounded-lg border border-gray-800 p-4 space-y-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="flex gap-4">
        <motion.input
          type="text"
          value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
          onFocus={() => setIsExpanded(true)}
          placeholder="Add a new task..."
          className="flex-grow bg-[#2A2B33] text-gray-200 rounded-lg px-4 py-2 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none"
          whileFocus={{ scale: 1.02 }}
        />
        <motion.button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-600 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Add
        </motion.button>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="space-y-4 overflow-hidden"
          >
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Priority
                </label>
                <div className="flex gap-2">
                  {["low", "medium", "high"].map((p) => (
                    <motion.button
                      key={p}
                      type="button"
                      onClick={() =>
                        setPriority(p as "high" | "medium" | "low")
                      }
                      className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                        priority === p
                          ? p === "high"
                            ? "bg-red-500 text-white"
                            : p === "medium"
                            ? "bg-yellow-500 text-white"
                            : "bg-green-500 text-white"
                          : "bg-[#2A2B33] text-gray-400 hover:bg-gray-700"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {p.charAt(0).toUpperCase() + p.slice(1)}
                    </motion.button>
                  ))}
                </div>
              </div>

              {categories.length > 0 && (
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Category
                  </label>
                  <select
                    value={categoryId}
                    onChange={(e) => setCategoryId(e.target.value)}
                    className="w-full bg-[#2A2B33] text-gray-200 rounded-lg px-4 py-2 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none"
                  >
                    <option value="">No Category</option>
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.form>
  );
};

export default AddTodo;
