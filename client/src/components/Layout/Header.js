import React from 'react'
import { useState,useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const Header = () => {
  const [loginUser,setLoginUser] = useState('')
  const navigate=useNavigate()
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    if(user){
      setLoginUser(user)
    }
  },[])
  const logoutHandle= ()=>{
    localStorage.removeItem('user')
    navigate('/login')
  }
  return (
    <>
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
      </button>
     <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <Link className="navbar-brand" to="/">Expenses Dashboard</Link>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to="/user">{loginUser && loginUser.name}</Link>
        </li>
        <li className="nav-item">
          <button className='btn btn-primary' onClick={logoutHandle}>
            Logout
          </button>
        </li>
      </ul>
     </div>
    </div>
  </nav>

    </>
  )
}
