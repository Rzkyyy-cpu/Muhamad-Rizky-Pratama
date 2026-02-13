// Mobile Menu Togglee
// Mendapatkan elemen-elemen yang diperlukan dari DOM
const mobileMenuToggle = document.getElementById('mobileMenuToggle'); // Tombol untuk membuka/menutup menu mobile
const navMenu = document.getElementById('navMenu'); // Elemen menu navigasi
const navLinks = document.querySelectorAll('.nav-link'); // Semua link di dalam menu navigasi

// Event listener untuk tombol menu mobile
mobileMenuToggle.addEventListener('click', () => {
    // Mengubah status aktif pada tombol dan menu
    mobileMenuToggle.classList.toggle('active'); // Menambah/menghapus kelas 'active' pada tombol
    navMenu.classList.toggle('active'); // Menambah/menghapus kelas 'active' pada menu
});

// Event listener untuk setiap link di menu navigasi
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Menutup menu mobile saat salah satu link diklik
        mobileMenuToggle.classList.remove('active'); // Menghapus kelas 'active' dari tombol
        navMenu.classList.remove('active'); // Menghapus kelas 'active' dari menu
    });
});

// Event listener untuk menutup menu saat mengklik di luar area menu
document.addEventListener('click', (e) => {
    // Memeriksa apakah klik dilakukan di luar area menu dan tombol
    if (!navMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
        // Jika ya, maka tutup menu
        mobileMenuToggle.classList.remove('active'); // Menghapus kelas 'active' dari tombol
        navMenu.classList.remove('active'); // Menghapus kelas 'active' dari menu
    }
});

// Scroll to Top Button
// Mendapatkan elemen tombol "scroll to top"
const scrollToTopBtn = document.getElementById('scrollToTop');

// Event listener untuk menampilkan/menyembunyikan tombol berdasarkan posisi scroll
window.addEventListener('scroll', () => {
    // Jika posisi scroll lebih dari 300px
    if (window.pageYOffset > 300) {
        // Tampilkan tombol
        scrollToTopBtn.classList.add('visible');
    } else {
        // Sembunyikan tombol
        scrollToTopBtn.classList.remove('visible');
    }
});

// Event listener untuk tombol "scroll to top"
scrollToTopBtn.addEventListener('click', () => {
    // Menggulir halaman ke atas dengan halus
    window.scrollTo({
        top: 0, // Posisi tujuan (paling atas)
        behavior: 'smooth' // Animasi gulir yang halus
    });
});

// Smooth scrolling for anchor links
// Mendapatkan semua link yang mengarah ke bagian dalam halaman
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    // Event listener untuk setiap link
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Mencegah perilaku default dari link

        // Mendapatkan elemen tujuan dari link
        const target = document.querySelector(this.getAttribute('href'));

        // Jika elemen tujuan ada
        if (target) {
            // Menghitung posisi tujuan dengan penyesuaian untuk tinggi navigasi
            const offsetTop = target.offsetTop - 70;
            // Menggulir halaman ke posisi tujuan dengan halus
            window.scrollTo({
                top: offsetTop, // Posisi tujuan
                behavior: 'smooth' // Animasi gulir yang halus
            });
        }
    });
});

// Intersection Observer for fade-in animations on scroll
// Opsi untuk Intersection Observer
const observerOptions = {
    threshold: 0.1, // Seberapa banyak elemen harus terlihat sebelum callback dipanggil
    rootMargin: '0px 0px -100px 0px' // Margin untuk area observasi
};

// Membuat instance Intersection Observer
const observer = new IntersectionObserver((entries) => {
    // Untuk setiap entri yang diobservasi
    entries.forEach(entry => {
        // Jika elemen masuk ke dalam viewport
        if (entry.isIntersecting) {
            // Tambahkan kelas 'animate' untuk memicu animasi
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Event listener yang dijalankan setelah semua konten DOM dimuat
document.addEventListener('DOMContentLoaded', () => {
    // Mendapatkan semua elemen kartu keterampilan dan portofolio
    const skillCards = document.querySelectorAll('.Skills-card');
    const projectCards = document.querySelectorAll('.Portfolio-card');

    // Mengobservasi setiap kartu keterampilan
    skillCards.forEach(card => {
        observer.observe(card);
    });

    // Mengobservasi setiap kartu portofolio
    projectCards.forEach(card => {
        observer.observe(card);
    });
});

// Add active state to nav links based on scroll position
// Event listener untuk menandai link navigasi yang aktif berdasarkan posisi scroll
window.addEventListener('scroll', () => {
    let current = ''; // Variabel untuk menyimpan ID bagian yang sedang aktif
    const sections = document.querySelectorAll('section'); // Mendapatkan semua elemen section

    // Untuk setiap bagian
    sections.forEach(section => {
        const sectionTop = section.offsetTop; // Posisi atas bagian
        const sectionHeight = section.clientHeight; // Tinggi bagian

        // Jika posisi scroll berada di dalam bagian ini
        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id'); // Dapatkan ID bagian
        }
    });

    // Untuk setiap link navigasi
    navLinks.forEach(link => {
        // Hapus kelas 'active' dari semua link
        link.classList.remove('active');
        // Jika link mengarah ke bagian yang sedang aktif
        if (link.getAttribute('href').slice(1) === current) {
            // Tambahkan kelas 'active'
            link.classList.add('active');
        }
    });
});

// Add keyboard navigation support
// Event listener untuk navigasi keyboard
document.addEventListener('keydown', (e) => {
    // Jika tombol 'Escape' ditekan
    if (e.key === 'Escape') {
        // Tutup menu mobile
        mobileMenuToggle.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Wait for the DOM to load
    document.addEventListener("DOMContentLoaded", function () {
        const splash = document.getElementById("splash");
        const mainContent = document.getElementById("main-content");

        // Show splash for 2 seconds, then fade out
        setTimeout(() => {
            splash.classList.add("hidden");

            // Show main content after fade-out
            setTimeout(() => {
                splash.style.display = "none";
                mainContent.style.display = "block";
            }, 100); // match CSS transition duration
        }, 100); // show splash for 600ms
    });