const init = () => {
  var promise1 = new Promise((resolve, reject) => {
    setTimeout(function() {
      resolve('hello world');
    }, 1500);
  });

  var promise2 = new Promise((resolve, reject) => {
    setTimeout(function() {
      reject(Error('unable to resolve the request'));
    }, 500);
  });

  promise1.then(value => {
    console.log(value);
  }).catch(error => {
    console.log(error)
  });
  
  promise2.then(value => {
    console.log(value);
  }).catch(error => {
    console.log(error)
  });
}

window.onload = init;