const init = () => {
  var students = [ {id:1, name:"Jason", email:"jason@gmail.com"},
                {id:2, name:"Walter", email:"walter@gmail.com"},
                {id:3, name:"Frodo", email:"frodo@gmail.com"},
                {id:4, name:"Tyrese", email:"tyrese@gmail.com"},
                {id:5, name:"Michael", email:"michael@gmail.com"} ];

    students.forEach((student) => {
     console.log(`id: ${student.id}\nemail: ${student.email}\n---------------------------`);
  });
}
  window.onload = init;
