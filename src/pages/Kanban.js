import React from 'react';
import { Kanban } from 'react-kanban-dnd';

const KanbanBoard = () => {
  const board = {
    columns: [
      {
        id: 1,
        title: "To Do",
        cards: [{ id: 1, title: "Task 1" }, { id: 2, title: "Task 2" }]
      },
      {
        id: 2,
        title: "In Progress",
        cards: [{ id: 3, title: "Task 3" }]
      },
      {
        id: 3,
        title: "Done",
        cards: [{ id: 4, title: "Task 4" }]
      }
    ]
  };

  return <Kanban initialBoard={board} />;
};

export default KanbanBoard;
