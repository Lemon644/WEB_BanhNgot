let nameRegister     = document.querySelectorAll('.name-register');
let passwordRegister = document.querySelectorAll('.password-register');
let passagin        = document.querySelectorAll('.passagain-register')
let btnRegister      = document.querySelectorAll('.btn-register');

btnRegister[0].addEventListener("click", function(value) {
   
        if (emailRegister[0].value && passwordRegister[0].value) {
            let listAccoutLogin = JSON.parse(localStorage.getItem("listAccout"));
    
            if (listAccoutLogin) {
                listAccoutLogin.push({
                    name:  nameRegister[0].value,
                    email: emailRegister[0].value,
                    password: passwordRegister[0].value
                })
            } else {
                listAccoutLogin = [
                    {
                        name:  nameRegister[0].value,
                        email: emailRegister[0].value,
                        password: passwordRegister[0].value
                    }
                ]
            }
    
            localStorage.setItem("listAccout", JSON.stringify(listAccoutLogin));
            location.href = "../dangnhap.html";
        }
    
    
});