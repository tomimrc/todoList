import { useEffect } from "react"


export const Filter = ({ filter, setFilteredTasks, tasks }) => {
    
    useEffect(() => {
        if (filter == "All") {
            setFilteredTasks(tasks)
        } else if (filter == "Active" && tasks.length >= 1) {
            const activeTasks = tasks.filter(tasks => tasks.completed !== true)
            setFilteredTasks(activeTasks)
        } else if (filter == "Completed" && tasks.length >= 1) {
            const completedTasks = tasks.filter(tasks => tasks.completed !== false)
            setFilteredTasks(completedTasks)
        }
    }, [filter, tasks])




    return (
        <></>
    )
}