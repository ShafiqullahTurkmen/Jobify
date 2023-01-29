import Wrapper from '../assets/wrappers/SmallSidebar';
import { FaTimes } from 'react-icons/fa';
import { useAppContext } from '../context/appContext';
import liks from '../utils/links';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';

export default function SmallSidebar() {
  return (
    <Wrapper>
      <div className="sidebar-container show-sidebar">
        <div className="content">
          <button type='button' className="close-btn" onClick={() => console.log("toggle side bar")}>
            <FaTimes/>
          </button>
          <header><Logo/></header>
          <div className="nav-links">nav links</div>
        </div>
      </div>

    </Wrapper>
  )
}
