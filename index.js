var a=-100;
setInterval(function(){
    if (a!=0) {
        slide = document.getElementById('slide');
        slide.style="margin-left:"+a+"%;transition: 1s ease-in;";
        if (a== -300) {
            a=0;
        }else{
            a=a+-100;
        }
        return a;

    }else{
        slide = document.getElementById('slide');
        slide.style="margin-left:"+a+"%;";
        if (a== -300) {
            a=0;
        }else{
            a=a+-100;
        }
        return a;
    }

}, 2000);

function toOrder() {
    var yakin = confirm("Apakah kamu yakin akan beralih ke halaman pembelian?");
        if (yakin) {
            window.location.href="halaman_pesan.html";
        } 
        else {
            window.location.href="index.html";
        }
}

function toWa() {
    var oke = confirm("Apakah kamu yakin akan beralih ke WA?");
        if (oke) {
            window.location = "https://wa.me/6285157732095";
        } 
        else {
            window.location.href="index.html";
        }
}

function toWeb() {
    var siap = confirm("Apakah kamu yakin akan beralih ke web resmi Covid-19 Indonesia?");
        if (siap) {
            window.location = "https://covid19.go.id";
        } 
        else {
            window.location.href="index.html";
        }
}