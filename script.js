

async function buy(){
    await fetch('https://api-mercado-pago.vercel.app/creat-order', {
       method:'get'
    })
    .then(res=>res.json)
    .then(data=>{console.log(data)})
}
