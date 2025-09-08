import { useState, useEffect, useRef } from "react";

export function useInfiniteRows(
  initialCount = 4,
  step = 2,
  delay = 1500,
  maxRows = 8
) {
  const [rowsCount, setRowsCount] = useState(initialCount);
  const [loading, setLoading] = useState(false);
  const loadMoreRef = useRef(null);

  useEffect(() => {
    if (!loadMoreRef.current || rowsCount === maxRows) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting && !loading) {
          setLoading(true);
          setTimeout(() => {
            setRowsCount((prev) => prev + step);
            setLoading(false);
          }, delay);
        }
      },
      { threshold: 1.0 }
    );

    observer.observe(loadMoreRef.current);

    return () => observer.disconnect();
  }, [loading, step, delay]);

  return { rowsCount, loading, loadMoreRef };
}
