

async function buy(){
    await fetch('Access-Control-Allow-Origin:https://api-mercado-pago.vercel.app/creat-order', {
       method:'post'
    })
    .then(res=>res)
    .then(data=>{console.log(data)})
}
