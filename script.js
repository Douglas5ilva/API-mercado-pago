function buy() {  
    fetch('https://api-mercado-pago.vercel.app/creat-order')
    .then(response=> response.json()
    .then(res=>window.location.href = res.data
    )
)
}
