const DoiTT = document.getElementById('DoiTT');

function ShowForm() {
   
   DoiTT.innerHTML = '';
   
   DoiTT.innerHTML += "<h3>Thay đổi thông tin</h3></br>";
   
    var form = document.createElement('form');
    form.action = 'home.php';
    form.method = 'POST';
    form.setAttribute('style', 'width: 350px; align-items: center;border: 1px solid #ddd;padding: 2rem;background: #ffffff;');
    
    var pp = document.createElement('h3');
    pp.appendChild(document.createTextNode('Điền thông tin'));
    form.appendChild(pp);
    pp.setAttribute('style',' text-align: center;');
    form.innerHTML += '</br>';
    
    var tenMoi = document.createElement('input');
    tenMoi.setAttribute('type', 'text');
    tenMoi.placeholder = ' tên mới...';
    tenMoi.name = 'tenMoi';
    form.appendChild(tenMoi);
    tenMoi.setAttribute('style', 'background: #fafafa;border: 1px solid #eeeeee;margin-top: 10px; margin-left: 5px;\n\
    width: 100%; height: 25px;');
    form.innerHTML += '</br>';
    
    var mkMoi = document.createElement('input');
    mkMoi.setAttribute('type', 'text');
    mkMoi.placeholder = ' mật khẩu mới...';
    mkMoi.name = 'mkMoi';
    form.appendChild(mkMoi);
    mkMoi.setAttribute('style', 'background: #fafafa;border: 1px solid #eeeeee;margin-top: 10px; margin-left: 5px;\n\
    width: 100%; height: 25px;');
    form.innerHTML += '</br>';
    
    var doiMK = document.createElement('input');
    doiMK.setAttribute('type', 'submit');
    doiMK.value = 'Xác nhận';
    doiMK.name = 'do-changeTenMK';
    form.appendChild(doiMK);
    doiMK.setAttribute('style', 'background: #69d2e7;border: 1px solid #ddd;color: #ffffff;margin-top: 20px; margin-left: 5px;width: 100%; height: 30px;text-transform: uppercase;');
    form.innerHTML += '</br>';
    
    var Huydi = document.createElement('input');
    Huydi.setAttribute('type', 'button');
    Huydi.value = 'Hủy';
    Huydi.id = 'Cancel';
    form.appendChild(Huydi);
    Huydi.setAttribute('style', 'background: #69d2e7;border: 1px solid #ddd;color: #ffffff;margin-top: 20px; margin-left: 25%;width: 50%; height: 30px;text-transform: uppercase;');
    form.innerHTML += '</br></br>';
    
    DoiTT.appendChild(form);
    
}

$(document).on('click', "#doiMK", function () {
    ShowForm();
});

$(document).on('click', "#Cancel", function () {
    DoiTT.innerHTML = '';
});

var tenNguoi;

$('#danhsachcay').on('click', function() {
    $.ajax({
        url:"home.php",
        method:"POST",
        data:{listcay:1},
        dataType:"JSON",
        success : function (result){
        /*    for (var i = 0; i < result.length; i++) {
                console.log(result[i]);
            }*/
            
            DanhsachCay(result);
        }
    });
});

function DanhsachCay(danhsach){
    DoiTT.innerHTML = '';
    DoiTT.innerHTML += "<h3>Danh sách gia phả</h3>";
    
    var Huydi = document.createElement('input');
    Huydi.setAttribute('type', 'button');
    Huydi.value = 'Đóng';
    Huydi.id = 'Cancel';
    DoiTT.appendChild(Huydi);
    Huydi.setAttribute('style', 'background: #69d2e7;border: 1px solid #ddd;color: #ffffff\n\
;width: 60px; height: 30px;text-transform: uppercase;float:right;');
    
    for (var i = 0; i < danhsach.length; i++) {
        var divv = document.createElement('div');
        divv.name = danhsach[i][1];
        tenNguoi = danhsach[i][1];
        divv.setAttribute('style', 'margin-top: 20px; width: 500px ;border: 1px solid #ddd; border-radius: 8px 8px 8px 8px;background: #ffffff;');
        
        var pp = document.createElement('h3');
        pp.appendChild(document.createTextNode(danhsach[i][2]));
        divv.appendChild(pp);
        pp.setAttribute('style', 'margin-top: 10px; margin-left: 15px;');
        
        var tenCay = document.createElement('input');
        tenCay.setAttribute('type', 'text');
        tenCay.value = danhsach[i][2];
        tenCay.class = danhsach[i][1];
        tenCay.name = 'tenCayMoi';
        tenCay.placeholder = 'đổi tên...';
        tenCay.id = danhsach[i][1] + '_' + danhsach[i][2];
        divv.appendChild(tenCay);
        tenCay.setAttribute('style', 'background: #fafafa;border: 1px solid #eeeeee;margin-top: 5px; margin-left: 15px;\n\
    width: 50%; height: 25px;');
        divv.innerHTML+= '</br>';
        
        var butn = document.createElement('input');
        butn.setAttribute('type', 'button');
        butn.value = 'Xem';
        butn.name = danhsach[i][2];
        butn.id = 'Xem';
        divv.appendChild(butn);
        butn.setAttribute('style', 'background: #69d2e7;border: 1px solid #ddd;color: #ffffff;\n\
margin-top: 5px; margin-left: 15px; margin-bottom: 10px;width: 10%; height: 30px;text-transform: uppercase;');
        
        var butn2 = document.createElement('input');
        butn2.setAttribute('type', 'button');
        butn2.value = 'Đổi tên';
        butn2.name = danhsach[i][2];
        butn2.id = 'Doiten';
        divv.appendChild(butn2);
        butn2.setAttribute('style', 'background: #69d2e7;border: 1px solid #ddd;color: #ffffff;\n\
margin-top: 5px; margin-left: 15px; margin-bottom: 10px; height: 30px;text-transform: uppercase;');
        
        var butn3 = document.createElement('input');
        butn3.setAttribute('type', 'button');
        butn3.value = 'Xoá';
        butn3.name = danhsach[i][2];
        butn3.id = 'Xoa';
        divv.appendChild(butn3);
        butn3.setAttribute('style', 'background: #69d2e7;border: 1px solid #ddd;color: #ffffff;\n\
margin-top: 5px; margin-left: 15px; margin-bottom: 10px;width: 10%; height: 30px;text-transform: uppercase;');
        
        DoiTT.appendChild(divv);
    }
}

