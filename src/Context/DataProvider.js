import { useEffect, useState } from "react"
import DataContext from './DataContext'
import axios from 'axios';


const TaskProvider = (props) => {

    const [taskSheet, setTaskSheet] = useState([]);
    const [timeSheet, setTimeSheet] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = () => {
        axios.get(`http://localhost:5000/getTask`)
            .then((res) => {
                setTaskSheet(res.data.TaskSheetData);
            })
            .catch((err) => {
                alert("Server error!");
            });

            axios.get(`http://localhost:5000/getActivity`)
            .then((res) => {
                setTimeSheet(res.data.TimeSheetData);
            })
            .catch((err) => {
                alert("Server error!");
            });
    }


    return (
        <DataContext.Provider value={{ taskSheet, timeSheet }}>
            {props.children}
        </DataContext.Provider>
    )
}

export default TaskProvider;
