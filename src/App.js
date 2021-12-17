// ИМПОРТ ФАЙЛОВ
import {Navigate, Route, Routes} from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import main from "./pages/Main";
import Main from "./pages/Main";
import Shop from "./pages/Shop";
import './App.css'
import Product from "./components/Product/Product";
import {createContext, useEffect, useState} from "react";
import {cards} from "./database/cards";
import Order from "./components/Order/Order";
import Login from "./pages/Login";

export const AppContext = createContext(null)

// ПРИЛОЖЕНИЕ
function App() {
    const [products, setProducts] = useState([])
    const [isAuth, setIsAuth] = useState(false)

    useEffect(() => {
        const response = cards
        setProducts(response)
    }, [])

    if (products.length === 0) {
        return (
            <div>
                Loading...
            </div>
        )
    }


    return (
        <AppContext.Provider value={{products, setProducts, isAuth, setIsAuth}}>
            <div className="App">
                <Navigation/>
                <main>
                    <Routes>
                        <Route path="/" element={<Main/>}/>
                        <Route path="/product/:id" element={<Product/>}/>
                        <Route path="/order/:productId" element={<Order/>}/>
                        <Route path="/shop" element={<Shop/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/create" element={<Login/>}/>
                        <Route path="*" element={<Navigate to='/'/>}/>
                    </Routes>
                </main>
            </div>
        </AppContext.Provider>
    );
}

export default App;
