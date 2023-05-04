import styled from 'styled-components';

export const Li = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  gap: 8px;
`;

export const Span = styled.span`
  font-weight: 500;
  font-size: 16px;
`;

export const Button = styled.button`
  font-size: 14px;
  font-weight: 500;
  padding-top: 4px;
  padding-bottom: 4px;
  border-radius: 4px;
  margin-left: 24px;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px,
    rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;
  cursor: pointer;
  :hover {
    background-color: lightpink;
  }
`;
