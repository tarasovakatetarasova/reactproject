// ИМПОРТ ФАЙЛОВ
import {Routes,Route, Navigate} from "react-router-dom";
import Navigation from "./components/navigation/navigation";
import main from "./components/pages/main";
import Shop from "./components/pages/shop";
import Main from "./components/pages/main";
import Private from "./components/pages/private";
import Contacts from "./components/pages/contacts";
import Login from "./components/pages/login";

// ПРИЛОЖЕНИЕ
function App() {

  return (
      <>
        <Navigation />

    <main>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/private" element={<Private />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to='/' />} />
      </Routes>
    </main>

      </>
      );
}

export default App;
