// user.username và user.password ở phần đăng kí và đăng nhập phải giống nhau
const usernameDN = document.querySelector(".username-login");
const passwordDN = document.querySelector(".password-login");
const btnDN = document.querySelector(".btnDN");

btnDN.addEventListener("click",(e)=>{
    e.preventDefault();  
    if(usernameDN.value === ""|| passwordDN.value===""){
        alert("Vui lòng không để trống");
    }
    else{
        const user = JSON.parse(localStorage.getItem("listAccout"));
        if(
            user.username === usernameDN.value && 
            user.password === passwordDN.value
            // username1 phải cùng với username1 trên đăng kí
        ){
            alert("Đăng nhập thành công");
            window.location.href ="../trangchu.html";
            localStorage.setItem("isLogin", true);

        }
        else{
            alert("Đăng nhập thất bại");
        }
    }
});
