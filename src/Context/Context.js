import { createContext } from "react";

const DataBase = createContext(null);

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
                    id: 12, 
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



    // const [state, dispatch] = useReducer( updateTask, {TasksDataTable} );

    return (
        <DataBase.Provider value={DataTable}>
            {children}
        </DataBase.Provider>
    )
}

export {DataBase};
export default Context;
