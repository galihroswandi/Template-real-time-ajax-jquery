<?php
include 'koneksi.php';

if( $_POST ){
    $id = $_POST['id'];
    $sql = mysqli_query($conn, "SELECT * FROM siswa WHERE id_siswa = '$id'");
    $result = mysqli_fetch_array($sql);

    echo json_encode($result);
}