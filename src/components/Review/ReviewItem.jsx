import React from 'react';
export default function ReviewItem({ key, author, content }) {
  return (
    <li key={key}>
      <h3>{author}</h3>
      <p>{content}</p>
    </li>
  );
}
