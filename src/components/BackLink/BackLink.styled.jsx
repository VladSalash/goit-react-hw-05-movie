import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Back = styled(Link)`
  display: inline-flex;
  align-items: center;
  padding-left: 40px;
  gap: 4px;
  color: black;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;

  :hover {
    color: orangered;
    transform: scale(1.15);
  }
`;
