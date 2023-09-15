import { useState } from "react";
import { EditTasks } from "./EditTask";
import { Form } from "./Form";
import { List } from "./List";
import { Local } from "./LocalStorage";
import { Filter } from "./Filter";




export const Tasks = () => {
    const [tasks, setTasks] = useState([])
    const [filter, setFilter] = useState("All")
    const [filteredTasks, setFilteredTasks] = useState([])
    const [isFirstRender, setIsFirstRender] = useState(false);

    return (
        <div className="container" >
            
            <Local tasks={tasks} 
            setTasks={setTasks} 
            />
            
            <Form
            tasks={tasks}
            setTasks={setTasks}
            setFilteredTasks={setFilteredTasks}
            setIsFirstRender={setIsFirstRender}/>
            
            <List tasks={filteredTasks} 
            EditTasks={EditTasks} 
            setFilter={setFilter}
            filter={filter}
            setTasks={setTasks}
            setIsFirstRender={setIsFirstRender}
            isFirstRender={isFirstRender} />
            
            <Filter tasks={tasks} 
            filter={filter} 
            setFilteredTasks={setFilteredTasks}
            />
        </div>
    )
}