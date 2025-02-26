"use client";

import { useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";
import { TodoContext } from "./ClientLayout";
import { DragDropContext, Droppable, DropResult } from "@hello-pangea/dnd";

interface TodoListProps {
  initialFilter?: "all" | "active" | "completed";
}

const TodoList = ({ initialFilter = "all" }: TodoListProps) => {
  const {
    categories,
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
    clearCompleted,
    reorderTodos,
    isLoading,
  } = useContext(TodoContext);
  const [filter, setFilter] = useState<"all" | "active" | "completed">(
    initialFilter
  );
  const [selectedCategory, setSelectedCategory] = useState<string | "all">(
    "all"
  );

  if (isLoading) {
    return (
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="animate-pulse">
          <div className="h-12 bg-gray-700 rounded-lg mb-6"></div>
          <div className="space-y-4">
            <div className="h-16 bg-gray-700 rounded-lg"></div>
            <div className="h-16 bg-gray-700 rounded-lg"></div>
            <div className="h-16 bg-gray-700 rounded-lg"></div>
          </div>
        </div>
      </div>
    );
  }

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const sourceIndex = result.source.index;
    const destinationIndex = result.destination.index;

    const filteredTodos = todos
      .filter((todo) => {
        let passesFilter = true;
        if (filter === "active") passesFilter = !todo.completed;
        if (filter === "completed") passesFilter = todo.completed;
        if (selectedCategory !== "all") {
          passesFilter = passesFilter && todo.categoryId === selectedCategory;
        }
        return passesFilter;
      })
      .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

    const draggedItem = filteredTodos[sourceIndex];
    const allTodosSourceIndex = todos.findIndex((t) => t.id === draggedItem.id);
    const destinationItem = filteredTodos[destinationIndex];
    const allTodosDestinationIndex = todos.findIndex(
      (t) => t.id === destinationItem.id
    );

    reorderTodos(allTodosSourceIndex, allTodosDestinationIndex);
  };

  const filteredTodos = todos
    .filter((todo) => {
      let passesFilter = true;
      if (filter === "active") passesFilter = !todo.completed;
      if (filter === "completed") passesFilter = todo.completed;
      if (selectedCategory !== "all") {
        passesFilter = passesFilter && todo.categoryId === selectedCategory;
      }
      return passesFilter;
    })
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

  const activeTodosCount = todos.filter((todo) => !todo.completed).length;

  const getCategoryById = (id?: string) => {
    if (!id) return undefined;
    return categories.find((cat) => cat.id === id);
  };

  const getCategoryStats = () => {
    const stats = categories.map((category) => ({
      ...category,
      count: todos.filter((todo) => todo.categoryId === category.id).length,
      completed: todos.filter(
        (todo) => todo.categoryId === category.id && todo.completed
      ).length,
    }));
    return stats;
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <AddTodo onAdd={addTodo} categories={categories} />

      {/* Category Stats */}
      {categories.length > 0 && (
        <div className="bg-[#1A1B23] p-4 rounded-lg border border-gray-800">
          <h3 className="text-sm font-medium text-gray-400 mb-3">
            Category Statistics
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {getCategoryStats().map((stat) => (
              <div
                key={stat.id}
                className="bg-[#2A2B33] p-3 rounded-lg hover:scale-105 transition-transform"
              >
                <div className="flex items-center space-x-2 mb-2">
                  <div className={`w-3 h-3 rounded-full ${stat.color}`} />
                  <span className="text-sm text-gray-300">{stat.name}</span>
                </div>
                <div className="text-xs text-gray-400">
                  {stat.completed}/{stat.count} completed
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Category Filter */}
      {categories.length > 0 && (
        <div className="flex gap-2 overflow-x-auto pb-2">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-3 py-1 rounded-full text-sm transition-all ${
              selectedCategory === "all"
                ? "bg-blue-500 text-white"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
          >
            All Categories
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-3 py-1 rounded-full text-sm transition-all ${
                selectedCategory === category.id
                  ? category.color + " text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      )}

      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="todos">
          {(provided, snapshot) => (
            <div
              className={`bg-[#1A1B23] rounded-lg border border-gray-800 divide-y divide-gray-800 transition-colors duration-200 ${
                snapshot.isDraggingOver
                  ? "bg-[#2A2B33] ring-2 ring-blue-500/50"
                  : ""
              }`}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {filteredTodos.map((todo, index) => {
                const category = getCategoryById(todo.categoryId);
                return (
                  <TodoItem
                    key={todo.id}
                    index={index}
                    {...todo}
                    category={
                      category
                        ? {
                            name: category.name,
                            color: category.color,
                          }
                        : undefined
                    }
                    onToggle={toggleTodo}
                    onDelete={deleteTodo}
                  />
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      {todos.length > 0 && (
        <div className="flex justify-between text-sm text-gray-400">
          <span>{activeTodosCount} tasks remaining</span>
          <div className="space-x-4">
            {["all", "active", "completed"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f as typeof filter)}
                className={`hover:text-white transition-colors ${
                  filter === f ? "text-white" : ""
                }`}
              >
                {f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
            <button
              onClick={clearCompleted}
              className="hover:text-white transition-colors"
            >
              Clear Completed
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoList;
