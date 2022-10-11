import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='bg-teal-500'>
      <div className='container mx-auto py-4'>
        <div className='flex justify-between items-center'>
          <div className='text-2xl font-bold text-white'>
            <Link to='/'>Web Quiz</Link>
          </div>
          <ul className='flex gap-8 text-white font-medium'>
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
