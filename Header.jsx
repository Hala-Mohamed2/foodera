import './Header.css';
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { useState } from 'react';


const Header = () => {
  

  const [show, setShow] = useState(false)

  return(
    <header className='header'>
      <div className="humburger">
        <img className='logo' src="./images/logo (3).png" alt="" />
        <div className="icoo" onClick={() => setShow(!show)}>
          <HiMenu className={`humb ${show ? "active" : ""}`}/>
          <IoClose className={`close ${!show ? "active" : ""}`}/>
        </div>
      </div>
      <div className={`links ${!show ? "active" : ""}`}>
        <a href="#home">Home</a>
        <a href="#about">About Us</a>
        <a href="#explore">Explore Foods</a>
        <a href="#reviews">Reviews</a>
        <a href="#faq">FAQ</a>
        <button>01145269873</button>
      </div>
    </header>
  )
}



export default Header;