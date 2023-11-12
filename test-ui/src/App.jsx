import './App.css'
import ListeOfProperty from "./components/ListeOfProperty.jsx";
import HeaderComponent from "./components/HeaderComponent.jsx";
import FooterComponent from "./components/FooterComponent.jsx";

import {BrowserRouter, Routes, Route} from "react-router-dom";
import PropertyComponent from "./components/PropertyComponent.jsx";

function App() {

    return (

        <>
            <BrowserRouter>
                <HeaderComponent/>
                <Routes>
                    //http://locahost:8080
                    <Route path='/' element={<ListeOfProperty/>}></Route>
                    //http://locahost:8080/property
                    <Route path='/properties' element={<ListeOfProperty/>}></Route>
                    //http://locahost:8080/add-property
                    <Route path='/add-property' element={<PropertyComponent/>}></Route>
                </Routes>
                <FooterComponent/>
            </BrowserRouter>
        </>
    )
}

export default App
