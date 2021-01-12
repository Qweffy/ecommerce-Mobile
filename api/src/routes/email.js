var nodemailer = require('nodemailer');
var express = require('express');
var app = express();
const { EMAIL_PASS } = process.env;

app.post('/send', (req, res) => {
    const { to, subject, text } = req.body
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'sellphone654@gmail.com',
            pass: EMAIL_PASS
        },
        tls: {
            rejectUnauthorized: false
        }
    });
    var mailOptions = {
        from: '"SellPhone" <sellphone654@gmail.com>',
        to: to,
        subject: subject,
        text: text
    }
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            res.status(500).send(err.message)
        } else {
            console.log("email enviado");
            res.status(200).jsonp(req.body);
        }
    })
});


module.exports = app;