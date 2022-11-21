import { RevItem, ReviewsTitle, ReviewsText } from './ReviewCard.styled.js';
export default function ReviewItem({ author, content }) {
  return (
    <RevItem key={author}>
      <ReviewsTitle>{author}</ReviewsTitle>
      <ReviewsText>{content}</ReviewsText>
    </RevItem>
  );
}
