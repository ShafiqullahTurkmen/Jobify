import logo from '../assets/images/logo.svg'
import main from '../assets/images/main.svg'

export default function Landing() {
  return (
    <main>
      <nav>
        <img src={logo} alt="jobify" className='logo' />
      </nav>

      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>job <span>tracking</span> app</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, sed corporis. Expedita odit assumenda molestiae laboriosam amet voluptatum porro, vitae optio exercitationem dolorem, officiis illo, sapiente perferendis. Autem maxime deserunt architecto assumenda ullam, odio dolores?</p>
          <button className="btn btn-hero">
            Login/Register
          </button>
        </div>
        <img src={main} alt="job hunt" className='img main-img' />
      </div>
    </main>
  )
}
