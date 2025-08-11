import './Form.css';


const Form = () => {
  return(
    <div className="form">
      <h3>Hurry up! Subscribe our newsletter and get 25% Off</h3>
      <p>Limited time offer for this month. No credit card required.</p>
      <form>
        <input type="email" placeholder='Email Address Here'/>
        <button>Subscribe</button>
      </form>
    </div>
  )
}



export default Form;