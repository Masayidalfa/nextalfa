'use client';

import React, { useEffect, useState } from 'react';

export interface TextShuffleProps {
  /** Daftar kata/kalimat yang akan ditampilkan bergantian */
  texts: string[];
  /** Jeda (ms) sebelum berganti ke teks berikutnya */
  interval?: number;
  /** Class Tailwind untuk styling teks */
  className?: string;
}

export default function TextShuffle({ texts, interval = 2000, className }: TextShuffleProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (texts.length <= 1) return;

    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, interval);

    return () => clearInterval(id);
  }, [texts, interval]);

  return <span className={className}>{texts[index]}</span>;
}