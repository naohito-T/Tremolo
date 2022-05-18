// import React from "react"; いらなくなったかも
import styled from 'styled-components';

// interface Props {
//   children: string;
// }

/** ここ直せ */
const Title: React.FC<any> = styled.h1`
  color: red;
  font-size: 50px;
`;

const AppTitle: React.FC = () => {
  return <Title>message</Title>;
};

export default AppTitle;
