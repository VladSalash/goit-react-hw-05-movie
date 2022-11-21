import { useParams, useLocation } from 'react-router-dom';
import { useRef } from 'react';

import {
  Info,
  InfoTitle,
  InfoList,
  InfoItem,
  InfoLink,
} from './AdditionalInfo.styled';

const AdditionalInfo = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const refLocation = useRef(location?.state?.from ?? '/');

  return (
    <Info>
      <InfoTitle>Additional info</InfoTitle>
      <InfoList>
        <InfoItem>
          <InfoLink
            to={`/movies/${movieId}/cast`}
            state={{ from: refLocation }}
          >
            Cast
          </InfoLink>
        </InfoItem>
        <InfoItem>
          <InfoLink
            to={`/movies/${movieId}/reviews`}
            state={{ from: refLocation }}
          >
            Reviews
          </InfoLink>
        </InfoItem>
      </InfoList>
    </Info>
  );
};

export default AdditionalInfo;
