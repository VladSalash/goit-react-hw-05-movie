import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Info = styled.div`
  padding: 20px 40px;
  border-bottom: 1px solid #ffffff2b;
`;
export const InfoTitle = styled.h2`
  margin-bottom: 10px;
`;
export const InfoList = styled.ul`
  margin-left: 18px;
`;
export const InfoItem = styled.li`
  list-style-type: disc;
  margin-bottom: 10px;
`;
export const InfoLink = styled(NavLink)`
  color: #3d3d3d;
  text-decoration: none;
`;
