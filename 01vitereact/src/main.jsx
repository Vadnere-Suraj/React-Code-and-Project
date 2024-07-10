import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// function  element() {
//   return (
//     <h1>
//       Hello Lets do Something 
//     </h1>
//   )
// }

// const anotherelement = (
//   <a href='https://google.com' target='_blank'> lets go To google</a>
// )

const reactElement = React.createElement('a',{
  href: 'https://google.com',
  target: '_blank'
},'Click to go to Google'    )


ReactDOM.createRoot(document.getElementById('root')).render(
  reactElement
)
