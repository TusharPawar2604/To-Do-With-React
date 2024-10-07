import { useState } from "react";

const Input = (props) =>{

    const {tasks, settasks} = props;
    const [Title, setTitle] = useState("");


    
    const TaskHandler = (e) =>{
        e.preventDefault()
    
        const newTasks = {Title , completed: false}
    
      
        const copytasks = [...tasks];
        copytasks.push(newTasks);
        settasks(copytasks);
        console.log(copytasks);
        setTitle("");
        }


    return(
        <form onSubmit={TaskHandler} className="w-[95%] flex flex-col md:flex-row justify-between px-5 my-[4%]">
                <input
                onChange={(e) => setTitle(e.target.value)}
                value={Title}
                    placeholder="write your next task..."
                    className="px-5 py-3 text-blue-800 outline-none w-full md:w-[85%] rounded-xl bg-lightblue-100 border border-blue-200 shadow-md mb-3 md:mb-0"
                    type="text"
                />
                <button className="outline-none md:ml-3 text-4xl font-extrabold flex justify-center items-center w-full md:w-[50px] h-[50px] rounded-full bg-blue-600 text-white shadow-md">
                    <i className="ri-add-fill"></i>
                </button>
            </form>
    )
}

export default Input;