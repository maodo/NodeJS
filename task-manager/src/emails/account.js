const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)


const sendWelcomeEmail = (email, name) =>{
    const message = {
        to: email,
        from: 'sowpoulodiery20@gmail.com',
        subject: 'Thanks for joining in',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app`
    }
    sgMail.send(message)
}

const sendCancellationEmail = (email, name) => {
    const message = {
        to: email,
        from: 'sowpoulodiery20@gmail.com',
        subject:'Yaw sissou man nga yaw😡',
        text: `Why you're leaving our app ? Façon sa beugeudj la ya kham yaw ${name} 😂`
    }
    sgMail.send(message)
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}