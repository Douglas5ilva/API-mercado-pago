

async function buy(){
    await fetch('https://api-mercado-pago.vercel.app/creat-order', {
       method:'get'
    })
    .then(res=>res)
    .then(data=>{console.log(data)})
}
