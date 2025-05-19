// Ambil elemen input password dan ikon berdasarkan ID //
let passwordInput = document.getElementById('password'); // memberikan id ke elemen input kata sandi // 
let icon = document.getElementById('input-icon'); // mengambil elemen html berdasarkan atribut id //

// sumber: https://youtu.be/Tir5zw4NEmM?si=_c6t7au_gAZGUJPq

function togglePassword() { // Ambil elemen input berdasarkan ID-nya //
  // Jika tipe input adalah 'password', ubah ke 'text' agar terlihat
  if (passwordInput.type === 'password') {  
    passwordInput.type = 'text';  // menampilkan password//
    icon.classList.add("ri-eye-line");  // tambahkan ikon mata terbuka //
    icon.classList.remove("ri-eye-off-line"); // hapus ikon mata tertutup//
  } else {
    passwordInput.type = 'password'; // menyembunyikan password
    icon.classList.add("ri-eye-off-line"); // tambahkan ikon mata tertutup
    icon.classList.remove("ri-eye-line");  // hapus ikon mata tertutup //
  } 
} 

icon.addEventListener('click', togglePassword); // agar ikon mata terbuka dan tertutup dapat berfungsi pada saat ditekan //


Swal.fire({ //membuat popup//
  title: " Jeanette Jeslyn Huang 11/20 ", // menampilkan judul //
  text: " Semper fidelis, selalu setia ", // menampilkan text //
  imageUrl: " jeslyn.jpg ", // menampilkan gambar //
  imageWidth: 500, // melebarkan gambar //
  imageHeight: 300, // memperpanjang gambar //
  confirmButtonText: "Tutup", // menampilkan confirm button text dengan tombol tertutup //
  showCloseButton: true,  // memberikan simbol x untuk menutup popup saat ditekan //
});
