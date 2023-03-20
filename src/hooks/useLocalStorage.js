import { useState, useEffect } from 'react';

export const useLocalStorage = key => {
  const [users, setUsers] = useState(() =>
    localStorage.getItem(key)
      ? JSON.parse(window.localStorage.getItem(key))
      : []
  );

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(users));
    } catch {
      throw new Error();
    }
  }, [key, users]);

  return [users, setUsers];
};
