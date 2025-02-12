import { useEffect, useState } from "react";
import { carruselImg } from "@/utils/carruselImg"

export default function useInterval() {
  const [count, setCount] = useState(0)
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  const startInterval = () => {
    const id = setInterval(() => {
      setCount((prevCount) => (prevCount === carruselImg.length - 1 ? 0 : prevCount + 1));
    }, 10000);
    setIntervalId(id);
  };

  const resetInterval = () => {
    if (intervalId) {
      clearInterval(intervalId);
    }
    startInterval();
  };

  const nextImage = () => {
    setCount((prevCount) => (prevCount === carruselImg.length - 1 ? 0 : prevCount + 1));
    resetInterval();
  }

  const prevImage = () => {
    setCount((prevCount) => (prevCount === 0 ? carruselImg.length - 1 : prevCount - 1));
    resetInterval()
  }

  useEffect(() => {
    startInterval();
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { count, carruselImg, nextImage, prevImage };
}