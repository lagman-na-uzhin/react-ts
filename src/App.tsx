import {Popup} from "./components/Popup/Popup";
import {useState} from "react";


function App() {
    const [open, setOpen] = useState<boolean>(false)

  return (
    <>
        <button onClick={()=>setOpen(true)}>Creacte task</button>
      <Popup title="Create Task" setOpen={setOpen} open={open}><button>Create</button></Popup>
    </>
  )
}

export default App
