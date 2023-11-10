import {useState} from 'react'
import './App.css'
import ListeOfProperty from "./components/ListeOfProperty.jsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <ListeOfProperty/>
        </>
    )
}

export default App
