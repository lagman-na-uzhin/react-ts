import {Routes, Route} from 'react-router-dom'
import {AuthPage} from "./pages/Auth/AuthPage";
import HomePage from "./pages/Home/HomePage";


function App() {
  return (
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/auth" element={<AuthPage/>}/>
    </Routes>
  )
}
export default App
