import { createContext, useContext, useReducer } from "react";
import updateTask from './Reducers';

const DataBase = createContext();

const Context = ({children}) => {

    const DataTable = [
        {   
            id:1, 
            TaskSheet:[
                { 
                    id: 11, 
                    TaskName: 'Task 1', 
                    SubTasksFinished : 1, 
                    SubTasksTotal:5, 
                    SubTasks: [{ id: 1, SubTaskName: "Read Redux", SubTaskStatus: true },{ id: 2, SubTaskName: "SubTask 1", SubTaskStatus: true }] 
                },
                { 
                    id: 11, 
                    TaskName: 'Task 1', 
                    SubTasksFinished : 1, 
                    SubTasksTotal:5, 
                    SubTasks: [{ id: 1, SubTaskName: "Read Redux", SubTaskStatus: true },{ id: 2, SubTaskName: "SubTask 1", SubTaskStatus: true }] 
                }
            ]
        },
        {   
            id:2, 
            LearningSheet:[
                { id: 11, Date: '01 Jan 2023', dailyLessons: [
                    { id: 1,  Topic: 'CallBack 1', Description:'It send Data from component comp to Parent component'},
                    { id: 2,  Topic: 'CSS', Description:'Use To style WebPAge'}]
                },
                { id: 12, Date: '02 Jan 2023', dailyLessons: [
                    { id: 1,  Topic: 'CallBack 2', Description:'It send Data from component comp to Parent component'},
                    { id: 2,  Topic: 'CSS', Description:'Use To style WebPAge'}]
                }
            ]
        }
    ]

    const TasksDataTable = [
        { id: 11, TaskName: 'Task 1', SubTasksFinished : 1, SubTasksTotal:5, SubTasks: [{ id: 1, SubTaskName: "Read Redux", SubTaskStatus: true },{ id: 2, SubTaskName: "SubTask 1", SubTaskStatus: true }] },
        { id: 22, TaskName: 'Task 2', SubTasksFinished : 2, SubTasksTotal:5, SubTasks: [{ id: 1, SubTaskName: "SubTask 1", SubTaskStatus: true },{ id: 2, SubTaskName: "SubTask 1", SubTaskStatus: true }] },
        { id: 33, TaskName: 'Task 3', SubTasksFinished : 3, SubTasksTotal:5, SubTasks: [{ id: 1, SubTaskName: "SubTask 1", SubTaskStatus: true },{ id: 2, SubTaskName: "SubTask 1", SubTaskStatus: true }] },
    ];

    const [state, dispatch] = useReducer( updateTask, {TasksDataTable} );

    return (
        <DataBase.Provider value={{state, dispatch}}>
            {children}
        </DataBase.Provider>
    )
}

export const TaskState = () =>{
    return useContext(DataBase);
}

export default Context;
