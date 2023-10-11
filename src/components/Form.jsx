import { useState } from "react";
import { FaPlus, FaTrashCan} from "react-icons/fa6";
import { v4 as uuidv4 } from 'uuid'
import { motion } from "framer-motion";




export const Form = ({ tasks, setTasks, setFilteredTasks,setIsFirstRender}) => {

    const [formattedTasks, setFormattedTasks] = useState([])
    const [inputTask, setInputTask] = useState("")
    const formattedDate = new Date().toLocaleString();


    const iconVariants = {
        hover:{
            scale:1.35, cursor:"pointer"
        }
    }

    const handleEnter = (e) => {
        if (e.key == "Enter") {
            if (inputTask !== "") {
                e.target.value = ""
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (formattedTasks.length == 0) {
            if (inputTask !== "") {
                if (tasks.length < 1) {
                    setTasks([toDo])
                } else {
                    setTasks(prevState => [...prevState, toDo])
                }
            }
        } else{
            setTasks( toDo)
        }
        setInputTask("")
        handleEnter(e)
        setIsFirstRender(false);
    }

    const handleChange = (e) => {
        setInputTask(e.target.value)
    }
    const handleDelete = () => {
        setTasks("")
        localStorage.clear()
        setFormattedTasks([])
        setFilteredTasks("")
    }

    const toDo = {
        name: inputTask,
        id: uuidv4(),
        completed: false,
        date: formattedDate,
        isEditing: false
    }

    return (
        <motion.form
        onSubmit={handleSubmit}
        className="container">
                    <label htmlFor="text">
                        <motion.h1 className="title"
                        initial={{opacity: 0, y:"-200px"}}
                        animate={{opacity: 1, y:"0px"}}
                        transition={{duration: 1.5,delay: 0.5,
                        type: "spring"}}
                        >Lista de tareas
                        </motion.h1>
                        </label>
                <motion.div className="input-div"
                            initial={{x:"100vw"}}
                            animate={{x:"0px"}}
                            transition={{duration:1.2, type: "spring", delay:0.3, stiffness:100}}
                            >
                    <motion.input whileHover={{boxShadow:"0px 0px 8px rgb(134, 22, 110)", transition:{duration:1, delay:0}}} type="text" id="text" value={inputTask} onChange={handleChange} placeholder="Que tarea quieres agregar?" />
                    <div style={{ width: "15%", display: "flex", justifyContent: "space-between", paddingRight: "10px" }}>
                    <motion.button  variants={iconVariants} whileHover="hover" style={{ backgroundColor: "transparent", border: "none", padding:0 }} type="submit">
                        <FaPlus className="icon" style={{fontSize: "16px"}} />
                    </motion.button>
                    <motion.div variants={iconVariants} whileHover="hover">
                        <FaTrashCan className="icon" onClick={handleDelete} />
                    </motion.div>
                    </div>
                </motion.div>
                    </motion.form>
    )
}