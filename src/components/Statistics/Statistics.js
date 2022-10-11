import { useLoaderData } from 'react-router-dom';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Statistics = () => {
  const { data } = useLoaderData();
  console.log(data);

  return (
    <ResponsiveContainer className='my-16 mx-auto' width='90%' height={400}>
      <LineChart data={data}>
        <Line type='monotone' dataKey='total' stroke='#32B8A6' />
        <CartesianGrid stroke='#ccc' strokeDasharray='10 10' />
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip className='bottom-0' />
      </LineChart>
    </ResponsiveContainer>
  );
};
export default Statistics;
