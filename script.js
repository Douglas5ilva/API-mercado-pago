

async function buy(){
    let data = await fetch('http://localhost:3000/creat-order',{method:'POST'})
    let main = await data.json()
    window.location.href = main;
}