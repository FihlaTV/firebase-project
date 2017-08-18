// Initialize Firebase
  var config = {
    apiKey: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    authDomain: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    databaseURL: "xxxxxxxxxxxxxxxxxx",
    storageBucket: "xxxxxxxxxxxxxxxxxx",
    messagingSenderId: "xxxxxxxxxxxxx"
  };
  firebase.initializeApp(config);


//get elements
    const txtEmail = document.getElementById("email2");
    const txtPass = document.getElementById("password2");
    const btnLogin = document.getElementById("btnLogin");
    const btnLogout = document.getElementById("btnLogout");

// signin stuff
    btnLogin.addEventListener('click', e => {

        const email = txtEmail.value;
        const pass = txtPass.value;

        firebase.auth().signInWithEmailAndPassword(email, pass).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;

          console.log(errorMessage);
          $( "#signin_body" ).append('<div class="alert alert-danger">' + errorMessage + '</div>');
          // ...
        });
    });

// signout stuff
    btnLogout.addEventListener('click', e => {
        firebase.auth().signOut().then(function() {
          // Sign-out successful.
        }).catch(function(error) {
          // An error happened.
        });
    });

// check realtime Auth
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        var email = user.email;
        var emailVerified = user.emailVerified;

        console.log(email);
        $("#btnLogout").removeClass("hide");
        $("#appointment_body").removeClass("hide");
        $("#signin_body").addClass("hide");

        // ...
      } else {
        // User is signed out.
        // ...
        console.log("Not Logged in");
        $("#btnLogout").addClass("hide");
        $("#appointment_body").addClass("hide");
        $("#signin_body").removeClass("hide");
      }

    });

/// retriving data

var rootRef = firebase.database().ref().child("Users").orderByChild("sortDate");

rootRef.on("child_added", snap => {

    var firstName = snap.child("FirstName").val();
    var lastName = snap.child("LastName").val();
    var email = snap.child("Email").val();
    var contact = snap.child("Phone").val();
    var date = snap.child("Date").val();

    var id = snap.key;

    $("#table_body").append("<tr><td>" + firstName + "</td><td>" + lastName + "</td><td>" + email + "</td><td>" + contact + "</td><td>" + date + "</td></tr>");

});




























