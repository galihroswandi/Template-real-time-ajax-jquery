<?php
include 'koneksi.php';

if( $_POST ){
    $id = $_POST['id_siswa'];
    $nama_siswa = $_POST['siswa_nama'];
    $siswa_kelas = $_POST['siswa_kelas'];
    $siswa_alamat = $_POST['siswa_alamat'];
    
    $sql = mysqli_query($conn, "UPDATE siswa SET 
        siswa_nama = '$nama_siswa',
        siswa_kelas = '$siswa_kelas',
        siswa_alamat = '$siswa_alamat'
        WHERE id_siswa = '$id'
        ");
    
    if( $sql ){
        $result['status'] = '1';
        $result['message'] = 'Data Berhasil Diubah !';
    }else{
        $result['status'] = '0';
        $result['message'] = 'Data Gagal Diubah !';
    }
    
    echo json_encode($result);
}
