"use client";

import { useEffect, useState } from "react";
import styles from "./LoadingScreen.module.css";

interface LoadingScreenProps {
  onFinish: () => void;
}

export default function LoadingScreen({ onFinish }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 25);

    return () => clearInterval(interval);
  }, []); // array kosong — interval cuma dibuat sekali saat mount

  // Kunci scroll body selama loading screen ditampilkan
  useEffect(() => {
    const scrollY = window.scrollY;
    const originalStyle = {
      overflow: document.body.style.overflow,
      position: document.body.style.position,
      top: document.body.style.top,
      width: document.body.style.width,
    };

    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";

    return () => {
      document.body.style.overflow = originalStyle.overflow;
      document.body.style.position = originalStyle.position;
      document.body.style.top = originalStyle.top;
      document.body.style.width = originalStyle.width;
      window.scrollTo(0, scrollY);
    };
  }, []);

  const isDone = progress >= 100;

  const statusText = isDone
    ? "READY"
    : progress > 0
    ? "NOW LOADING"
    : "INITIALIZATION";

  return (
    <div className="fixed inset-0 z-[99] flex flex-col items-center justify-center bg-[#071013]">
      <div className={styles.loadingWindow}>

        {/* 1. Teks Status */}
        <div className="absolute left-1/2 top-[10%] -translate-x-1/2 whitespace-nowrap text-xl md:text-4xl font-extrabold uppercase tracking-[0.3em] text-white">
          {statusText}
        </div>

        {/* 2. Mobil -> berubah jadi tombol Start saat selesai */}
        <div className={styles.car}>
          {/* Mobil */}
          <div
            className={`transition-opacity duration-300 ${
              isDone ? "pointer-events-none opacity-0" : "opacity-100"
            }`}
          >
            <div className={`${styles.strike} ${styles.strike2}`} />
            <div className={`${styles.strike} ${styles.strike3}`} />
            <div className={`${styles.strike} ${styles.strike4}`} />
            <div className={`${styles.strike} ${styles.strike5}`} />

            <div className={`${styles.carDetail} ${styles.spoiler}`} />
            <div className={`${styles.carDetail} ${styles.back}`} />
            <div className={`${styles.carDetail} ${styles.center}`} />
            <div className={`${styles.carDetail} ${styles.center1}`} />
            <div className={`${styles.carDetail} ${styles.front}`} />
            <div className={`${styles.carDetail} ${styles.wheel}`} />
            <div className={`${styles.carDetail} ${styles.wheel} ${styles.wheel2}`} />
          </div>

          {/* Tombol Start, muncul di posisi yang sama */}
          <button
            onClick={onFinish}
            disabled={!isDone}
            className={`absolute uppercase left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap border-2 border-white px-8 py-2 text-sm font-medium tracking-wide text-white hover:text-[#071013]
              transition-all duration-300 ease-in-out
              ${
                isDone
                  ? "opacity-100 hover:bg-white"
                  : "pointer-events-none opacity-0"
              }`}
          >
            Start
          </button>
        </div>

      </div>

      {/* 3. Persentase — fade out perlahan saat sudah 100% / tombol Start muncul */}
      <p
        className={`absolute left-1/2 top-[75%] -translate-x-1/2 -translate-y-1/2 text-2xl font-semibold tracking-widest text-white
          transition-opacity duration-700 ease-in-out
          ${isDone ? "opacity-0" : "opacity-100"}`}
      >
        {progress}%
      </p>
    </div>
  );
}