import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

import 'react-toastify/dist/ReactToastify.css';
import Notfound from '../NotFound/Notfound';

const Quiz = () => {
  const { data } = useLoaderData();
  const { total, name, questions } = data;

  console.log(data);

  return !questions ? (
    <Notfound></Notfound>
  ) : (
    <div className='container mx-auto px-4 xl:px-0 mt-8 mb-20'>
      <div className='text-center'>
        <h1 className='text-2xl font-semibold'>
          Total {total} Quizzes of <span className='text-teal-500 font-bold'>{name}</span> Topic
        </h1>
      </div>
      <div className='max-w-4xl mx-auto mt-6'>
        {questions?.map((question) => (
          <Question key={question.id} item={question}></Question>
        ))}
      </div>
    </div>
  );
};
export default Quiz;
