// tính tiền lương
document.getElementById("tinhTienluong").onclick = function tinhTienluong(){
  if(luongNgay < 0 || soNgaylam < 0){
    alert("Lương ngày và số ngày làm việc không thể nhỏ hơn 0.")

  } else {
    var luongNgay = Number(document.getElementById("luongNgay").value);
    var soNgaylam = Number(document.getElementById("soNgaylam").value);
    var tienLuong = luongNgay * soNgaylam;
    document.getElementById("tienLuong").innerHTML = "Tổng tiền lương là: " + tienLuong.toLocaleString();
  }  
}
// tính giá trị trung bình
document.getElementById("tinhTrungbinh").onclick = function tinhTrungbinh(){
  var soThunhat = Number(document.getElementById("soThunhat").value);
  var soThuhai = Number(document.getElementById("soThuhai").value);
  var soThuba = Number(document.getElementById("soThuba").value);
  var soThutu = Number(document.getElementById("soThutu").value);
  var soThunam = Number(document.getElementById("soThunam").value);
  var soTrungbinh = (soThunhat + soThuhai + soThuba + soThutu + soThunam)/5;
  document.getElementById("trungBinh").innerHTML = "Tổng trung bình của 5 số là: " + soTrungbinh.toLocaleString();
}
// đổi tiền
document.getElementById("doiTien").onclick = function doiTien(){
  var tyGia = 23500;  
  var usd = Number(document.getElementById("usd").value);
  var vnd = usd * tyGia;
  document.getElementById("vnd").innerHTML = "Đổi được " + vnd.toLocaleString() + "vnđ"
}
// tính chi vi và diện tích
document.getElementById("tinh").onclick = function(){
  var dai = Number(document.getElementById("chieuDai").value);
  var rong = Number(document.getElementById("chieuRong").value);
  var chuVi = (dai + rong)* 2;
  var dienTich = dai * rong;
  document.getElementById("chuVi").innerHTML = "Chu vi là: " + chuVi.toLocaleString() + "<br>" + "Diện tích là: " + dienTich.toLocaleString();
}
// tính tổng 2 ký số
document.getElementById("tinhTong").onclick = function(){
  var n = Number(document.getElementById("soN").value);
  var soDau = Math.floor(n/10);
  var soCuoi = n%10;
  var tong2so = soDau + soCuoi;
  document.getElementById("tongKyso").innerHTML = "Tổng 2 ký số là: " + tong2so;
}