import { useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import Show from "./components/Show";

const App = () => {

    const [tasks, settasks] = useState([]);
    
    return (
        <div className="border-t-2 w-screen h-screen bg-white flex items-center justify-center">
          <div className="flex items-center flex-col h-[80%] w-[90%] md:w-[30%] rounded-3xl border-4">
          <Header tasks={tasks} />
           <Input tasks={tasks} settasks={settasks} />
           <Show tasks={tasks} settasks={settasks} />
          </div>
        </div>
    );
};

export default App;