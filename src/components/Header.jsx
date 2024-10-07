const Header = (props) =>{
    const {tasks} = props;
    return(
        <div className="mt-[7%] w-[90%] h-[20%] border border-blue-200 shadow-lg rounded-3xl flex flex-col md:flex-row justify-around items-center bg-lightblue-100 p-4">
                <div className="text-blue-800 mb-4 md:mb-0">
                    <h1 className="text-2xl md:text-3xl font-bold">LETS TODO</h1>
                    <p className="text-sm md:text-base">Keeps doing things</p>
                </div>
                <div className="text-2xl md:text-3xl font-extrabold flex justify-center items-center w-[70px] h-[70px] md:w-[90px] md:h-[90px] rounded-full bg-blue-600 text-white">
                    {tasks.filter(task => task.completed).length}/{tasks.length}
                </div>
            </div>
    )
}

export default Header;