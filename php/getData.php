<?php
include 'koneksi.php';

$sql = mysqli_query($conn, "SELECT * FROM siswa");
$result = [];
while($fetch = mysqli_fetch_array($sql)){
    $result[] = $fetch;
}
echo json_encode($result);

?>