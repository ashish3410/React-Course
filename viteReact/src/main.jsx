import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return <h1>Hello React !</h1>
}


// react Accepts the Element in this form
const Element=React.createElement(
    "a",
    {href:"https://google.com",target:"_blank"},
    "Click to visit google"
)
createRoot(document.getElementById('root')).render(
    Element
)
 