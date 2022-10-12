import { useLoaderData } from 'react-router-dom';
import Hero from '../Hero/Hero';
import Topic from '../Topic/Topic';

const Topics = () => {
  const { data } = useLoaderData();

  console.log(data);

  return (
    <main className='container mx-auto px-4 xl:px-0'>
      <Hero></Hero>
      <section className='mt-4 mb-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 sm:px-0 gap-4 md:gap-8'>
          {data.map((item) => (
            <Topic key={item.id} topic={item}></Topic>
          ))}
        </div>
      </section>
    </main>
  );
};
export default Topics;
