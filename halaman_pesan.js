var totBarang = 0;
var totKey = 0;
var totMouse = 0;
var totPrint = 0;

//hitung list
function list(){
    if (document.form1.namaBarang.value==0){
        document.form1.jumBarang.value = null;
        document.form1.totBarang.value = null;
        document.form1.hargaBarang.value = null;
        totBarang=0;
    } else if (document.form1.jumBarang.value > 0){
        var hargabarang = document.form1.namaBarang.value;
        document.form1.hargaBarang.value = hargabarang;

        var jumBarang = document.form1.jumBarang.value;
        document.form1.totBarang.value = document.form1.namaBarang.value * jumBarang;
        totBarang = document.form1.totBarang.value;
    } else {
        var hargabarang = document.form1.namaBarang.value;
        document.form1.hargaBarang.value = hargabarang;
    }
    updatetotal();
}

function hargabarang(){
    if (document.form1.namaBarang.value==0){
        document.form1.jumBarang.value = null;
        document.form1.totBarang.value = null;
        totBarang = 0;
    } else {
        var jumBarang = document.form1.jumBarang.value;
        document.form1.totBarang.value = document.form1.namaBarang.value * jumBarang;
        totBarang = document.form1.totBarang.value;
    }
    updatetotal();
}

//hitung keyboard
function keyboard(){
    if (document.form1.cek1.checked==true){
        document.form1.hargaKey.value = document.form1.cek1.value;
    } else {
        document.form1.hargaKey.value = null;
        document.form1.jumKey.value = null;
        document.form1.totKey.value = null;
        totKey=0;
    }
    updatetotal();
}

function hitKeyboard(){
    if (document.form1.cek1.checked==true){
        document.form1.totKey.value = document.form1.cek1.value * document.form1.jumKey.value;
        totKey = document.form1.totKey.value;
    } else {
        document.form1.hargaKey.value = null;
        document.form1.jumKey.value = null;
        totKey = 0;
    }
    updatetotal();
}

//hitung mouse
function mouse(){
    if (document.form1.cek2.checked==true){
        document.form1.hargaMouse.value = document.form1.cek2.value;
    } else {
        document.form1.hargaMouse.value = null;
        document.form1.jumMouse.value = null;
        document.form1.totMouse.value = null;
        totMouse=0;
    }
    updatetotal();
}

function hitMouse(){
    if (document.form1.cek2.checked==true){
        document.form1.totMouse.value = document.form1.cek2.value * document.form1.jumMouse.value;
        totMouse = document.form1.totMouse.value;
    } else {
        document.form1.hargaMouse.value = null;
        document.form1.jumMouse.value = null;
        totMouse = 0;
    }
    updatetotal();
}

//hitung printer
function printer(){
    if (document.form1.cek3.checked==true){
        document.form1.hargaPrint.value = document.form1.cek3.value;
    } else {
        document.form1.hargaPrint.value = null;
        document.form1.jumPrint.value = null;
        document.form1.totPrint.value = null;
        totPrint=0;
    }
    updatetotal();
}

function hitPrint(){
    if (document.form1.cek3.checked==true){
        document.form1.totPrint.value = document.form1.cek3.value * document.form1.jumPrint.value;
        totPrint = document.form1.totPrint.value;
    } else {
        document.form1.hargaPrint.value = null;
        document.form1.jumPrint.value = null;
        totPrint = 0;
    }
    updatetotal();
}

function updatetotal(){
    document.form1.total.value = parseInt(totBarang)+parseInt(totKey)+parseInt(totMouse)+parseInt(totPrint);
}

function jumBayar(){
    document.form1.jumBayar.value = document.form1.total.value - document.form1.diskon1.value;
}

function hitung(){
    var total = document.form1.jumBayar.value;
    document.writeln(
        "<div align=\"center\">"+
            "<table width=\"610\" border=\"1\">"+
                "<tr>"+
                "<td height=\"50\"><div align=\"center\"><strong><font size=\"+4\">Toko Komputer Ganjar</font></strong></font></div>"+
                "</td></tr><tr><td><strong>Total harga:</strong></td>"+
                "</tr>"+
                "<tr>"+
                "<td><div align=\"center\"><font size=\"+3\"><strong>Rp. "+total+"</strong></font></div></td>"+
                "</tr>"+
                "<tr>"+
                    "<td><input type=\"button\" value=\"Back\" onClick=\"history.go(-1);\"></td>"+
                "</tr>"+
                "</table>"+
        "</div>"
    );
}

function backHome() {
    alert('Pemesanan Anda Telah Tersimpan. Silahkan kembali ke Beranda');
}
