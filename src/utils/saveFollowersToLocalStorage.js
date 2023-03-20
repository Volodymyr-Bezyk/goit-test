// export const saveFollowersToLocaleStorage = (
//   coursesProgress,
//   currentCourse,
//   setCoursesProgress
// ) => {
//   const idx = coursesProgress.findIndex(
//     course => course.courseId === currentCourse.courseId
//   );
//   if (idx === -1) {
//     setCoursesProgress(prevCoursesProgress => [
//       ...prevCoursesProgress,
//       currentCourse,
//     ]);
//   } else {
//     const updatedCourses = coursesProgress.map(course => {
//       if (course.courseId !== currentCourse.courseId) {
//         return course;
//       }
//       return { ...currentCourse };
//     });
//     setCoursesProgress(updatedCourses);
//   }
// };

export const saveFollowersToLocaleStorage = (users, setUsers, currentUser) => {
  const idx = users.findIndex(user => user.id === currentUser.id);

  if (idx === -1) {
    console.log(currentUser, 'currentUser');
    setUsers(prevUsers => [...prevUsers, currentUser]);
  } else {
    const updatedUsers = users.map(user => {
      if (user.id !== currentUser.id) {
        return user;
      }
      return currentUser;
    });

    setUsers(updatedUsers);
  }
};
