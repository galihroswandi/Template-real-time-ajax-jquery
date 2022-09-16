$(document).ready(function(){

    bacaData();

    $('.btn-tambah').click(function(){
        tambahData();
    })

    $('.btn-ubah').click(function(){
        ubahData();
    })

    $('.btn-batal').click(function(){
        bacaData();
        resetForm();
    })

    function bacaData(){
        $('.targetData').html('');
        $('.btn-tambah').show();
        $('.btn-ubah').hide();
        $('.btn-batal').hide();

        $.ajax({
            type : "GET",
            url : "php/getData.php",
            dataType: "JSON",
            success : function(response){
                
                let data = '';
                for(let i = 0; i < response.length; i++){
                    data += `
                        <tr>
                            <td>${response[i].id_siswa}</td>
                            <td>${response[i].siswa_nama}</td>
                            <td>${response[i].siswa_kelas}</td>
                            <td>${response[i].siswa_alamat}</td>
                            <td>
                            <button class='btn-edit' id='${response[i].id_siswa}'>Ubah</button>
                            <button class='btn-hapus' id='${response[i].id_siswa}'>Hapus</button>
                            </td>
                        </tr>
                    `;
                }

                $('.targetData').append(data);

                // Ketika Tombol button edit di klik
                $('.btn-edit').click(function(){
                   getSingleData($(this).attr('id'));
                })

                // ketika tombol hapus di klik
                $('.btn-hapus').click(function(){
                    if( confirm('Apakah Yakin Ingin Menghapus ?') ){
                        hapusData($(this).attr('id'));
                    }
                })
            }
        })
    }

    function tambahData(){
        let siswa_nama = $('#nama').val();
        let siswa_kelas = $('#kelas').val();
        let siswa_alamat = $('#alamat').val();

        $.ajax({
            type : "POST",
            url : "php/addData.php",
            data : `siswa_nama=${siswa_nama}&siswa_kelas=${siswa_kelas}&siswa_alamat=${siswa_alamat}`,
            dataType : "JSON",
            success : function(response){
                if( response.status === '1' ){
                    alert(response.message);
                    bacaData();
                    resetForm();
                }else{
                    alert(response.message);
                    bacaData();
                    resetForm();
                }
            }
        })
    }

    function getSingleData(x){
        $.ajax({
            type : "POST",
            url : "php/getSingleData.php",
            data : `id=${x}`,
            dataType : "JSON",
            success : function(response){

                $('#id_siswa').val(response.id_siswa);
                $('#nama').val(response.siswa_nama);
                $('#kelas').val(response.siswa_kelas);
                $('#alamat').val(response.siswa_alamat);

                $('.btn-tambah').hide();
                $('.btn-ubah').show();
                $('.btn-batal').show();
            }
        })
    }

    function ubahData(){
        let id = $('#id_siswa').val();
        let siswa_nama = $('#nama').val();
        let siswa_kelas = $('#kelas').val();
        let siswa_alamat = $('#alamat').val();

        $.ajax({
            type : "POST",
            url : "php/editeData.php",
            data : `id_siswa=${id}&siswa_nama=${siswa_nama}&siswa_kelas=${siswa_kelas}&siswa_alamat=${siswa_alamat}`,
            dataType : "JSON",
            success : function(response){
                if( response.status === '1' ){
                    alert(response.message);
                    bacaData();
                    resetForm();
                }else{
                    alert(response.message);
                    bacaData();
                    resetForm();
                }
            }
        })
    }

    function hapusData(id){
        $.ajax({
            type : "POST",
            url : "php/delete.php",
            data : `id=${id}`,
            dataType : "JSON",
            success : function(response){
                if( response.status === '1' ){
                    alert(response.message);
                    bacaData();
                }else{
                    alert(response.message);
                    bacaData();
                }
            }
        });
    }
    function resetForm(){
        $('#id_siswa').val('');
        $('#nama').val('');
        $('#kelas').val('');
        $('#alamat').val('');
    }
})