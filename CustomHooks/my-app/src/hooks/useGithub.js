import { useEffect, useState } from "react";

export function useGithub(username) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchGitHubData = async () => {
      setLoading(true);
      setError(null);
      try {
        if (username.trim() !== "") {
          const response = await fetch(
            `https://api.github.com/users/${username}`,
          );
          if (!response.ok) {
            throw new Error("User not found");
          }
          const data = await response.json();
          console.log(data);
          setUser(data);
          setLoading(false);
        }
      } catch (error) {
        setError(error.message);
        setLoading(false);
        console.error("Error fetching GitHub data:", error);
      }
    };
    fetchGitHubData();
  }, [username]);

  return { user, error, loading };
}
