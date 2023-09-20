import React from 'react'
import './NotFound.css'
const NotFound = () => {
  return (
    <div id='oopss'>
    <div id='error-text'>
        <img src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg" alt="404"/>
        <span>404 PAGE</span>
        <p class="p-a">
           . The page you were looking for could not be found</p>

        <a href='/home' class="back"><i className="fa-solid fa-house" style={{color: '#071f59'}}></i></a>
    </div>
    </div>
  
  )
}

export default NotFound
