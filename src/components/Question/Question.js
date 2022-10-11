import { useState } from 'react';
import { FaEye } from 'react-icons/fa';

const Question = ({ item, toastMessage }) => {
  const { question, options, id, correctAnswer } = item;
  const { successToast, errorToast } = toastMessage;

  const [correctAns, setCorrectAns] = useState(false);

  const handleChange = (option) => {
    if (option === correctAnswer) {
      successToast('Correct Answer');
    } else {
      errorToast();
    }
  };

  const handleShowCorrectAns = () => {
    successToast(`Correct Ans: ${correctAnswer}`);
    setCorrectAns(true);
  };

  return (
    <div className='border border-teal-500 mb-8 p-8'>
      <div className='flex justify-between items-center gap-4 mb-4'>
        <div className='text-xl font-medium' dangerouslySetInnerHTML={{ __html: question }}></div>
        <button className='' onClick={handleShowCorrectAns}>
          <FaEye></FaEye>
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
