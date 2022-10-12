let response = fetch('https://api.nationalize.io/?name=nathaniel')
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));


console.log(response);

response.forEach(x=>{
    print(x);
})