

async function buy(){
    await fetch(Access-Control-Allow-Origin: 'https://api-mercado-pago.vercel.app/creat-order', {
       method:'post',
       mode:'cors'
    })
    .then(res=>res)
    .then(data=>{console.log(data)})
}
