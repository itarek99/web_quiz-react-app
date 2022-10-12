import { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Question = ({ item }) => {
  const successToast = (message) => toast.success(message, { theme: 'dark', autoClose: 1000 });
  const errorToast = (message) => toast.error(message, { theme: 'dark', autoClose: 1000 });
  const infoToast = (message) => toast.info(message, { theme: 'dark', autoClose: 2000 });

  const { question, options, id, correctAnswer } = item;

  const [correctAns, setCorrectAns] = useState(false);

  const handleChange = (option) => {
    if (option === correctAnswer) {
      successToast('Correct Answer');
    } else {
      errorToast('Wrong Answer');
    }
  };

  const handleShowCorrectAns = () => {
    infoToast(`Correct Ans is: ${correctAnswer}`);
    setCorrectAns(true);
  };

  return (
    <div className='border border-teal-500 mb-8 p-8'>
      <div className='flex justify-between items-center gap-4 mb-4'>
        <div className='text-xl font-medium' dangerouslySetInnerHTML={{ __html: question }}></div>
        <button className='p-1' onClick={handleShowCorrectAns}>
          <FaEye className='text-teal-500'></FaEye>
        </button>
      </div>
      <div className='px-2'>
        {options.map((option, index) => (
          <div key={index} className={`mb-3 flex items-center `}>
            <input
              onChange={() => handleChange(option)}
              className={`mr-2 cursor-pointer`}
              id={option}
              key={index}
              type='radio'
              value={option}
              name={id}
            />
            <label
              className={`cursor-pointer ${option === correctAnswer && correctAns ? 'text-teal-500' : ''}`}
              htmlFor={option}
            >
              {option}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Question;
