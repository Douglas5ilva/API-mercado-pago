

async function buy(){
    await fetch('https://api-mercado-pago.vercel.app/creat-order', {
       method:'post'
    })
    .then(res=>res)
    .then(data=>{console.log(data)})
}
