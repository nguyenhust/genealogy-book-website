<?php
session_start();
if(empty($_SESSION['username'])){
    echo '<script language="javascript">alert("Hay dang nhap"); '
         . 'window.location="login.php";</script>';
    die ();
}

require 'xulyMan.php';
if(isset($_POST['get_tree'])){
    GetCayData();
    exit();
}

if(!empty($_POST['tree_data'])){
    LuuCay();
    exit();
}

?>
<html>
    <title>Gia phả online</title>
    <link href="PluginCSS/bootstrap.min.css" rel="stylesheet" />
    <link href="PluginCSS/material-design-iconic-font.min.css" rel="stylesheet" />
    
    <style type="text/css">
        *{
    margin:0;
    padding: 0;
    box-sizing: border-box;
}
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

.nguoi{
    margin: 0px;
    width: 100%;
    max-height: 500px;
    background-color: #cccccc;
    font-family: 'Segoe UI', sans-serif;
}

.right {
  width: 100%;
  position: relative;
  margin-right: 0;
}

#Bigchart {
    margin-top: 20px;
    margin-left: 30px;
    max-width: 100%;
    max-height: 75%;
    overflow: scroll;
}
    </style>
    </head>
    
        
    <!--    <div style="top:0; width: 100%; height: 50px;">
                <h1>Gia phả online</h1>
            </div>-->
        <div class="wrap">
            <div class="left">
                <header>
                    <a><?php if(!empty($_SESSION['username'])){
                echo $_SESSION['Open_Cay'];}?>
                    </a>
                </header>
                <ul class="nav">
                    <li class="Chitiet" id="Chitiet">
                        <a>
                            <i></i> Chi tiết
                        </a>
                    </li>
                    <li class="Luu_cay" id="Luu_cay">
                        <a>
                            <i></i> Lưu
                        </a>
                    </li>
                    <li id="veHome">
                        <a>
                            <i></i> Quay lại
                        </a>
                    </li>
                <div class="nguoi" id="nguoi"></div>
               
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
                <div class="TaiKhoan" id="TaiKh">
                    <h3 id="familyHead" style="margin-left:20px;">
                    <?php if(!empty($_SESSION['username'])){
                echo $_SESSION['Open_Cay'];}?>
                    </h3>
                    <input id="zoomIn" value="ZOOM IN" type="button" style="background: #69d2e7;border: 1px solid #ddd
                           ;color: #ffffff;width: 120px; height: 30px; margin-right: 20px;text-transform: uppercase;float:right;">
                    <input id="zoomOut" value="ZOOM OUT" type="button" style="background: #69d2e7;border: 1px solid #ddd
                           ;color: #ffffff;width: 120px; height: 30px; margin-right: 20px;text-transform: uppercase;float:right;">
                <!--    <input id="ConvertImage" value="Convert to image" type="button" style="background: #69d2e7;border: 1px solid #ddd
                           ;color: #ffffff;width: 180px; height: 30px; margin-right: 20px;text-transform: uppercase;float:right;">
                    
                    <a id="TaiVe" style="margin-left: 20px;" href="#">Save image</a> -->
                </div></br>
                
                <div id="Bigchart">
                <div id="chart">
                    
                </div>
                </div>
            </div>
            
        </div>
        <script src="./PluginJS/html2canvas.js"></script>
        <script src="./PluginJS/canvas2image.js"></script>
        <script src="./PluginJS/jquery.js"></script>
        <script src="Family.js"></script>
    
</html>
