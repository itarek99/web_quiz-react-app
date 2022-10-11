import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='bg-teal-500 z-30'>
      <div className='container mx-auto px-2 sm:px-0 py-4'>
        <div className='flex flex-col sm:flex-row justify-between items-center'>
          <div className='text-2xl font-bold text-white mb-1 sm:mb-0'>
            <Link to='/'>Web Quiz</Link>
          </div>
          <ul className='flex gap-6 text-white font-medium'>
            <li>
              <NavLink to='/'>Topics</NavLink>
            </li>
            <li>
              <NavLink to='/statistics'>Statistics</NavLink>
            </li>
            <li>
              <NavLink to='/blog'>Blog</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
