import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  let activeClassName = 'text-teal-900';

  return (
    <nav className='bg-teal-500 z-30'>
      <div className='container mx-auto px-2 sm:px-0 py-4 '>
        <div className='flex flex-col sm:flex-row justify-between items-center h-full'>
          <div className='text-2xl font-bold text-white mb-1 sm:mb-0'>
            <Link to='/'>Web Quiz</Link>
          </div>
          <ul className='flex gap-6 text-white font-medium'>
            <li>
              <NavLink className={({ isActive }) => (isActive ? activeClassName : undefined)} to='/' end>
                Topics
              </NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => (isActive ? activeClassName : undefined)} to='/statistics'>
                Statistics
              </NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => (isActive ? activeClassName : undefined)} to='/blog'>
                Blog
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
