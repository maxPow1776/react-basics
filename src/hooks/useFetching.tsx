import { useState } from "react";

export const useFetching = (callback: () => void) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const fetching = async () => {
    try {
      setIsLoading(true);
      await callback();
    } catch (e) {
      setError("Fething error");
    } finally {
      setIsLoading(false);
    }
  };

  return [fetching, isLoading, error] as const;
};
