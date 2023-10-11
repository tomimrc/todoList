import { useState } from "react"
import {FaCheck} from "react-icons/fa6"
import { AnimatePresence, motion } from "framer-motion"


export const EditTasks = ({ task, handleEditTask }) => {

    const [value, setValue] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        handleEditTask(value, task.id)
    }


    return (
    <AnimatePresence>

        <motion.form  initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1.5}} onSubmit={handleSubmit} style={{display: "flex", width: "100%", justifyContent:"space-between", marginBottom:"10px"}}>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder={task.name} style={{
            fontFamily: "Unbounded ,sans serif",
            width: "80%",
            borderradius: "6px",
            border: "none",
            fontsize: "16px",
            fontweight: 300,   
            padding: "10px",}} />
            <button style={{cursor: "pointer" , backgroundColor: "transparent", border:"none"}}><FaCheck  type="submit" style={{fontSize:"16px"}} /></button>
        </motion.form>
    </AnimatePresence>
    )
}