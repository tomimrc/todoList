import { motion } from "framer-motion"

export const Footer = ({tasks, filter, setFilter,setIsFirstRender}) => {


    const filters = ["All", "Active", "Completed"]

    const showTodos = (e) => {
        setFilter(e)
        setIsFirstRender(true)
    }

    const footerVariants = {
        hidden:{ y: "200px", opacity: 0 },
        visible:{ y: "0", opacity: 1 ,
        transition:{ 
            duration: 1.5, 
            type: "spring", 
            delay: 0.5 }
        },
        
    }


    return(

        <motion.footer  className="footer" variants={footerVariants} initial="hidden" animate="visible" whileHover="hover">
            <span>Items {tasks.length}</span>
            <ul>
                {filters.map((filt) => {
                    return (
                        <motion.li style={{ listStyle: "none", cursor:"pointer" }}
                            whileHover={{ scale: 1.15, textShadow: "0px 0px 8px rgb(134, 22, 110)" }}
                            key={filt} onClick={() => showTodos(filt)}
                            className={filt == filter ? filt : ""}
                        >{filt}
                            {filt === filter && <motion.div className="underline" layoutId="underline" transition={{ type: "spring", bounce: 0.4 }} />}
                        </motion.li>
                    )
                })}
            </ul>
        </motion.footer>
    )
}