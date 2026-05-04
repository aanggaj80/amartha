// Dashboard Interactivity
document.addEventListener('DOMContentLoaded', function() {
    // Check login status
    if (localStorage.getItem('userLoggedIn') !== 'true') {
        window.location.href = 'login.html';
    }

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    
    menuToggle?.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });

    // Close sidebar on mobile when clicking nav item
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => {
            if (window.innerWidth <= 1024) {
                sidebar.classList.remove('active');
            }
            document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
        });
    });

    // Logout functionality
    document.querySelector('.logout-btn')?.addEventListener('click', () => {
        if (confirm('Apakah Anda yakin ingin keluar?')) {
            localStorage.removeItem('userLoggedIn');
            localStorage.removeItem('userPhone');
            window.location.href = 'login.html';
        }
    });

    // Notification dropdown (simulasi)
    document.querySelector('.notification')?.addEventListener('click', function() {
        const badge = this.querySelector('.notification-badge');
        if (badge) {
            badge.remove();
        }
        // Di production, ini akan menampilkan dropdown notifikasi
        alert('3 notifikasi baru:\n1. Cicilan jatuh tempo\n2. Pinjaman disetujui\n3. Dokumen dibutuhkan');
    });

    // Quick action handlers
    document.querySelectorAll('.action-card').forEach(card => {
        card.addEventListener('click', function() {
            const action = this.querySelector('span').textContent;
            switch(action) {
                case 'Ajukan Pinjaman Baru':
                    window.location.href = 'products.html';
                    break;
                case 'Bayar Cicilan':
                    alert('Fitur pembayaran akan diarahkan ke payment gateway');
                    break;
                case 'Upload Dokumen':
                    alert('Upload dokumen KTP, KK, dll');
                    break;
                default:
                    console.log('Action:', action);
            }
        });
    });

    // Real-time clock
    function updateClock() {
        const now = new Date();
        const timeString = now.toLocaleTimeString('id-ID', {
            hour: '2-digit',
            minute: '2-digit'
        });
        document.querySelector('.topbar-left h1')?.insertAdjacentHTML('beforeend', 
            `<span style="font-size: 0.8rem; opacity: 0.7; margin-left: 1rem;">${timeString}</span>`
        );
    }
    setInterval(updateClock, 1000);
});