$(document).on('click', "#Doiten", function () {
    var tenM = document.getElementById(tenNguoi+'_'+$(this).attr('name'));
    console.log(tenM.value + '-' + $(this).attr('name'));
 if(tenM.value !== $(this).attr('name') && tenM.value !== ''){
    $.ajax({
        url:"home.php",
        method:"POST",
        data:{tenCayMoi:tenM.value, tenCayCu: $(this).attr('name')},
     //   dataType:"text",
        success : function (result){
            $('#danhsachcay').click();
            alert(result);
        }
    });
} else{
    alert('Ten bi trung');
}
});

$(document).on('click', "#Xoa", function () {
    console.log($(this).attr('name'));
    $.ajax({
        url:"home.php",
        method:"POST",
        data:{cayXoa: $(this).attr('name')},
        dataType:"text",
        success : function (result){
            $('#danhsachcay').click();
            alert(result);
        }
    });

});

$(document).on('click', "#Xem", function () {
    var ten = ''+$(this).attr('name');
    console.log(ten);
    
    $.ajax({
        url:"home.php",
        method:"POST",
        data:{OpenCay: $(this).attr('name')},
        success : function (){
            window.location="TreeFamily.php";
        }
    });
});

function FormTaoCay(){
    DoiTT.innerHTML = '';
    DoiTT.innerHTML += "<h3>Tạo cây gia phả</h3>";
   
    var form = document.createElement('form');
    form.action = 'home.php';
    form.method = 'POST';
    form.setAttribute('style', 'width: 350px; align-items: center;border: 1px solid #ddd;padding: 2rem;background: #ffffff;');
    
    var pp = document.createElement('h3');
    pp.appendChild(document.createTextNode('Thêm cây gia phả'));
    form.appendChild(pp);
    pp.setAttribute('style',' text-align: center;');
    form.innerHTML += '</br>';
    
    var tenMoi = document.createElement('input');
    tenMoi.setAttribute('type', 'text');
    tenMoi.placeholder = ' tên...';
    tenMoi.name = 'tenCayMoi';
    form.appendChild(tenMoi);
    tenMoi.setAttribute('style', 'background: #fafafa;border: 1px solid #eeeeee;margin-top: 10px; margin-left: 5px;\n\
    width: 100%; height: 25px;');
    form.innerHTML += '</br>';
    
    var doiMK = document.createElement('input');
    doiMK.setAttribute('type', 'submit');
    doiMK.value = 'Thêm';
    doiMK.name = 'them_cay';
    form.appendChild(doiMK);
    doiMK.setAttribute('style', 'background: #69d2e7;border: 1px solid #ddd;color: #ffffff;margin-top: 20px; margin-left: 5px;width: 100%; height: 30px;text-transform: uppercase;');
    form.innerHTML += '</br>';
    
    var Huydi = document.createElement('input');
    Huydi.setAttribute('type', 'button');
    Huydi.value = 'Hủy';
    Huydi.id = 'Cancel';
    form.appendChild(Huydi);
    Huydi.setAttribute('style', 'background: #69d2e7;border: 1px solid #ddd;color: #ffffff;margin-top: 20px; margin-left: 25%;width: 50%; height: 30px;text-transform: uppercase;');
    form.innerHTML += '</br></br>';
    
    DoiTT.appendChild(form);
}

