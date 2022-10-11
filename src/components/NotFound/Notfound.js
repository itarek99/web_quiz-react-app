import notFoundImage from '../../images/not-found.png';

const Notfound = () => {
  return (
    <div className='max-w-2xl text-center mx-auto h-[60vh] flex flex-col items-center justify-center mt-4  md:mt-14'>
      <img className='w-full' src={notFoundImage} alt='404' />
      <h4 className='font-bold text-3xl'>Page Not Found</h4>
    </div>
  );
};
export default Notfound;
