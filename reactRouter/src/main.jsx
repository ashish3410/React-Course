import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import './index.css'
import Layout from './Layout/Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Github,{ useGithubInfo } from './Components/Github/Github.jsx'
import User from './Components/User/User.jsx'
const router=createBrowserRouter(
// [
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home />
//       },
//       {
//         path:'about',
//         element:<About />
//       },
//       {
//         path:'contact',
//         element:<Contact />
//       },
//       {
//         loader:{useGithubInfo},
//         path:'github',
//         element:<Github />
//       }
//     ]
//   }
// ])
createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
    <Route path='' element={<Home/>} />
    <Route path='about' element={<About/>}/>
    <Route path='contact' element={<Contact/>}/>
    <Route path='user/:userid' element={<User />}/>
    <Route
    loader={useGithubInfo}
    path='github'
    element={<Github/>}/>
  </Route>
)
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
