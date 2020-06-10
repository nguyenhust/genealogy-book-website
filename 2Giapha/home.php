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
    <link href="PluginCSS/bootstrap.min.css" rel="stylesheet" />
    <link href="PluginCSS/material-design-iconic-font.min.css" rel="stylesheet" />
    
    <style type="text/css">

body{
    overflow-x: hidden;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
}

.wrap {
  padding-left: 250px;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

.left{
     z-index: 1000;
     position: fixed;
     left: 250px;    
     width: 250px;
  height: 100%;
  padding-top: 0;
  margin-left: -250px;
  overflow-y: auto;
  background: #37474F;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

.left header{
    background-color: #263238;
  font-size: 20px;
  line-height: 52px;
  text-align: center;
}

.left header a{
    color: #fff;
  display: block;
  text-decoration: none;
}
.left header a:hover {
  color: #fff;
}

.left .nav{
  
}

.left .nav a{
  background: none;
  border-bottom: 1px solid #455A64;
  color: #CFD8DC;
  font-size: 14px;
  padding: 16px 24px;
}

.left .nav a:hover{
  background: none;
  color: #ECEFF1;
}

.left .nav a i{
  margin-right: 16px;
}

.left .nav li{
    cursor: pointer;
}

.right {
  width: 100%;
  position: relative;
  margin-right: 0;
}

#DoiTT {
    margin-top: 20px;
    margin-left: 20px;
    max-height: 85%;
    overflow-y: scroll;
}
    </style>
    </head>
    <body>
     <!--   <div style="top:0; width: 100%; height: 50px;">
            <p style="font-size: 30px;">Gia phả online</p>
        </div> -->
        <div class="wrap">
            <div class="left">
                <header>
                    <a>Trang chủ</a>
                </header>
                <ul class="nav">
                    <li class="thongtin" id="doiMK">
                        <a>
                            <i></i> Thay đổi thông tin tài khoản
                        </a>
                    </li>
                    <li class="caygiapha" id="danhsachcay">
                        <a>
                            <i></i> Danh sách cây gia phả
                        </a>
                    </li>
                    <li class="themcaygiapha" id="ThemCay">
                        <a>
                            <i></i> Tạo cây gia phả
                        </a>
                    </li>
                    <li class="themcaygiapha" id="BaiCung">
                        <a>
                            <i></i> Bài cúng
                        </a>
                    </li>
                    <li class="dangxuat" id="dangxuat">
                        <a>
                            <i></i> Đăng xuất
                        </a>
                    </li>
                </ul>    
            </div>
            <div class="right" id="right">
                <nav class="navbar navbar-default">
                    <div class="container-fluid">
                        <ul class="nav navbar-nav navbar-right">
                            <li><a>
                                <?php 
                                if(!empty($_SESSION['username'])){
                                echo $_SESSION['username'];
                                }
                                ?>
                                </a></li>
                        </ul>
                    </div>
                </nav>
                <div id="DoiTT">
                    
                </div>
            </div>
            
        </div>
      
    <!--    <script src="PluginCSS/bootstrap.min.js"></script> -->
        <script src="PluginJS/jquery.js"></script>
        <script src="homee.js"></script>
    </body>
</html>