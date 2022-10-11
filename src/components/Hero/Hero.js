import heroImg from '../../images/hero-bg.jpg';

const Hero = () => {
  return (
    <div style={{ backgroundImage: `url(${heroImg})` }} className='bg-no-repeat h-80 bg-cover bg-center'>
      <div className='backdrop-blur-sm bg-black/60 h-full w-full flex items-center p-6'>
        <h1 className='text-3xl md:text-4xl w-full md:w-3/4 xl:w-1/2 font-bold text-white text-center mx-auto leading-10'>
          You can test your Web Development skills with this Quizzes!
        </h1>
      </div>
    </div>
  );
};
export default Hero;
