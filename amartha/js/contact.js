// Contact Page Functionality
document.addEventListener('DOMContentLoaded', function() {
    // AOS Animation
    AOS.init({
        duration: 1000,
        once: true
    });

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all
            faqItems.forEach(i => i.classList.remove('active'));
            
            // Toggle current
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // Contact Form
    const contactForm = document.getElementById('contactForm');
    contactForm?.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const btn = this.querySelector('button[type="submit"]');
        const btnText = btn.querySelector('.btn-text');
        const btnLoading = btn.querySelector('.btn-loading');
        
        // Show loading
        btnText.style.display = 'none';
        btnLoading.style.display = 'inline-flex';
        btn.disabled = true;
        
        // Simulate form submission
        setTimeout(() => {
            // Simulate WhatsApp redirect
            const phone = document.getElementById('contactPhone').value;
            const name = document.getElementById('contactName').value;
            const message = document.getElementById('contactMessage').value || 'Info pembiayaan';
            
            const whatsappMessage = `Halo Prospera, saya ${name} ingin info pembiayaan. ${message}`;
            const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(whatsappMessage)}`;
            
            // Reset form
            contactForm.reset();
            btnText.style.display = 'inline';
            btnLoading.style.display = 'none';
            btn.disabled = false;
            
            // Open WhatsApp
            window.open(whatsappUrl, '_blank');
            
            // Success message
            alert('✅ Pesan berhasil dikirim! WhatsApp akan terbuka otomatis.');
        }, 2000);
    });

    // WhatsApp quick buttons
    document.querySelectorAll('.whatsapp-btn, .whatsapp-cta').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const message = 'Halo Prospera Finance, saya ingin informasi pembiayaan untuk usaha saya.';
            window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(message)}`, '_blank');
        });
    });

    // Phone click to call
    document.querySelectorAll('a[href^="tel:"]').forEach(link => {
        link.addEventListener('click', function() {
            // Auto dial
            window.location.href = this.href;
        });
    });

    // Email click
    document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
        link.addEventListener('click', function() {
            // Pre-fill subject
            const subject = 'Info Pembiayaan - Prospera Finance';
            window.location.href = this.href + '?subject=' + encodeURIComponent(subject);
        });
    });
});