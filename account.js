/* LOGIN */

document.getElementById("loginForm").addEventListener("submit", function(e){
  e.preventDefault(); 

  const email = document.getElementById("emailInput").value.trim().toLowerCase();
  const password = document.getElementById("passwordInput").value.trim();

  const validEmail = "mac@gmail.com"; /* A valid acc.*/
  const validPassword = "Alt";

  if(email === validEmail && password === validPassword){
    document.getElementById("loginSuccess").style.display = "block";
    setTimeout(function(){
        window.location.href = "index.html"; 
    }, 2000);
  } else { 
     document.getElementById("loginError").style.display = "block";
  }
});
