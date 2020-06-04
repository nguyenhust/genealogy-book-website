<?php
function XulyDangki(){
    if(!empty($_POST['tenDK']) && !empty($_POST['passDK'])){
    $username   = $_POST['tenDK'];
    $password   = $_POST['passDK'];
    
    $conn = mysqli_connect('localhost', 'root', '', 'gia_pha') or die ('Loi ket noi');
    mysqli_set_charset($conn, "utf8");
    
    $queryy = "Select * from user where name = '$username'";
    $result = mysqli_query($conn, $queryy);

    if (mysqli_num_rows($result) > 0)
    {
        // neu loi
        echo '<script language="javascript">alert("Thong tin dang nhap bi trung"); '
         . 'window.location="register.php";</script>';
        die ();
    }
    else {
        // neu ko loi
        $sql = "INSERT INTO user (id, name, password, level) VALUES "
                . "('null', '$username', '$password', '0')";
          
        if (mysqli_query($conn, $sql)){
            session_destroy();
            echo '<script language="javascript">alert("Dang ky thanh cong"); '
            . 'window.location="login.php";</script>';
        }
        else {
            echo '<script language="javascript">alert("Co loi trong qua trinh xu ly"); '
            . 'window.location="register.php";</script>';
        }
    }
    
    } else{
        // neu trong
        echo '<script language="javascript">alert("Khong duoc de trong"); '
         . 'window.location="register.php";</script>';
        die ();    
    }
}

function XulyDangnhap(){
    if(!empty($_POST['tenDN']) && !empty($_POST['passDN'])){
    $username   = $_POST['tenDN'];
    $password   = $_POST['passDN'];
    
    $conn = mysqli_connect('localhost', 'root', '', 'gia_pha') or die ('Loi ket noi');
    mysqli_set_charset($conn, "utf8");
    
    $queryy = "Select * from user where name = '$username' and password = '$password'";
    $result = mysqli_query($conn, $queryy);

    if (mysqli_num_rows($result) > 0)
    {
        // neu ko loi
        $row = mysqli_fetch_array($result);
        
       $_SESSION['username'] = $row['name'];
       $_SESSION['user-Id'] = $row['id'];
        echo '<script language="javascript">alert("Dang nhap thanh cong"); '
         . 'window.location="home.php";</script>';
    }
    else {
        // neu loi
        echo '<script language="javascript">alert("Sai ten hoac mat khau"); '
         . 'window.location="login.php";</script>';
        die ();
    }
    
    } else{
        // neu trong
        echo '<script language="javascript">alert("Khong duoc de trong"); '
         . 'window.location="login.php";</script>';
        die ();    
    }
}

function XulyDoiMatKhau(){
    if(!empty($_POST['tenMoi']) && !empty($_POST['mkMoi'])){
    $username   = $_POST['tenMoi'];
    $password   = $_POST['mkMoi'];
    
    $conn = mysqli_connect('localhost', 'root', '', 'gia_pha') or die ('Loi ket noi');
    mysqli_set_charset($conn, "utf8");
    
    $queryy = "Select * from user where name = '$username'";
    $result = mysqli_query($conn, $queryy);

    $rowh = 0;
    $curr_ten = $_SESSION['username'];
    if($username == $curr_ten){
        $rowh = 1;
    }
    
    if (mysqli_num_rows($result) > $rowh)
    {
        // neu loi
        echo '<script language="javascript">alert("Thong tin bi trung, doi lai"); '
         . 'window.location="home.php";</script>';
        die ();
    }
    else {
        // neu ko loi
        $sql = "Update user set name = '$username', password = '$password' where name = '$curr_ten'";
          
        if (mysqli_query($conn, $sql)){
            echo '<script language="javascript">alert("Thay doi thanh cong"); '
            . 'window.location="login.php";</script>';
        }
        else {
            echo '<script language="javascript">alert("Co loi trong qua trinh xu ly"); '
            . 'window.location="home.php";</script>';
        }
    }
    
    } else{
        // neu trong
        echo '<script language="javascript">alert("Khong duoc de trong"); '
         . 'window.location="home.php";</script>';
        die ();    
    }
}
?>