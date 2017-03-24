// Initialize Firebase
var config = {
    apiKey: "AIzaSyDnOC2aEmN5Yv2LWldZT9goreYV4RueJEw",
    authDomain: "my-app-8e920.firebaseapp.com",
    databaseURL: "https://my-app-8e920.firebaseio.com",
    storageBucket: "my-app-8e920.appspot.com",
    messagingSenderId: "820758932026"
};
firebase.initializeApp(config);

var database = firebase.database();

//Get elements
const txtFname = document.getElementById("fname");
const txtLname = document.getElementById("lname");
const txtEmail = document.getElementById("email");
const txtPhone = document.getElementById("phone");
const btnSubmit = document.getElementById("btnSubmit");


btnSubmit.addEventListener('click', e => {

    const fname = txtFname.value;
    const lname = txtLname.value;
    const email = txtEmail.value;
    const phone = txtPhone.value;
    const today = Date();
    const time = -new Date().getTime();
    const userId = firebase.database().ref().child('Users').push().key;


    if (fname == 0 || lname == 0 || email == 0 || phone == 0)
    {
        alert("Input fiels must not be emplty !!");

    }else {

        firebase.database().ref('Users/' + userId).set({
            FirstName: fname,
            LastName: lname,
            Email: email,
            Phone: phone,
            Date: today,
            sortDate: time
        });

        document.getElementById("fname").value = "";
        document.getElementById("lname").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phone").value = "";

        alert("Success !!");
    }

});