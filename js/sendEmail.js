function sendEmail(){
    Email.send({
                Host : "smtp.gmail.com",
                Username : "username",
                Password : "password",
                To : 'anytimecare60@gmail.com',
                From : document.getElementById("email").value,
                Subject : "New contact form enquiry",
                Body : "And this is the body"
            }).then(
            message => alert(message)
            );
}