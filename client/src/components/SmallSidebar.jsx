import Wrapper from '../assets/wrappers/SmallSidebar';
import { FaTimes } from 'react-icons/fa';
import { useAppContext } from '../context/appContext';
import links from '../utils/links';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';

export default function SmallSidebar() {
  const { showSidebar, toggleSidebar } = useAppContext();
  return (
    <Wrapper>
      <div className={showSidebar ? "sidebar-container show-sidebar" : "sidebar-container"}>
        <div className="content">
          <button type='button' className="close-btn" onClick={toggleSidebar}>
            <FaTimes />
          </button>
          <header><Logo /></header>
          <div className="nav-links">
            {
              links.map((link) => {
                const { text, path, id, icon } = link;
                return (
                  <NavLink
                    to={path}
                    key={id}
                    onClick={toggleSidebar}
                    className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} >
                    <span className="icon">{icon}</span>
                    {text}
                  </NavLink>
                )
              })
            }
          </div>
        </div>
      </div>

    </Wrapper >
  )
}
