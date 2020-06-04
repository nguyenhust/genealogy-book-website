<?php

function ThemCay(){
    if(!empty($_POST['tenCayMoi'])){
    $NewCay   = $_POST['tenCayMoi'];
    $curr_id = $_SESSION['user-Id'];
    
    $conn = mysqli_connect('localhost', 'root', '', 'gia_pha') or die ('Loi ket noi');
    mysqli_set_charset($conn, "utf8");
    
    $queryy = "Select * from user_family where user_id = '$curr_id' and family = '$NewCay'";
    $result = mysqli_query($conn, $queryy);
    
    if (mysqli_num_rows($result) > 0)
    {
        // neu loi
        echo '<script language="javascript">alert("Ten bi trung, hay dung ten khac"); '
         . 'window.location="home.php";</script>';
        die ();
    }
    else {
        // neu ko loi
        $sql = "INSERT INTO user_family (id, user_id, family, family_data) VALUES "
                . "('null', '$curr_id', '$NewCay', '[]')";
          
        if (mysqli_query($conn, $sql)){
            echo '<script language="javascript">alert("Them cay thanh cong"); '
            . 'window.location="home.php";</script>';
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

function GetListCay(){
    $conn = mysqli_connect('localhost', 'root', '', 'gia_pha') or die ('Loi ket noi');
    mysqli_set_charset($conn, "utf8");
    
    $curr_id = $_SESSION['user-Id'];
    
    $queryy = "Select * from user_family where user_id = '$curr_id'";
    $result = mysqli_query($conn, $queryy);
    
    $data = array();
    if (mysqli_num_rows($result) > 0)
    {
       while ($row = mysqli_fetch_array($result)) {
           $data[] = $row;
       }
    }
    echo json_encode($data);
}

function DoiTenCay(){
    if(!empty($_POST['tenCayMoi'])){
    $TenCayMoi = $_POST['tenCayMoi'];
    $TenCayCu = $_POST['tenCayCu'];
    $curr_id = $_SESSION['user-Id'];
    
    $conn = mysqli_connect('localhost', 'root', '', 'gia_pha') or die ('Loi ket noi');
    mysqli_set_charset($conn, "utf8");
    
    $queryy = "Select * from user_family where user_id = '$curr_id' and family = '$TenCayMoi'";
    $result = mysqli_query($conn, $queryy);
    
    $row = mysqli_num_rows($result);
    if ($row > 0)
    {
        // neu loi
        echo 'Thong tin bi trung, dung ten khac';
    } else {
        // neu ko loi
        $sql = "Update user_family set family = '$TenCayMoi' where user_id = '$curr_id' and family = '$TenCayCu'";
          
        if (mysqli_query($conn, $sql)){
            echo 'Thay doi thanh cong';
        }
        else {
            echo mysqli_query($conn, $sql2);
        }
    }
    
    } else{
        // neu trong
        echo 'Khong duoc de trong';   
    }
}

function XoaCay(){
    $TenCay = $_POST['cayXoa'];
    $curr_id = $_SESSION['user-Id'];
    
    $conn = mysqli_connect('localhost', 'root', '', 'gia_pha') or die ('Loi ket noi');
    mysqli_set_charset($conn, "utf8");
    
    $queryy = "Delete from user_family where user_id = '$curr_id' and family = '$TenCay'";
          
    if (mysqli_query($conn, $queryy)){
        echo 'Xoa thanh cong';
    } else {
        echo 'Co loi trong qua trinh xu ly';
    }
    
}

function MoCay(){
    $_SESSION['Open_Cay'] = $_POST['OpenCay'];
    echo 'OK';
}
?>

