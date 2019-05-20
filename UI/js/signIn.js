  
fetch('https://stack-o-lite.herokuapp.com/api/v1/auth/login').then(res => JSON.parse(res)).then(data => console.log(data));