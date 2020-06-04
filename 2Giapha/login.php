<?php
session_start();
require 'xuly.php';
if(!empty($_SESSION['username'])){
    echo '<script language="javascript">alert("Welcome to Gia pha online"); '
         . 'window.location="home.php";</script>';
    die ();
}

if(isset($_POST['do-login'])){
    XulyDangnhap();
}
?>
<html>
    <head>
    <title>Login to Gia pha online</title>
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
    font-family: 'Segoe UI', sans-serif;
    font-size: 1rem;
    line-height: 1.6;
    height: 100%;
    overflow: hidden;
}
.wrap {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #006666;
}
.login-form{
    width: 350px;
    margin: 0 auto;
    border: 1px solid #ddd;
    padding: 2rem;
    background: #ffffff;
}
.form-input{
    background: #fafafa;
    border: 1px solid #eeeeee;
    padding: 12px;
    width: 100%;
}
.form-group{
    margin-bottom: 1rem;
}
.form-button{
    background: #69d2e7;
    border: 1px solid #ddd;
    color: #ffffff;
    padding: 10px;
    width: 100%;
    text-transform: uppercase;
}
.form-button:hover{
    background: #69c8e7;
}
.form-header{
    text-align: center;
    margin-bottom : 2rem;
}
.form-footer{
    text-align: center;
}
    </style>
    </head>
    <body>
        <div style="top:0; width: 100%; height: 50px;">
                <h1>Gia pha online</h1>
            </div>
        <div class="wrap">
        <form class="login-form" action="login.php" method="POST">
            <div class="form-header">
                <h3>Dang nhap</h3>
            </div>
            <!--Email Input-->
            <div class="form-group">
                <input type="text" name="tenDN" class="form-input" placeholder="ten dang nhap...">
            </div>
            <!--Password Input-->
            <div class="form-group">
                <input type="password" name="passDN" class="form-input" placeholder="mat khau...">
            </div>
            <!--Login Button-->
            <div class="form-group">
                <input class="form-button" name="do-login" type="submit" value="Dang nhap">
            </div>
            <div class="form-footer">
            Neu chua co tai khoan hay <a href="/2Giapha/register.php">dang ki</a>
            </div>
        </form>
        </div>
       
    </body>
</html>

