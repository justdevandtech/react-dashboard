import './sidebarStyles.css'

export const SidebarMenu = () => {
  return (
    <section className="menu">
      <div className='logo'>FinTech App</div>
      <hr className="p-0 m-0" />
      <div className='menu-items'>
        <ul>
          <li>
            <a href='#'>
              <i className='fas fa-home'></i>
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href='#'>
              <i className='fas fa-user'></i>
              <span>Profile</span>
            </a>
          </li>
          <li>
            <a href='#'>
              <i className="fas fa-money-bill"></i>
              <span>Transactions</span>
            </a>
          </li>
          <li>
            <a href='#'>
              <i className="fas fa-chart-line"></i>
              <span>Analytics</span>
            </a>
          </li>
          <li>
            <a href='#'>
              <i className='fas fa-cog'></i>
              <span>Settings</span>
            </a>
          </li>
          <li>
            <a href='#'>
              <i className='fas fa-sign-out-alt'></i>
              <span>Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
