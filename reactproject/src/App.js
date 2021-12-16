// ИМПОРТ ФАЙЛОВ
import "./components/MyComponent/MyComponent.css"
import "./components/MyComponent/MyComponent.js"
import Logo from "./components/images/looRock.ico"

// ФУНКЦИИ ДЕЙСТВИЙ
function auth() {
  alert('Auth')
}


// ПРИЛОЖЕНИЕ
function App() {

  return (
      <div className="Body">
        <header className="Header">
          <img className="logo" src={Logo}/>
          <table>
            <td>
              <th>Главная</th>
              <th>Магазин</th>
              <th>О нас</th>
            </td>
            <td><button onClick={auth}>Войти</button></td>
          </table>
        </header>
        <main>
          <h1>MUZICALITY - МАГАЗИН ПРО МУЗЫКУ</h1>
          <h2>Почитать:</h2>
          <div className="topic">
            <div>
              <h3>Звуки, питающие мозг энергией</h3>
              <p>«Некоторые звуки действуют ничуть не хуже, чем пара чашек кофе», — говорит выдающийся французский специалист в области изучения слуха Альфред Томатис.
                Это означает, что мы можем использовать музыку в качестве тонизирующего средства.
                Еще со времен, когда человечество впервые создало музыку, она служила его повседневным целям. Колыбельные, военные, морские песни — список настолько же длинен, как и история и культура...
              </p>
              <a href="FirstArticle.html" target="_blank" rel="nofollow noopener noreferrer"></a>
            </div>
            <div>
              <h3>Эффект Моцарта</h3>
              <p>Слушание музыки Моцарта усиливает нашу мозговую активность. Послушав Моцарта, люди, отвечающие на стандартный IQ-тест, демонстрируют повышение интеллекта
                Это обнаруженное некоторыми учёными явление получило название "Эффект Моцарта“.
                Из него были тотчас сделаны далеко идущие выводы, особенно в отношении воспитания детей, первые три года жизни которых были провозглашены определяющими для их будущего интеллекта.
              </p>
              <a href="SecondArtile.html" target="_blank" rel="nofollow noopener noreferrer">Читать далее...</a>
            </div>
          </div>
          <button>К ПОКУПКАМ</button>
        </main>
      </div>
  );
}

export default App;
