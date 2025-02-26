"use client";

import { createContext, useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Category {
  id: string;
  name: string;
  color: string;
}

interface Todo {
  id: string;
  title: string;
  completed: boolean;
  priority: "high" | "medium" | "low";
  categoryId?: string;
  order?: number;
}

interface TodoContextType {
  categories: Category[];
  setCategories: (categories: Category[]) => void;
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
  addTodo: (todo: {
    title: string;
    priority: "high" | "medium" | "low";
    categoryId?: string;
  }) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  clearCompleted: () => void;
  reorderTodos: (startIndex: number, endIndex: number) => void;
  isLoading: boolean;
}

export const TodoContext = createContext<TodoContextType>({
  categories: [],
  setCategories: () => {},
  todos: [],
  setTodos: () => {},
  addTodo: () => {},
  toggleTodo: () => {},
  deleteTodo: () => {},
  clearCompleted: () => {},
  reorderTodos: () => {},
  isLoading: true,
});

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isClient, setIsClient] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Load data from localStorage on component mount
  useEffect(() => {
    if (!isClient) return; // Only run on client-side

    try {
      const savedCategories = localStorage.getItem("categories");
      const savedTodos = localStorage.getItem("todos");

      if (savedCategories) {
        setCategories(JSON.parse(savedCategories));
      }

      if (savedTodos) {
        const parsedTodos = JSON.parse(savedTodos);
        const todosWithOrder = parsedTodos.map((todo: Todo, index: number) => ({
          ...todo,
          order: todo.order ?? index,
        }));
        setTodos(todosWithOrder);
      }
    } catch (error) {
      console.error("Error loading data from localStorage:", error);
    } finally {
      setIsLoading(false);
    }
  }, [isClient]);

  // Save data to localStorage when they change
  useEffect(() => {
    if (!isClient || isLoading) return; // Only run on client-side and after initial load

    localStorage.setItem("categories", JSON.stringify(categories));
  }, [categories, isLoading, isClient]);

  useEffect(() => {
    if (!isClient || isLoading) return; // Only run on client-side and after initial load

    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos, isLoading, isClient]);

  const addTodo = ({
    title,
    priority,
    categoryId,
  }: {
    title: string;
    priority: "high" | "medium" | "low";
    categoryId?: string;
  }) => {
    const newTodo: Todo = {
      id: Math.random().toString(36).substring(7),
      title,
      completed: false,
      priority,
      categoryId,
      order: todos.length,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const reorderTodos = (startIndex: number, endIndex: number) => {
    const items = Array.from(todos);
    const [reorderedItem] = items.splice(startIndex, 1);
    items.splice(endIndex, 0, reorderedItem);

    const updatedItems = items.map((item, index) => ({
      ...item,
      order: index,
    }));

    setTodos(updatedItems);
  };

  return (
    <TodoContext.Provider
      value={{
        categories,
        setCategories,
        todos,
        setTodos,
        addTodo,
        toggleTodo,
        deleteTodo,
        clearCompleted,
        reorderTodos,
        isLoading,
      }}
    >
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
      <Footer />
    </TodoContext.Provider>
  );
}
