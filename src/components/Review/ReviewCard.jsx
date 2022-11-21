import React from 'react';
import PropTypes from 'prop-types';
import ReviewItem from './ReviewItem.jsx';

import { ReviewContainer, ReviewList } from './ReviewCard.styled.js';

export default function ReviewCard({ reviews }) {
  return (
    <ReviewContainer>
      <ReviewList>
        {reviews.map(({ author, content }) => (
          <ReviewItem key={author} author={author} content={content} />
        ))}
      </ReviewList>
    </ReviewContainer>
  );
}

ReviewCard.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
};
