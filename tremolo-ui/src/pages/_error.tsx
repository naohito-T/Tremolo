import { NextPage, NextPageContext } from 'next';
import DefaultErrorPage from 'next/error';
interface Props {
  statusCode: number;
}

const Error: NextPage<Props> = ({ statusCode }) => {
  console.log('_error.tsx');
  return <DefaultErrorPage statusCode={statusCode} title='エラーが発生しました' />;
  // return <div>{statusCode}</div>;
};

Error.getInitialProps = async ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode ?? 500 : 404;
  return { statusCode };
};

export default Error;
