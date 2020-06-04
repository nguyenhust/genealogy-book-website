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
    float: left;
    border: solid;
    border-width: 0px;
    border-radius: 8px 8px 8px 8px;
}
.Chitiet{
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
.Chitiet h3{
    margin: 20px;
}
.Luu_cay{
    margin: 0px;
    width: 100%;
    height: 80px;
    text-align: center;
    background-color: #33ffff;
    font-family: 'Segoe UI', sans-serif;
    border: solid;
    border-width: 1px;
    border-radius: 0px 0px 8px 8px;
}
.Luu_cay h3{
    margin: 20px;
}

.nguoi{
    margin: 0px;
    width: 100%;
    max-height: 320px;
    background-color: #cccccc;
    font-family: 'Segoe UI', sans-serif;
    border: solid;
    border-width: 1px;
    border-radius: 8px 8px 8px 8px;
    
    height: 400px;
}

.right{
    margin-top: 20px;
    margin-left: 20px;
    width: 70%;
    height: 90%;
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
#Bigchart {
    margin-top: 20px;
    margin-left: 30px;
    max-width: 100%;
    max-height: 85%;
    overflow: scroll;
}
    </style>
    </head>
    <body>
        
        <div style="top:0; width: 100%; height: 50px;">
                <h1>Gia phả online</h1>
            </div>
        <div class="wrap">
            <div class="left">
                <div class="Chitiet" id="Chitiet">
                    <h3>Chi tiết</h3>
                </div>
                <div class="Luu_cay" id="Luu_cay">
                    <h3>Lưu</h3>
                </div>
                <div class="nguoi" id="nguoi">
                    
                </div>
               
            </div>
            <div class="right" id="right">
                <div class="TaiKhoan">
                    <h3>
               <?php if(!empty($_SESSION['username'])){
                echo 'Family tree: '.$_SESSION['Open_Cay'];}?>
                    </h3>
                    <input id="zoomIn" value="ZOOM IN" type="button" style="float: right; margin-right: 20px;">
                    <input id="zoomOut" value="ZOOM OUT" type="button" style="float: right; margin-right: 20px;">
                </div>
                
                <div id="Bigchart">
                <div id="chart">
                    
                </div>
                </div>
            </div>
            
        </div>
        
        <script src="./PluginJS/jquery.js"></script>
        <script src="Family.js"></script>
    </body>
</html>
