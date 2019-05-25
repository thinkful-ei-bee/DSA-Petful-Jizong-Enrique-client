import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import './header.css'

class Header extends Component{
  render(){
    return(
      <header className='header'>
        <div className='header_logo'>
           Welcome to PetFul
        </div>
        <Link 
          to='/'>
          Home
          </Link>
      </header>
    )
  }
}
export default Header