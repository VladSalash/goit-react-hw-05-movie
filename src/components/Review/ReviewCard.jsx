import React from 'react';
import PropTypes from 'prop-types';

import { Text } from './ReviewCard.styled.js';
import ReviewItem from './ReviewItem.jsx';

export default function ReviewCard({ reviews }) {
  return reviews.length > 0 ? (
    <>
      <ul>
        {reviews.map(review => (
          <ReviewItem
            key={review.id}
            author={review.author}
            content={review.content}
          />
        ))}
      </ul>
    </>
  ) : (
    <Text>We don't have any review for this movie</Text>
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
