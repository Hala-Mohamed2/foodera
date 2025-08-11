import './Home.css';
import { GiMeal } from "react-icons/gi";
import { IoIosArrowForward } from "react-icons/io";


const Home = () => {
  return(
    <section className='container home' id='home'>
      <div className="home-app">
        <div className="home-one">
          <h1>Good food choices <br /> are good <br /> investments.</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo.</p>
          <div className="btns">
            <button className='order'>Order Now <GiMeal /></button>
            <button className='learn'>Learn More <IoIosArrowForward /></button>
          </div>
        </div>
        <div className="home-two">
          <img src="./images/1.png" alt="" />
        </div>
      </div>
    </section>
  )
}



export default Home;