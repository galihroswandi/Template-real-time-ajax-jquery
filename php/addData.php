<?php
include 'koneksi.php';

if( $_POST ){
    $nama_siswa = $_POST['siswa_nama'];
    $siswa_kelas = $_POST['siswa_kelas'];
    $siswa_alamat = $_POST['siswa_alamat'];
    
    $query = "INSERT INTO siswa values ('', '$nama_siswa', '$siswa_kelas', '$siswa_alamat')";
    $sql = mysqli_query($conn, $query);
    
    if( $sql ){
        $result['status'] = '1';
        $result['message'] = 'Data Berhasil Ditambahkan !';
    }else{
        $result['status'] = '0';
        $result['message'] = 'Data Gagal Ditambahkan';
    }
    
    echo json_encode($result);
}