
import { useEffect } from "react";

export const Local = ({tasks,setTasks}) => {

    let formatted = []
    
    const getLocal = () => {
        let formateado = JSON.parse(localStorage.getItem("tasks"))
        formatted = formateado

        return formatted
    }
    
    useEffect(() => {
        if (tasks.length > 0) {
            localStorage.setItem("tasks", JSON.stringify(tasks));
            getLocal()
        }
    }, [tasks]);
    
    
    useEffect(() => {
        getLocal()
        if (formatted !== null ){
            setTasks(formatted)
        }
    }, [])


return (
    <></>
)


}