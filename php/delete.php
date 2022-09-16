<?php
include 'koneksi.php';

if( $_POST ){
    $id = $_POST['id'];

    $sql = mysqli_query($conn, "DELETE FROM siswa WHERE id_siswa = '$id'");
    if( $sql ){
        $result['status'] = '1';
        $result['message'] = 'Data Berhasil Dihapus !';
    }else{
        $result['status'] = '0';
        $result['message'] = 'Data Gagal Dihapus !';
    }

    echo json_encode($result);
}