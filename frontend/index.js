
let div= document.getElementById("test");

div.append(testing());

//fetching data
fetch("http://localhost:3000/user")
    .then(res =>res.json())
    .then(json => {
        json.map(data => {
            console.log(data)

        })
    })



//testing for buttons
function testing(){
    let span = document.createElement('h1');
    span.innerHTML = `<span>testing</span>`;
    return span;
}

    
