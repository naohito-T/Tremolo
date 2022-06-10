import DefaultErrorPage from 'next/error';

const Error = () => {
  return <DefaultErrorPage statusCode={404} />;
};

export default Error;
