document.addEventListener("DOMContentLoaded" , function(){
    let button_click=document.getElementById("clickbutton1");
    button_click.addEventListener("click" , click);
    function click(){
        alert(" هل تود قراءة المزيد عن هذا المقال؟");
    }
    let y=document.getElementById("btn2");
    y.addEventListener("click" , press);
    function press(){
        confirm("هل تود الخروج؟");
    }
});