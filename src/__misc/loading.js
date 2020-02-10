import React from 'react';
import Loader from 'react-loader-spinner';

export const Loads = () => {
  return(
    <Loader
        type="Triangle"
        color="#02c902"
        height={100}
        width={100}
        timeout={3000}
    />
  );
}
