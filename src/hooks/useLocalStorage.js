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

// export const useLocalStorageOneTime = (key, courseId) => {
//   const [lsData] = useState(() =>
//     localStorage.getItem(key)
//       ? JSON.parse(window.localStorage.getItem(key))
//       : []
//   );

//   const currentProgress = lsData.find(course => course.courseId === courseId);
//   if (!currentProgress) {
//     return [0, 0];
//   }

//   return [
//     currentProgress.lesson.activeLessonIdx,
//     currentProgress.lesson.currentTime,
//   ];
// };
