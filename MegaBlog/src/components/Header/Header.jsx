import React from 'react'
import Container from '../container/Container'
import { useSelector } from 'react-redux'
import { useNavigate, Link, NavLink } from "react-router-dom"
import Logo from '../Logo'
import LogoutBtn from './LogoutBtn'

function Header() {
    const navigate = useNavigate()
    const authStatus = useSelector((state) => state.auth.status)

    const navItems = [
        {
            name: "Home",
            slug: '/',
            active: true

        },
        {
            name: "Login",
            slug: "/login",
            active: !authStatus,
        },
        {
            name: "Signup",
            slug: "/signup",
            active: !authStatus
        },
        {
            name: "All Posts",
            slug: "/all-posts",
            active: authStatus

        },
        {
            name: "Add Post",
            slug: "/add-post",
            active: authStatus
        },
    ]
    return (
        <header className='py-3 shadow bg-orange-500'>
          <Container>
            <nav className='flex'>
              <div className='mr-4'>
                <Link to='/'>
                  <Logo width='70px'   />
    
                  </Link>
              </div>
              <ul className='flex ml-auto'>
                {navItems.map((item) => 
                item.active ? (
                  <li key={item.name}>
                    <NavLink
                    to={item.slug}
                    onClick={() => navigate(item.slug)}
                    className={({isActive}) =>
                                        `${isActive?'text-orange-700':"text-black"} block pr-4 pl-3 border-b border-gray-100 lg:hover:bg-transparent/10 lg:border-0 hover:text-orange-700 lg:p-0 inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full`}
                    ><button className='flex px-4 py-2'>{item.name}</button></NavLink>
                  </li>
                ) : null
                )}
                {authStatus && (
                  <li>
                    <LogoutBtn />
                  </li>
                )}
              </ul>
            </nav>
            </Container>
        </header>
      )
    }
export default Header
