'use client';

import { useState } from 'react';
import { LikeButton } from './LikeButton';

export function CatLikeButton() {
  const [liked, setLiked] = useState(false);

  return <LikeButton liked={liked} onToggle={() => setLiked((prev) => !prev)} />;
}
