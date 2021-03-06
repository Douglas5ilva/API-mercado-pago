const express = require('express')
const app = express()
const cors = require('cors')


app.use(('/', cors()))

app.get('/', (req,res)=>{ res.send('Server is Running...') })

app.get('/creat-order', async (req, res) => {

    var mercadopago = require('mercadopago');
    mercadopago.configure({
        access_token: 'TEST-8885132814834847-042318-aad32373acf521a849405ef2a551b331-1111716906'
    });

    var preference = {
        items: [
            {
                title: 'Milkshake',
                quantity: 1,
                currency_id: 'ARS',
                unit_price: 1.1
            }
        ],
        notification_url:"",
    };

    mercadopago.preferences.create(preference)
    .then(e=>{
        res.send({data: e.body.sandbox_init_point})
    }).catch(err=>{
        console.log(err)
    })
})


app.listen(3000)
