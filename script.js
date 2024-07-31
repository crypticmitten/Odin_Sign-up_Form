const pass = document.getElementById("password");
const passConf = document.getElementById("password-conf");

function confirmPassword(){
    if (pass.value == passConf.value != ""){
        pass.classList.remove("not-matched");
        passConf.classList.remove("not-matched");
        document.getElementById("password-match").innerHTML = "";
    }else{
        pass.classList.add("not-matched");
        passConf.classList.add("not-matched");
        document.getElementById("password-match").innerHTML = "*Passwords do not match";
    }
}

pass.addEventListener("change",() => confirmPassword())
passConf.addEventListener("change",() => confirmPassword())