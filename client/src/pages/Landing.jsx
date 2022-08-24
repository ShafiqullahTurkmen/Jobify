import { Link } from 'react-router-dom';
import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';

export default function Landing() {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>

      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>job <span>tracking</span> app</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, sed corporis. Expedita odit assumenda molestiae laboriosam amet voluptatum porro, vitae optio exercitationem dolorem, officiis illo, sapiente perferendis. Autem maxime deserunt architecto assumenda ullam, odio dolores?</p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  )
}