$(document).on('click', "#ThemCay", function () {
    FormTaoCay();
});

function ListBaiCung(){
  DoiTT.innerHTML = "";
  DoiTT.innerHTML += "<h3>Cúng bái</h3>";  
  
  var Huydi = document.createElement('input');
    Huydi.setAttribute('type', 'button');
    Huydi.value = 'Đóng';
    Huydi.id = 'Cancel';
    DoiTT.appendChild(Huydi);
    Huydi.setAttribute('style', 'background: #69d2e7;border: 1px solid #ddd;color: #ffffff\n\
;width: 60px; height: 30px;text-transform: uppercase;float:right;');
    
  DoiTT.innerHTML +='<iframe src="./Bai_cung1.html" width = "800" height="800"/>';
}

$(document).on('click', "#BaiCung", function () {
    ListBaiCung();
});

$('#dangxuat').on('click', function() {
    $.ajax({
        url:"home.php",
        method:"POST",
        data:{logout:1},
     //   dataType:"JSON",
        success : function (result){
           alert(result); 
           window.location="login.php";
        }
    });
});

$('#qluser').on('click', function() {
    
    $.ajax({
        url:"home.php",
        method:"POST",
        data:{qluser:1},
        dataType:"JSON",
        success : function (result){
          //  console.log(result);
            DanhsachUser(result);
        }
    });
});

function DanhsachUser(danhsach){
    DoiTT.innerHTML = '';
    DoiTT.innerHTML += "<h3>Danh sách user</h3>";
    
    var Huydi = document.createElement('input');
    Huydi.setAttribute('type', 'button');
    Huydi.value = 'Đóng';
    Huydi.id = 'Cancel';
    DoiTT.appendChild(Huydi);
    Huydi.setAttribute('style', 'background: #69d2e7;border: 1px solid #ddd;color: #ffffff\n\
;width: 60px; height: 30px;text-transform: uppercase;float:right;');
    
    for (var i = 0; i < danhsach.length; i++) {
        var divv = document.createElement('div');
        divv.name = danhsach[i][0];
        divv.setAttribute('style', 'margin-top: 20px; width: 500px ;border: 1px solid #ddd; border-radius: 8px 8px 8px 8px;background: #ffffff;');
        
        var pp = document.createElement('h3');
        pp.appendChild(document.createTextNode(danhsach[i][1]));
        divv.appendChild(pp);
        pp.setAttribute('style', 'margin-top: 10px; margin-left: 15px;');
        
        if(danhsach[i][3] == 1){
            var pp2 = document.createElement('label');
            pp2.appendChild(document.createTextNode("admin"));
            divv.appendChild(pp2);
            pp2.setAttribute('style', 'margin-top: 10px; margin-left: 15px;');
            divv.innerHTML+='</br>';
        } else{
            var pp2 = document.createElement('label');
            pp2.appendChild(document.createTextNode("user"));
            divv.appendChild(pp2);
            pp2.setAttribute('style', 'margin-top: 10px; margin-left: 15px;');
            divv.innerHTML+='</br>';
            
            var butn = document.createElement('input');
            butn.setAttribute('type', 'button');
            butn.value = 'Cấp quyền admin';
            butn.name = danhsach[i][0];
            butn.id = 'ChoAdmin';
            divv.appendChild(butn);
            butn.setAttribute('style', 'background: #69d2e7;border: 1px solid #ddd;color: #ffffff;\n\
margin-top: 5px; margin-left: 15px; margin-bottom: 10px;width: 40%; height: 30px;text-transform: uppercase;');
            
            var butn3 = document.createElement('input');
        butn3.setAttribute('type', 'button');
        butn3.value = 'Xoá';
        butn3.name = danhsach[i][0];
        butn3.id = 'XoaTK';
        divv.appendChild(butn3);
        butn3.setAttribute('style', 'background: #69d2e7;border: 1px solid #ddd;color: #ffffff;\n\
margin-top: 5px; margin-left: 15px; margin-bottom: 10px;width: 10%; height: 30px;text-transform: uppercase;');
        }
        
        DoiTT.appendChild(divv);
    }
}

$(document).on('click', "#XoaTK", function () {
    console.log($(this).attr('name'));
    $.ajax({
        url:"home.php",
        method:"POST",
        data:{userXoa: $(this).attr('name')},
        dataType:"text",
        success : function (result){
            $('#qluser').click();
            alert(result);
        }
    });

});

$(document).on('click', "#ChoAdmin", function () {
    console.log($(this).attr('name'));
    $.ajax({
        url:"home.php",
        method:"POST",
        data:{userAdmin: $(this).attr('name')},
        dataType:"text",
        success : function (result){
            $('#qluser').click();
            alert(result);
        }
    });

});

