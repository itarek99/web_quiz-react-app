import BlogCard from '../BlogCard/BlogCard';

const blogQuestions = [
  {
    question: `What is the purpose of react router?`,
    ans: `React Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.`,
  },
  {
    question: `How does context api works?`,
    ans: `The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.`,
  },
  {
    question: `What is useRef in react?`,
    ans: `The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.`,
  },
];

const Blog = () => {
  return (
    <section className='container mx-auto px-4 md:px-0'>
      <div className='mb-24 mt-14'>
        {blogQuestions.map((blogQuestion) => (
          <BlogCard blogQuestion={blogQuestion}></BlogCard>
        ))}
      </div>
    </section>
  );
};
export default Blog;
