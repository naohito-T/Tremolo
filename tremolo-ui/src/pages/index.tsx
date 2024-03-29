import type { NextPage } from 'next';
import DefaultErrorPage from 'next/error';
import styled from 'styled-components';
import { Meta } from '@/components/common';
// import styles from '@/assets/styles/Home.module.scss';

const TestDiv = styled.div`
  width: 100px;
  height: 100px;
  color: ${(props): string => props.theme.white};
  background: ${(props): string => props.theme.black};
`;

const TopPage: NextPage = () => {
  return (
    <>
      <DefaultErrorPage statusCode={403} />
      {/* <Meta />
      <TestDiv>test</TestDiv> */}
    </>
  );
};

export default TopPage;
