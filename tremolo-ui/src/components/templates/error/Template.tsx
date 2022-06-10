import { NextPage } from 'next';
import DefaultErrorPage, { ErrorProps } from 'next/error';

export const ErrorTemplate: NextPage<ErrorProps> = ({ statusCode, title }) => {
  return <DefaultErrorPage statusCode={statusCode} title={title} />;
};
