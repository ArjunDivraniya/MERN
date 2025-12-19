import { all } from 'axios';
import React , {useState ,useEffect}from 'react'

const TodoTask = () => {

    const [allTasks, setAllTAsks] = useState([]);

    const [pop, setPop] = useState(false);

    useEffect(() => {
        localStorage.setItem('tasks' ,JSON.stringify(allTasks));
    },[allTasks]);

    useEffect(() => {
        const tasksFromStorage = localStorage.getItem('tasks');
        if (tasksFromStorage) {
            setAllTAsks (JSON.parse(tasksFromStorage));
        }
    },[]);

    const AddClick = () => {
        setPop(true);
    }

    const addTask = (task) => {
        setAllTAsks(allTasks => [...allTasks,task]);
        setPop(false)
    }

    const close = () => {
        setPop(false)
    }

    const deleteTask = (index) => {
        const newtasks  = allTasks.filter((i) => i != index);
        setAllTAsks(newtasks);

      }
    return (
        <>
            <div>ToDo Tasks</div>

            <div>
                {allTasks.map((task, i) => (
                    <div key={i}>
                        <h1>{task.Title}</h1>
                        <p>{task.description}</p>
                        <span>{task.deadline}</span>
                        <select value={task.status} onChange={(e) => setAllTAsks(allTasks.map((t, idx) => idx === i ? { ...t, status: e.target.value } : t))}> 
                            <option value="Pending">Pending</option>
                            <option value="Process">Process</option>
                            <option value="Completed">Completed</option>
                        </select>
                        <button onClick={() => deleteTask(i)}>delete</button>

                    </div>
                ))}

            </div>

            <button onClick={AddClick}>Add Task</button>
            {pop && <Addpop Add = {addTask} Close = {close}/>}



        </>
    )
}

export default TodoTask

const Addpop = ({ Add, Close }) => {
    const [task, setTask] = useState({ Title: "", description: "", deadline: "", status: "Pending" });

    return (
        <>
            <div>
                <input type='text' value={task.Title} placeholder='Enter Title' onChange={(e) => setTask({ ...task , Title: e.target.value })}></input>
                <input type='text' value={task.description} placeholder='Enter decription' onChange={(e) => setTask({ ...task, description: e.target.value })}></input>
                <input type='date' value={task.deadline} placeholder='Enter Dedline' onChange={(e) => setTask({ ...task, deadline: e.target.value })}></input>
                <button onClick={() => Add(task)}>Add Task</button>
                <button onClick={Close}>Close</button>


            </div>
        </>
    )
}
