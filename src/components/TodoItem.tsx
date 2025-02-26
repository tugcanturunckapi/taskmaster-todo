"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Draggable,
  DraggableProvided,
  DraggableStateSnapshot,
} from "@hello-pangea/dnd";
import Pomodoro from "./Pomodoro";

interface TodoItemProps {
  id: string;
  index: number;
  title: string;
  completed: boolean;
  priority: "high" | "medium" | "low";
  category?: {
    name: string;
    color: string;
  };
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TodoItem = ({
  id,
  index,
  title,
  completed,
  priority,
  category,
  onToggle,
  onDelete,
}: TodoItemProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showPomodoro, setShowPomodoro] = useState(false);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-500";
      case "medium":
        return "bg-yellow-500";
      case "low":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case "high":
        return (
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        );
      case "medium":
        return (
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h8"
            />
          </svg>
        );
      case "low":
        return (
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Draggable draggableId={id} index={index}>
        {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className={`p-4 rounded-lg ${
              snapshot.isDragging
                ? "bg-[#2A2B33] shadow-lg ring-2 ring-blue-500"
                : isHovered
                ? "bg-[#2A2B33]"
                : "bg-[#1A1B23]"
            } transition-colors duration-200`}
            style={{
              ...provided.draggableProps.style,
              cursor: snapshot.isDragging ? "grabbing" : "grab",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 flex-grow">
                <motion.button
                  whileTap={{ scale: 0.8 }}
                  onClick={() => onToggle(id)}
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors duration-200 ${
                    completed
                      ? "bg-blue-500 border-blue-500"
                      : "border-gray-400 hover:border-blue-500"
                  }`}
                >
                  {completed && (
                    <motion.svg
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-4 h-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </motion.svg>
                  )}
                </motion.button>

                <span
                  className={`flex-grow text-lg ${
                    completed ? "line-through text-gray-500" : "text-gray-200"
                  }`}
                >
                  {title}
                </span>
              </div>

              <div className="flex items-center gap-2 ml-auto">
                {category && (
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${category.color} bg-opacity-20 flex items-center gap-1`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full ${category.color}`}
                    />
                    {category.name}
                  </span>
                )}
                <span
                  className={`px-2 py-1 rounded-full text-xs ${getPriorityColor(
                    priority
                  )} bg-opacity-20 flex items-center gap-1`}
                >
                  {getPriorityIcon(priority)}
                  <span>
                    {priority.charAt(0).toUpperCase() + priority.slice(1)}
                  </span>
                </span>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setShowPomodoro(true)}
                  className="text-gray-400 hover:text-blue-500 transition-colors p-1 rounded-full hover:bg-blue-500/10"
                  title="Start Pomodoro Timer"
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
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => onDelete(id)}
                  className="text-gray-400 hover:text-red-500 transition-colors p-1 rounded-full hover:bg-red-500/10"
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
                </motion.button>
              </div>
            </div>
          </div>
        )}
      </Draggable>

      <AnimatePresence>
        {showPomodoro && (
          <Pomodoro taskTitle={title} onClose={() => setShowPomodoro(false)} />
        )}
      </AnimatePresence>
    </>
  );
};

export default TodoItem;
