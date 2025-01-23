// Initialize AOS
AOS.init({
    duration: 1000,
    once: true
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Login form handling
document.getElementById('loginForm').addEventListener('submit', function(e) {
    console.log('Form login dikirim');
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const formMessage = document.getElementById('formMessage');

    if (email && password) {
        console.log('Login berhasil');
        formMessage.textContent = 'Login berhasil!';
        formMessage.className = 'form-message success';
        window.location.replace = 'index.html'; // Redirect ke halaman utama
    } else {
        console.log('Mohon lengkapi semua bidang');
        formMessage.textContent = 'Mohon lengkapi semua bidang!';
        formMessage.className = 'form-message error';
    }
});

// Form handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    if (name && message) {
        const whatsappNumber = '6283801663328'; // Ganti dengan nomor WhatsApp yang dituju
        const whatsappMessage = `Nama: ${name}\nPesan: ${message}`;
        const encodedMessage = encodeURIComponent(whatsappMessage);
        const whatsappURL = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;

        // Redirect to WhatsApp
        window.open(whatsappURL, '_blank');

        // Jika Anda ingin menampilkan pesan sukses di halaman
        const formMessage = document.getElementById('formMessage');
        formMessage.textContent = 'Pesan Anda berhasil dikirim ke WhatsApp!';
        formMessage.className = 'form-message success';
        formMessage.style.display = 'block';
        
        this.reset();
    } else {
        const formMessage = document.getElementById('formMessage');
        formMessage.textContent = 'Mohon lengkapi semua bidang!';
        formMessage.className = 'form-message error';
        formMessage.style.display = 'block';
    }
});
