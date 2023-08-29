
const username = document.querySelector(".name-register");
const password = document.querySelector(".password-register");
const passagain = document.querySelector(".passagain-register");
const btn = document.querySelector(".btnDK");

btn.addEventListener("click",(e)=>{
    e.preventDefault();
    if(username.value === ""|| password.value===""){
        alert("Vui lòng không để trống");
    }
    else{

        if(password.value === passagain.value){
            let listAccoutLogin = JSON.parse(localStorage.getItem("listAccout"))
            const user = {
                username:username.value,
                password:password.value,
            };
            let json = JSON.stringify(user);
            localStorage.setItem("listAccout",json);
            alert("Đăng Ký Thành Công !");
            window.location.href="../dangnhap.html";
        }
        else{
            alert("Đăng kí thất bại ! Mật khẩu không khớp!")
        }
    }
});
