<?php
session_start();

if(empty($_SESSION['username'])){
    echo '<script language="javascript">alert("Hay dang nhap"); '
         . 'window.location="login.php";</script>';
    die ();
}

require 'xuly.php';
if(isset($_POST['do-changeTenMK'])){
    XulyDoiMatKhau();
}

require 'xulyCay.php';
if(isset($_POST['them_cay'])){
    ThemCay();
    exit();
}

if(!empty($_POST['listcay'])){
    GetListCay();
    exit();
}

if(!empty($_POST['tenCayMoi'])){
    DoiTenCay();
    exit();
}

if(!empty($_POST['cayXoa'])){
    XoaCay();
    exit();
}

if(!empty($_POST['OpenCay'])){
    MoCay();
    exit();
}

if(!empty($_POST['logout'])){
    session_destroy();
    echo 'Dang xuat thanh cong';
    exit();
 //   echo '<script language="javascript">alert("Dang xuat thanh cong"); '
 //        . 'window.location="login.php";</script>';
 //   die ();
}
?>

<html>
     <head>
    <title>Gia pha online</title>
    <style type="text/css">
        *{
    margin:0;
    padding: 0;
    box-sizing: border-box;
}
html{
    height: 100%;
}
body{
    font-family: 'Segoe UI', sans-serif;;
    line-height: 1.6;
    height: 100%;
}
.wrap {
    width: 100%;
    height: 90%;
    background-color: #006666;
}
.left{
    margin-top: 20px;
    margin-left: 20px;
    width: 20%;
    font-size: 15px;
    background-color: #fafafa;
    float: left;
    border: solid;
    border-width: 0px;
    border-radius: 8px 8px 8px 8px;
}
.thongtin{
    margin: 0px;
    width: 100%;
    height: 80px;
    text-align: center;
    background-color: #33ffff;
    font-family: 'Segoe UI', sans-serif;
    border: solid;
    border-width: 1px;
    border-radius: 8px 8px 0px 0px;
}
.thongtin h3{
    margin: 20px;
}

.caygiapha{
    padding: 0px;
    width: 100%;
    height: 80px;
    text-align: center;
    background-color: #33ffff;
    font-family: 'Segoe UI', sans-serif;
    border: solid;
    border-width: 1px;
    border-radius: 0px 0px 0px 0px;
}
.caygiapha h3{
    margin: 20px;
}

.themcaygiapha{
    padding: 0px;
    width: 100%;
    height: 80px;
    text-align: center;
    background-color: #33ffff;
    font-family: 'Segoe UI', sans-serif;
    border: solid;
    border-width: 1px;
    border-radius: 0px 0px 0px 0px;
}
.themcaygiapha h3{
    margin: 20px;
}

.dangxuat{
    padding: 0px;
    width: 100%;
    height: 80px;
    text-align: center;
    background-color: #33ffff;
    font-family: 'Segoe UI', sans-serif;
    border: solid;
    border-width: 1px;
    border-radius: 0px 0px 8px 8px;
}
.dangxuat h3{
    margin: 20px;
}

.right{
    margin-top: 20px;
    margin-left: 20px;
    width: 70%;
    height: 80%;
    background-color: #fafafa;
    float: left;
    border: solid;
    border-width: 1px;
    border-radius: 8px 8px 8px 8px;
}

.right .TaiKhoan{
    margin-top: 20px;
    margin-left: 20px; 
    font-family: 'Segoe UI', sans-serif;
}
#DoiTT {
    margin-top: 20px;
    margin-left: 10px;
    max-height: 80%;
    overflow-y: scroll;
}
    </style>
    </head>
    <body>
        <div style="top:0; width: 100%; height: 50px;">
                <h1>Gia pha online</h1>
            </div>
        <div class="wrap">
            <div class="left">
                <div class="thongtin" id="doiMK">
                    <h3>Thay doi thong tin tai khoan</h3>
                </div>
                <div class="caygiapha" id="danhsachcay">
                    <h3>Danh sach cay gia pha</h3>
                </div>
                <div class="themcaygiapha" id="ThemCay">
                    <h3>Tao cay gia pha</h3>
                </div>
                <div class="dangxuat" id="dangxuat">
                    <h3>Dang xuat</h3>
                </div>
            </div>
            <div class="right" id="right">
                <div class="TaiKhoan">
                    <h3>
               <?php if(!empty($_SESSION['username'])){
                echo 'Welcome to gia pha online '.$_SESSION['username'];}?>
                    </h3>
                </div>
                
                <div id="DoiTT">
                    
                </div>
            </div>
            
        </div>
      
        <script src="./PluginJS/jquery.js"></script>
        <script src="homee.js"></script>
    </body>
</html>