"use client";

import TodoList from "../../components/TodoList";

export default function ActivePage() {
  return (
    <div className="bg-[#0A0B14] text-white min-h-screen">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Active Tasks
          </h1>
          <p className="text-xl text-gray-400">
            Focus on your pending tasks and stay productive
          </p>
        </div>

        {/* Todo List Section */}
        <TodoList initialFilter="active" />
      </section>
    </div>
  );
}
