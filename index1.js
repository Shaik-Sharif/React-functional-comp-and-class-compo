// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import React from 'react'
import ReactDom from 'react-dom/client'

const root = ReactDom.createRoot(document.getElementById('root'))

// function Header(){
//   let menu1 = [
//     'Home','About us ','Contact us '
//   ]
//   return (

//     <header>
//       <ul>
//         <li>{menu1[0]}</li>
//         <li>{menu1[1]}</li>
//         <li>{menu1[2]}</li>
//         <li>Shark </li>
//         <li>Tank</li>
//       </ul>
//     </header>
// )
// }

class Menu extends React.Component{
  // render is present in the react package. render is a method that must have return type
  render(){
    let menu1 = [
    'Home','About us','Contact us '
  ]
    return (
      <header>
      <ul>
        <li>{menu1[0]}</li>
        <li>{menu1[1]}</li>
        <li>{menu1[2]}</li>
        <li>Shark </li>
        <li>Tank</li>
      </ul>
    </header>
    )
  }
}

root.render(<Menu/>)
// export default Header
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
