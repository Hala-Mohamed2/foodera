import './Make.css';
import { FaCheck } from "react-icons/fa";


const Make = () => {
  return(
    <div className="container make">
      <div className="make-up">
        <h1>We make everything by hand with the best possible ingredients</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo.
        Mauris feugiat erat tellus.Far far away, behind the word mountains,
        far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        <div className="ppp">
          <span><FaCheck />Etiam sed dolor ac diam volutpat.</span>
          <span><FaCheck />Erat volutpat aliquet imperdiet.</span>
          <span><FaCheck /> purus a odio finibus bibendum.</span>
        </div>
        <button>Learn More</button>
      </div>
      <img src="./images/2.png" alt="" />
    </div>
  )
}



export default Make;