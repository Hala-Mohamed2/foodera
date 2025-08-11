import { ImTree } from 'react-icons/im';
import './Explore.css';


const items = [
  {
    img: './images/01.jpg',
    title: 'Rainbow Vegetable Sandwich',
    spm: 'Time: 15 - 20 Minutes | Serves: 1',
    num: '$10.50',
    numy: '$11.70',
  },
  {
    img: './images/02.jpg',
    title: 'Vegetarian Burger',
    spm: 'Time: 30 - 45 Minutes | Serves: 1',
    num: '$9.20',
    numy: '$10.50',
  },
  {
    img: './images/03.jpg',
    title: 'Raspberry Stuffed French Toast',
    spm: 'Time: 10 - 15 Minutes | Serves: 1',
    num: '$12.50',
    numy: '$13.20',
  },
]


const Explore = () => {
  return(
    <section className='container explore' id='explore'>
      <div className="tit">
        <h1>Explore Our Foods</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum
        in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains,
        far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
      </div>
      <div className="explore-row">
        {items.map((item , index) => (
          <div className="col">
            <img src={item.img} />
            <h3>{item.title}</h3>
            <span>{item.spm}</span>
            <h4>{item.num}<span>{item.numy}</span></h4>
            <hr />
            <button>Order Now</button>
          </div>
        ))}
      </div>
    </section>
  )
}



export default Explore;