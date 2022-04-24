

async function buy(){
    let data = await fetch('https://api-mercado-pago.vercel.app/creat-order',{method:'POST'})
    let main = await data.json()
    window.location.href = main;
}
