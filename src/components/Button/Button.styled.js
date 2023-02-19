import styled from 'styled-components';
export const LoadBtn = styled.button`
  width: 180px;
  padding: 8px 10px;
  text-align: center;
  display: inline-block;
  color: #ffffff;
  background-color: #3f51b5;
  transition: background-color linear 150ms;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2);

  &:hover,
  &:focus {
    background-color: #2c2b88;
  }
`;
