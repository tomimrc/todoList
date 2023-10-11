import { FaPencil, FaTrashCan, FaCheck } from "react-icons/fa6";
import { motion, } from "framer-motion";
import { useEffect } from "react";
import { Footer } from "./Footer";



export const List = ({ tasks, EditTasks, setFilter, setTasks , setIsFirstRender, isFirstRender,filter}) => {
    useEffect(() => {
    window.addEventListener("beforeunload", setIsFirstRender(true)) 
    }, []);

    const divVariants = (index) => {
        return {
            hidden: {
            opacity: 0,
            x: "-100%"
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 1.5,
                type: "spring",
                ease: [0.17, 0.67, 0.83, 0.67],
                delay: isFirstRender ? 0.2 * index : 0.2,
                
            }
        },
        hover:{
            textShadow:"0px 0px 8px rgb(134, 22, 110)",
            boxShadow:"0px 0px 8px rgb(134, 22, 110)",
            borderRadius:"13px",
            
        }
    }}

    const textVariants = (tasks) => {
        return tasks.length >= 1 ? tasks.map((task) => {
            return {
                hidden: {
                    textDecoration: "none",
                    color: "#fff"
                },
                visible: {
                    textDecoration: task.completed ? "line-through" : "none",
                    color: task.completed ? "#8f8c8c" : "#fff",
                    transition: { duration: 1.5 }
                },
            };
        })
    :""}

    const iconVariants = {
        hover:{
            scale:1.35, cursor:"pointer"
        }
    }

    const getTextVariant = textVariants(tasks)

    const handleCompleted = (id) => {
        setTasks(tasks.map(task => task.id == id ? { ...task, completed: !task.completed } : task))
    }

    const handleRemove = (id) => {
        setTasks(tasks.filter(task => task.id !== id))
    }

    const handleEdit = (id) => {
        setTasks(tasks.map(task => task.id == id ?
            { ...task, isEditing: !task.isEditing } :
            task))
        console.log(tasks)
    }

    const handleEditTask = (value, id) => {
        setTasks(tasks.map(task => task.id == id ? {
            ...task, name: value, isEditing: !task.isEditing
        } : task))
    }


    return (
        <>
            <motion.div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }} >
                {tasks.length >= 1 ? tasks.map((task, index) => {
                    return (
                        task.isEditing
                            ? <EditTasks task={task} handleEditTask={handleEditTask} />
                            :
                            <motion.section variants={divVariants(index, task)} initial="hidden" animate="visible" whileHover="hover" key={task.id}
                                className={`div-tasks ${task.completed ? "completed" : ""}`}>
                                <motion.div variants={getTextVariant[index]} initial="hidden" animate="visible" style={{ display: "flex", alignItems: "center", gap: "1rem", margin: "5px", maxWidth: "70%" }}>
                                    <motion.div variants={iconVariants} whileHover="hover" >
                                        <FaCheck onClick={() => handleCompleted(task.id)} />
                                    </motion.div>
                                    <div>
                                        <motion.h4>{task.name.toUpperCase()}</motion.h4>
                                        <motion.p>Creado el {task.date}</motion.p>
                                    </div>
                                </motion.div>
                                <div style={{ width: "15%", display: "flex", justifyContent: "space-between", paddingRight: "10px" }}>
                                    <motion.div variants={iconVariants} whileHover="hover" ><FaPencil className="icon" onClick={() => handleEdit(task.id)}/></motion.div>
                                    <motion.div variants={iconVariants} whileHover="hover" ><FaTrashCan className="icon" onClick={() => handleRemove(task.id)}/></motion.div>
                                </div>
                            </motion.section>
                    )
                }) : ""}
            </motion.div >
            <Footer filter={filter} setFilter={setFilter} tasks={tasks} setIsFirstRender={setIsFirstRender} />

        </>
    )
}
