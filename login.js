var action = "login";

function create_account(){
    action = "create_account";
    document.getElementById("button_login").innerHTML = "CREATE ACCOUNT";
    document.getElementById("button_login").style.width = "65%";
    window.alert("Please enter a User Name and Password");
}
function addUser(){
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;

    if (username == ""){
        window.alert("Please enter a valid User Name and Password");
    } else if (password == ""){
        window.alert("Please enter a valid User Name and Password");
    } else {
        if (action == "create_account"){
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
               
            window.alert("Account created successfully!");

            action = "login";

            document.getElementById("username").value = "";
            document.getElementById("password").value = "";

            document.getElementById("button_login").innerHTML = "LOGIN";
            document.getElementById("button_login").style.width = "55%";
           
            window.location = "chat_room.html";
        } else if (action == "login"){
           actual_username = localStorage.getItem("username");
           actual_password = localStorage.getItem("password");

           if ((actual_username == null)&&(actual_password == null)){
               window.alert("User not found. Please create an account");
               document.getElementById("button_login").innerHTML = "CREATE ACCOUNT";
               document.getElementById("button_login").style.width = "65%";
               action = "create_account";
            } else {
               if ((username == actual_username)&&(password == actual_password)){
                   document.getElementById("username").value = "";
                   document.getElementById("password").value = "";
 
                   window.location = "chat_room.html";
                } else {
                   window.alert("Incorrect User Name or Password");
 
                   document.getElementById("username").value = "";
                   document.getElementById("password").value = "";
                }
            }
        }
    }
}