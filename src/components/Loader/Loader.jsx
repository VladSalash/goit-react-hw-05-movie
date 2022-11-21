import React from 'react';
import { BallTriangle } from 'react-loader-spinner';
import { Spinner } from './Loader.styled';

export default function Loader() {
  return (
    <Spinner>
      <BallTriangle
        heigth="100"
        width="100"
        color="red"
        ariaLabel="loading-indicator"
      />
    </Spinner>
  );
}
