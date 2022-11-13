const name = document.getElementById('name')
const email = document.getElementById('email')
// const subject = document.getElementById('subject')
const body = document.getElementById('message')
const btn = document.getElementById('sendBtn')

btn.addEventListener('click', function () {
  sendEmail(name.value, email.value, body.value)
})

function sendEmail(name, email, body) {
  try {
    Email.send({
      SecureToken: '095a899a-8a94-4502-af6b-33f40e230d86',
      From: `${email}`,
      To: 'hazedrops@hotmail.com',
      Subject: `Email from ${name} via Porfolio Website`,
      Body: `${body}`,
    }).then(function (message) {
      alert(message)
    })
  } catch (err){
    alert(err.message)
  }
}
