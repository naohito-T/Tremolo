import { NextComponentType, NextPageContext } from 'next';
import React from 'react';
import styled from 'styled-components';

// FIXME storybook確認のため仮で作成
type Props = {
  className?: string;
  disabled?: boolean;
  value?: number;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children?: React.ReactNode;
};

const StyledButton = styled.button`
  width: 100%;
  height: auto;
  font-size: 14px;
  color: ${(props): string => props.theme.white};
  text-align: center;
  &:disabled {
    background: ${(props): string => props.theme.black};
  }
`;

export const Button: NextComponentType<NextPageContext, null, Props> = ({
  className = '',
  disabled,
  value,
  children,
  onClick,
}) => {
  return (
    <StyledButton disabled={disabled} value={value} onClick={onClick} className={className}>
      {children}
    </StyledButton>
  );
};
