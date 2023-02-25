import { useState } from "react"
import TaskContext from './TaskContext'

const TaskProvider = (props) => {

    const DataTable =
    {
        TaskSheet: [
            {
                id: new Date().getTime(),
                TaskName: 'Task 1',
                SubTasks: [{SubTaskName: "newSubTask", SubTaskStatus: false}]
            }
        ],
        TimeSheet: [
            {
                id: 555,
                Date: '2023-02-26',
                Activity: [
                    { id: 1, Topic: 'Add your Daily Activity Here', Description: 'Description' }
                ]
            }
        ]

    };

    const [tasks, setTasks] = useState(DataTable.TaskSheet);
    const [dailyActivities, setDailyActivities] = useState(DataTable.TimeSheet);

    const addNewTask = (newEntry) => {
        setTasks((preEntry) => [...preEntry, newEntry]);
    };
    const updateTaskList = (newTaskList) => {
        setTasks(newTaskList);
    };
    const addNewActivity = (newEntry) => {
        setDailyActivities((preEntry) => [...preEntry, newEntry]);
    };



    return (
        <TaskContext.Provider value={{ tasks, addNewTask, updateTaskList, dailyActivities, addNewActivity }}>
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskProvider;
