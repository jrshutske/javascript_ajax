const init = () => {
  const courses = [...document.querySelectorAll("li")];
  const coursesText = courses.map(course => course.innerHTML);
  const finalCourses = ["React 101", "Ruby on Rails",... coursesText];
  console.log(finalCourses);
}
  window.onload = init;
