const BlogCard = ({ blogQuestion }) => {
  const { question, ans } = blogQuestion;
  return (
    <div className='mt-8 border border-teal-500 py-8 px-6'>
      <h4 className='text-2xl font-bold mb-2'>{question}</h4>
      <p className='text-teal-800'>{ans}</p>
    </div>
  );
};
export default BlogCard;
