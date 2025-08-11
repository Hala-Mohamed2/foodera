import './Footer.css';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { FaDribbble } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Footer = () => {
  return(
    <section className='footer' id='footer'>
      <div className="navy">
        <a href="">Register</a>
        <a href="">Forum</a>
        <a href="">Affiliate</a>
        <a href="">FAQ</a>
      </div>
      <div className="icons">
        <FaFacebookF />
        <FaTwitter />
        <TfiYoutube />
        <FaDribbble />
        <FaLinkedinIn />
        <FaInstagram />
      </div>
      <p>© 2025. Foodera. AllRights Reserved Made by ||<strong> Hala Mohammed</strong></p>
    </section>
  )
}



export default Footer;