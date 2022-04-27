import React, { FC, useState } from 'react';
import ItemStyles from './FavouriteButton.module.css';

const FavouriteButton: FC = () => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <button
      className={ItemStyles.fvrBtn}
      style={{ backgroundColor: isLiked ? 'red' : 'rgba(0,0,0,0.1)' }}
      onClick={() => setIsLiked(!isLiked)}
    />
  );
};

export default FavouriteButton;
