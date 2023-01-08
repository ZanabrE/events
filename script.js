function register(){
    //Hide/show an element.
    const Register = document.getElementById('logbook_reg');
    const signin = document.getElementById('logbook_sign');
    const record_reg = document.getElementById('btn_reg');
    const record_sign = document.getElementById('btn_sign');
    Register.style.display = "none";
    signin.style.display = "none";

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

//Register click function.
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

//Signin click function
function sign(){
    //Prevent submission.
    document.addEventListener('submit', function(event) {
        event.preventDefault();
    });

    //Variables.
    const username = document.getElementById("username1").value;
    const password = document.getElementById("password1").value;
    let text4, text5;

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

//Beginning of the home page.
function home(){
    const booking = document.getElementById("booking_tables");
    const bookingArt = document.getElementById("art_booking");
    const bookingMusic = document.getElementById("music_booking");
    booking.style.display = "none";

    bookingArt.addEventListener('click', () => {
        const form = document.getElementById('booking_tables');

        if(form.style.display === 'none'){
            form.style.display = 'block';
        }
    });

    bookingMusic.addEventListener('click', () => {
        const form = document.getElementById('booking_tables');

        if(form.style.display === 'none'){
            form.style.display = 'block';
        }
    });
}

//Artist button function.
function artistBtn(){
    //Prevent submission.
    document.addEventListener('submit', function(event) {
        event.preventDefault();
    });

    //Const variable.
    const artist = document.getElementById("artist").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const date = document.getElementById("date").value;
    const type = document.getElementById("type").value;
    const number = document.getElementById("number").value;
    let message, message1, message2, message3, message4, message5;

    if(artist && email && phone && date && type && number){
        const tableElement = document.getElementById("table");
        const trElement = document.createElement('tr');
        const tbodyElement = document.createElement('tbody');
        const artistEle = document.createElement('td');
        const emailEle = document.createElement('td');
        const phoneEle = document.createElement('td');
        const dateEle = document.createElement('td');
        const typeEle = document.createElement('td');
        const numberEle = document.createElement('td');
        artistEle.innerHTML = artist;
        emailEle.innerHTML = email;
        phoneEle.innerHTML = phone;
        dateEle.innerHTML = date;
        typeEle.innerHTML = type;
        numberEle.innerHTML = number;
        trElement.appendChild(artistEle);
        trElement.appendChild(emailEle);
        trElement.appendChild(phoneEle);
        trElement.appendChild(dateEle);
        trElement.appendChild(typeEle);
        trElement.appendChild(numberEle);
        tbodyElement.appendChild(trElement);
        tableElement.appendChild(tbodyElement);
    }

    //Validate user's input.
    if(!artist){
        message = "Please select an artist!";
        document.getElementById("incomplete").innerHTML = message;
        document.getElementById("incomplete").style.color = "red";
        artist.focus();
    }

    if(!email){
        message1 = "Please enter email address!";
        document.getElementById("incomplete1").innerHTML = message1;
        document.getElementById("incomplete1").style.color = "red";
        email.focus();
    }

    if(!phone){
        message2 = "Please enter a phone number";
        document.getElementById("incomplete2").innerHTML = message2;
        document.getElementById("incomplete2").style.color = "red";
        phone.focus();
    }

    if(!date){
        message3 = "Please enter the date!"
        document.getElementById("incomplete3").innerHTML = message3;
        document.getElementById("incomplete3").style.color = "red";
        date.focus();
    }

    if(!type){
        message4 = "Please select standard or VIP ticket!";
        document.getElementById("incomplete4").innerHTML = message4;
        document.getElementById("incomplete4").style.color = "red";
        type.focus();
    }

    if(!number){
        message5 = "Please enter the number of tickets!";
        document.getElementById("incomplete5").innerHTML = message5;
        document.getElementById("incomplete5").style.color = "red";
        phone.focus();
    }
    else{
        return bookingValidation();
    }
}

function bookingValidation(){
    //Validate booking.
    if(artist === artist && email === email && phone === phone && date === date && type === type && number === number){
        alert("Thank you for booking your event!");
    }
    else{
        alert("Please enter all information!");
    }
}

//Musician button function.
function musicianBtn(){
    //Prevent submission.
    document.addEventListener('submit', function(event) {
        event.preventDefault();
    });

    //Const variable.
    const musician = document.getElementById("musician").value;
    const email_music = document.getElementById("email_music").value;
    const phone_music = document.getElementById("phone_music").value;
    const date_music = document.getElementById("date_music").value;
    const type_music = document.getElementById("type_music").value;
    const number_music = document.getElementById("number_music").value;
    let message, message1, message2, message3, message4, message5;

    if(artist && email && phone && date && type && number){
        const tableElement = document.getElementById("table");
        const trElement = document.createElement('tr');
        const tbodyElement = document.createElement('tbody');
        const musicianEle = document.createElement('td');
        const emailEle = document.createElement('td');
        const phoneEle = document.createElement('td');
        const dateEle = document.createElement('td');
        const typeEle = document.createElement('td');
        const numberEle = document.createElement('td');
        musicianEle.innerHTML = musician;
        emailEle.innerHTML = email_music;
        phoneEle.innerHTML = phone_music;
        dateEle.innerHTML = date_music;
        typeEle.innerHTML = type_music;
        numberEle.innerHTML = number_music;
        trElement.appendChild(musicianEle);
        trElement.appendChild(emailEle);
        trElement.appendChild(phoneEle);
        trElement.appendChild(dateEle);
        trElement.appendChild(typeEle);
        trElement.appendChild(numberEle);
        tbodyElement.appendChild(trElement);
        tableElement.appendChild(tbodyElement);
    }

    //Validate user's input.
    if(!musician){
        message = "Please select a musician!";
        document.getElementById("musicianMessage").innerHTML = message;
        document.getElementById("musicianMessage").style.color = "red";
        musician.focus();
    }

    if(!email_music){
        message1 = "Please enter email address!";
        document.getElementById("emailMessage").innerHTML = message1;
        document.getElementById("emailMessage").style.color = "red";
        email_music.focus();
    }

    if(!phone_music){
        message2 = "Please enter a phone number";
        document.getElementById("phoneMessage").innerHTML = message2;
        document.getElementById("phoneMessage").style.color = "red";
        phone_music.focus();
    }

    if(!date_music){
        message3 = "Please enter the date!"
        document.getElementById("dateMessage").innerHTML = message3;
        document.getElementById("dateMessage").style.color = "red";
        date_music.focus();
    }

    if(!type_music){
        message4 = "Please select standard or VIP ticket!";
        document.getElementById("typeMessage").innerHTML = message4;
        document.getElementById("typeMessage").style.color = "red";
        type_music.focus();
    }

    if(!number_music){
        message5 = "Please enter the number of tickets!";
        document.getElementById("numberMessage").innerHTML = message5;
        document.getElementById("numberMessage").style.color = "red";
        phone_music.focus();
    }
    else{
        return musicianValidation();
    }
}

function musicianValidation(){
    //Validate booking.
    if(musician === musician && email_music === email_music && phone_music === phone_music && date_music === date_music && type_music === type_music && number_music === number_music){
        alert("Thank you for booking your event!");
    }
    else{
        alert("Please enter all information!");
    } 
}