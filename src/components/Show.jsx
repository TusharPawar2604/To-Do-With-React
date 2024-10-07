import "../index.css";
import { MdOutlineDoneOutline } from "react-icons/md";

const Show = (props) =>{
    const {tasks, settasks} = props;

    const CompleteToogleHandler = (e,index) =>{
        e.preventDefault();
        const copytasks = [...tasks];
        copytasks[index].completed = !copytasks[index].completed;
        settasks(copytasks);
    }


    const DeleteHandler = (e, index) => {
        e.preventDefault();
        if (tasks[index].completed || window.confirm("Are you sure you want to delete this task?")) {
            const copytasks = [...tasks];
            copytasks.splice(index, 1);
            settasks(copytasks);
        } else {
            alert("Task was not deleted.");
        }
    }

    let renderTasks = (
        <h1 className="text-2xl font-extrabold text-blue-600">No Tasks Here</h1>
    );

    if(tasks.length > 0){
        renderTasks = (
            <ul className="list-none w-[90%] h-[400px] overflow-y-auto mb-2 scrollbar-hide">
                {tasks.map((task, index) => (
                    <li key={index} className="mb-5 flex justify-between items-center border border-blue-200 shadow-lg rounded-xl p-3 bg-white">
                        <div className="flex items-center">
                            <div onClick={(e) => CompleteToogleHandler(e,index)} className={`border mr-4 rounded-full w-[30px] h-[30px] border-blue-600 flex items-center justify-center`}>
                            {task.completed ? <MdOutlineDoneOutline className="text-blue-600 text-xl" /> : ""}
                            </div>
                            <h1 className={`${task.completed ? "line-through" : ""} text-2xl font-extrabold text-blue-800`}>
                                {task.Title}
                            </h1>
                        </div>
                        <div className="flex gap-3 text-2xl text-blue-800">
                            <i className="ri-file-edit-line"></i>
                            <i onClick={(e) => DeleteHandler(e,index)} className="ri-delete-bin-3-line"></i>
                        </div>
                    </li>
                ))}
            </ul>
        );
    }
    return(
       <>
       {renderTasks}
       </>
    )
}

export default Show;