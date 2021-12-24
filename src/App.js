import {Navigate, Route, Routes} from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Shop from "./pages/Shop";
import './App.css'
import Product from "./pages/Product";
import {createContext, useEffect, useState} from "react";
import Order from "./pages/Order";
import Login from "./pages/Login";
import Create from "./pages/Create";
import Private from "./pages/Private";
import Contacts from "./pages/Contacts";
import {cards} from "./data/cards";
import Footer from "./components/Footer/Footer";

export const AppContext = createContext(null)

function App() {
    const [products, setProducts] = useState([])
    const [isAuth, setIsAuth] = useState(false)


    useEffect(() => {
        if (localStorage.getItem('isAuth')) {
            setIsAuth(true)
        }
        const response = cards
        setProducts(response)
    }, [])


    if (products.length === 0) {
        return (
            <div className="loading">
                Загрузка...
            </div>)
    }

    return (<AppContext.Provider value={{products, setProducts, isAuth, setIsAuth}}>
        <div className="App">
            <Navigation/>
            <main>
                <Routes>
                    <Route path="/" element={<Shop/>}/>
                    <Route path="/product/:id" element={<Product/>}/>
                    <Route path="/order/:productId" element={<Order/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/contacts" element={<Contacts/>}/>
                    <Route path="/create" element={<Create/>}/>
                    <Route path="/private" element={<Private/>}/>
                    <Route path="*" element={<Navigate to='/'/>}/>
                </Routes>
            </main>
            <Footer/>
        </div>
    </AppContext.Provider>);
}

export default App;
