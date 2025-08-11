import './About.css';


const About = () => {
  return(
    <section className='container about' id='about'>
      <div className="about-us">
        <img src="./images/01.jpg" alt="" />
        <div className="about-tit">
          <h1>We pride ourselves on making real food from the best ingredients.</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus</p>
          <button>Learn more</button>
        </div>
      </div>
    </section>
  )
}



export default About;