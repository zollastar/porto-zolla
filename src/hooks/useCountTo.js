import { useEffect, useState } from "react";

const useCountTo = (end) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2; // duration in seconds
    const increment = end / (duration * 60); // 60 fps

    const countInterval = setInterval(() => {
      start += increment;
      setCount(Math.min(start, end));
      if (start >= end) clearInterval(countInterval);
    }, 1000 / 60);

    return () => clearInterval(countInterval);
  }, [end]);

  return Math.round(count);
};

export default useCountTo;