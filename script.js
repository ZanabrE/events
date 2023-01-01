function register(){
    //Hide/show an element.
    const register = document.getElementById('logbook_reg').style.display = 'none';
    const signin = document.getElementById('logbook_sign').style.display = 'none';
    const record_reg = document.getElementById('btn_reg');
    const record_sign = document.getElementById('btn_sign');

    record_reg.addEventListener('click', () => {
        const form = document.getElementById('logbook_reg');

        if(form.style.display === 'none'){
            form.style.display = 'block';
        }
        else{
            form.style.display = 'none';
        }
    });

    record_sign.addEventListener('click', () => {
        const form = document.getElementById('logbook_sign');

        if(form.style.display === 'none'){
            form.style.display = 'block';
        }
        else{
            form.style.display = 'none';
        }
    });
}

function reg(){
    //Prevent submission.
    document.addEventListener('submit', function(event) {
        event.preventDefault();
    });

    //Variables for input validation.
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirmation = document.getElementById("confirmation").value;
    let text, text2, text3;

    //Username is not empty.
    if(!username){
        text = "Please enter a username!";
        document.getElementById("error").innerHTML = text;
        document.getElementById("error").style.color = "red";
        username.focus();
    }

    //Password is not empty.
    if(!password){
        text2 = "Please enter a password!";
        document.getElementById("error2").innerHTML = text2;
        document.getElementById("error2").style.color = "red";
        password.focus();
    }

    //Confirmation match.
    if(confirmation != username){
        text3 = "User name does not match!"
        document.getElementById("error3").innerHTML = text3;
        document.getElementById("error3").style.color = "red";
        confirmation.focus();
    }
    else{
        //Needed another function to validate.
        return validation();
    }
    
}

function validation(){
    //Validate all the inputs.
    if(username === username && password === password && confirmation === confirmation){
        alert("Congratulations! You are now registered.");
    }
    else{
        alert("Please fill all the forms!")
    }
    //This code will locate the home page.
    location.href="home.html";
}

function sign(){
    //Prevent submission.
    document.addEventListener('submit', function(event) {
        event.preventDefault();
    });

    //Variables.
    const username = document.getElementById("username1").value;
    const password = document.getElementById("password1").value;
    let tex4, text5;

    //Username is not empty.
    if(!username){
        text4 = "Please enter a username!";
        document.getElementById("error4").innerHTML = text4;
        document.getElementById("error4").style.color = "red";
        username.focus();
    }

    //Password is not empty.
    if(!password){
        text5 = "Please enter a password!";
        document.getElementById("error5").innerHTML = text5;
        document.getElementById("error5").style.color = "red";
        password.focus();
    }
    else{
        //Needed another function to validate.
        return validation1();
    }

}

function validation1(){
    //Validate sign-in inputs.
    if(username === username && password === password){
        alert("Successful sign-in!");
    }
    else{
        alert("Please enter username or password!");
    }
    //This code will locate the home page.
    location.href="home.html";
}

//JavaScript functions home page.
function home(){
    return artist();
}

function artist(){
    //Prevent submission.
    document.addEventListener('submit', function(event) {
        event.preventDefault();
    });

    //Const variable.
    const artist = document.getElementById("artist").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const date = document.getElementById("date").value;
    let message, message1, message2;

    //Validate user's input.
    if(!email){
        message = "Please enter email address!";
        document.getElementById("incomplete").innerHTML = message;
        document.getElementById("incomplete").style.color = "red";
        email.focus();
    }

    if(!phone){
        message1 = "Please enter a phone number";
        document.getElementById("incomplete1").innerHTML = message1;
        document.getElementById("incomplete1").style.color = "red";
        phone.focus();
    }

    if(!date){
        message2 = "Please enter the date!"
        document.getElementById("incomplete2").innerHTML = message2;
        document.getElementById("incomplete2").style.color = "red";
        date.focus();
    }
    else{
        return bookingValidation();
    }

}

function bookingValidation(){
    //Validate booking.
    if(email === email && phone === phone && date === date){
        alert("Thank you for booking your event!");
    }
    else{
        alert("Please enter all information!");
    }
    location.href="table.html";
}