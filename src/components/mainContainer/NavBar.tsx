import { Button } from 'react-bootstrap';
import './navBar.css';
import { useState } from 'react';

export const NavBar = () => {
  const [show, setShow] = useState(false);
  const menuBtn = document.querySelector('toggleMenuBTN');
  menuBtn?.addEventListener('click', () => setShow(!show));
  return (
    <div className="navigation">
      <Button className='mr-4 toggleMenuBTN' variant=''><i className="fas fa-bars"></i></Button>
        <div className="search">
            <input type="text" placeholder="Search..."/>
            <i className="fas fa-search"></i>
        </div>
        <div className="profile-info">
        <span>
          <i className="fas fa-comment"></i>
        </span>
              <span>
          <i className="fas fa-bell"></i>
              </span>
            <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" alt=""/>
            </div>
    </div>
  )
}
