import { useEffect, useState } from "react";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3001/api";

export function useGetTemperature() {
  const [temperature, setTemperature] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchRandom() {
      try {
        const resp = await fetch(`${API_URL}/temperature`);
        if (!resp.ok) {
          throw new Error("Server error " + resp.status);
        }
        const data = await resp.json();
        setTemperature(data.temperature);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchRandom();
  }, []);

  return { temperature, loading, error };
} 