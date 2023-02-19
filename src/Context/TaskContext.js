import { createContext } from "react";

const TaskContext = createContext({
    tasks: [],
    addNewTask: []
})

export default TaskContext;