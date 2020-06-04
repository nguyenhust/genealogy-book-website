<?php
function GetCayData(){
  
    $TenCay = $_SESSION['Open_Cay'];
    $curr_id = $_SESSION['user-Id'];
    
    $conn = mysqli_connect('localhost', 'root', '', 'gia_pha') or die ('Loi ket noi');
    mysqli_set_charset($conn, "utf8");
    
    $sql = "Select family_data from user_family where user_id = '$curr_id' and family = '$TenCay'";
    $result = mysqli_query($conn, $sql);
    
    $row = mysqli_fetch_array($result);
         
    echo $row[0];
}

function LuuCay(){
  
    $TenCay = $_SESSION['Open_Cay'];
    $curr_id = $_SESSION['user-Id'];
    $cay_data = $_POST['tree_data'];
    
    $conn = mysqli_connect('localhost', 'root', '', 'gia_pha') or die ('Loi ket noi');
    mysqli_set_charset($conn, "utf8");
    
    $cay_data = $conn -> real_escape_string($cay_data);
    
    $sql = "Update user_family set family_data = '$cay_data' where user_id = '$curr_id' and family = '$TenCay'";
          
    if (mysqli_query($conn, $sql)){
        echo 'Luu thanh cong';
    } else {
        echo 'Co loi';
    }
}
?>