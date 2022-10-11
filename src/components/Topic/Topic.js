import { FaChevronRight } from 'react-icons/fa';

import { Link } from 'react-router-dom';

const Topic = ({ topic }) => {
  const { id, name, logo } = topic;
  return (
    <Link to={`/quiz/${id}`}>
      <div className='bg-teal-500 flex items-center p-4 rounded-lg'>
        <img className='h-20 mr-4' src={logo} alt={name} />
        <h2 className='mr-auto font-semibold text-white'>{name}</h2>
        <button className='bg-white text-teal-500 text-xl p-4 rounded-full'>
          <FaChevronRight></FaChevronRight>
        </button>
      </div>
    </Link>
  );
};
export default Topic;
