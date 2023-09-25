import React from "react";
import { Task, TaskAction } from "./TasksProvider";
import { Dispatch } from "react";

interface TasksContextType {
  tasks: Task[];
  dispatch: Dispatch<TaskAction>;
}

const TaskContext = React.createContext<TasksContextType>(
  {} as TasksContextType
);

export default TaskContext;
