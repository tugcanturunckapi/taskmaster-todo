"use client";

import TodoList from "@/components/TodoList";

export default function Home() {
  return (
    <div className="bg-[#0A0B14] text-white min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Organize Your Tasks Effortlessly
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Stay productive and never miss a task with our intuitive todo list
            application
          </p>
        </div>

        {/* Todo List Section */}
        <TodoList />
      </section>
    </div>
  );
}
