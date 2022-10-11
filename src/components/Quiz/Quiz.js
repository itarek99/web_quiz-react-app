import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Notfound from '../NotFound/Notfound';

const Quiz = () => {
  const { data } = useLoaderData();
  const { total, name, questions } = data;

  console.log(data);

  const successToast = () => toast.success('Correct Answer');
  const errorToast = () => toast.error('Wrong Answer');

  return !questions ? (
    <Notfound></Notfound>
  ) : (
    <div className='container mx-auto px-4 md:px-0 mt-8 mb-20'>
      <div className='text-center'>
        <h1 className='text-2xl font-semibold'>
          Total {total} Quizzes of {name} Topic
        </h1>
      </div>
      <div className='max-w-3xl mx-auto mt-6'>
        {questions?.map((question) => (
          <Question toastMessage={{ successToast, errorToast }} key={question.id} item={question}></Question>
        ))}
      </div>
      <ToastContainer autoClose={2000} position='top-center' />
    </div>
  );
};
export default Quiz;
