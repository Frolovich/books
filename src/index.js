import React from 'react'; //Импортирует библиотеку React, необходимую для создания компонентов.
import ReactDOM from 'react-dom/client'; //  ReactDOM используется для рендеринга React-компонентов в браузере. Мы используем react-dom/client, так как это подход, который поддерживает новые функции React.
import './index.css'; //  Импортирует файл стилей CSS, который будет применяться ко всему приложению.
import 'bootstrap/dist/css/bootstrap.min.css'; //Импортирует стили Bootstrap, чтобы использовать их для оформления компонентов в приложении.
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import App from './App'; //Импортирует основной компонент приложения App, который будет рендериться на странице.
import reportWebVitals from './reportWebVitals'; //Импортирует функцию для измерения производительности приложения.
import { Provider } from 'react-redux'; //Импортирует компонент Provider из библиотеки react-redux, который предоставляет доступ к Redux-хранилищу всем компонентам приложения.
import store from './redux/reducers/store'; //Импортирует хранилище Redux, созданное в файле store.js.


const root = ReactDOM.createRoot(document.getElementById('root')); //Создает корневой элемент для рендеринга React-приложения. Он находит элемент в HTML с id="root" (обычно этот элемент существует в index.html).
root.render( // начинаем рендеринг нашего приложения.
   <Provider store={store}> {/*Оборачивает приложение в Provider, чтобы предоставить доступ к Redux-хранилищу  (store) всем дочерним компонентам. Это позволяет использовать состояние Redux и отправлять действия в любом компоненте внутри App*/}
    <App />  {/* Рендерит основной компонент приложения. Все дочерние компоненты App также получат доступ к Redux-хранилищу*/}
    </Provider>
   
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
  //Эта строка запускает функцию reportWebVitals, которая может быть использована для измерения производительности приложения. Вы можете передать ей функцию для обработки результатов (например, логирование в консоль) или отправить данные в аналитические системы.
