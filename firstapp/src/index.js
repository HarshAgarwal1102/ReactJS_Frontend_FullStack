// Bridge file connect App.js(root component) to index.html
// VDOM (component) map to DOM


import ReactDOM from 'react-dom/client'
import App from './App';
const div = document.querySelector('#root');   // DOM
const root = ReactDOM.createRoot(div);
root.render(<App/>);   // VDOM map DOM