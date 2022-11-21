import styled from 'styled-components';

export const CastContainer = styled.div`
  padding: 40px 0;
`;

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const CastItem = styled.li`
  font-size: 16px;
  color: #ffffffbd;
  margin-right: 20px;
  margin-bottom: 20px;
  width: 200px;
  transition: transform 150ms linear;

  &:hover {
    transform: scale(1.03);
  }

  &:nth-child(5n) {
    margin-right: 0;
  }
`;

export const CastImg = styled.img`
  border: 0.5px solid #ffffff2b;
  object-fit: cover;
`;
export const CastTextName = styled.p`
  margin-bottom: 5px;
  font-weight: 700;
`;

export const CastTextCharacter = styled.p`
  font-size: 13px;
`;
