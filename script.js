

async function buy(){
    let data = await fetch('https://api-mercado-pago.vercel.app/creat-order',{
        method:'POST',
        mode: 'no-cors'
    })
    let main = await data.json()
    window.location.href = main;
}
