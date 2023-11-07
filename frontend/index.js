
//fetching data
fetch("http://localhost:3000/user")
    .then(res => res.json())
    .then(json => console.log(json))


