// Products Page Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Product Filter
    const filterChips = document.querySelectorAll('.chip');
    const productCards = document.querySelectorAll('.product-card');
    const productFilter = document.getElementById('productFilter');

    function filterProducts(filter) {
        productCards.forEach(card => {
            if (filter === 'all' || card.dataset.category === filter) {
                card.classList.remove('hidden');
                setTimeout(() => card.style.opacity = '1', 100);
            } else {
                card.style.opacity = '0';
                setTimeout(() => card.classList.add('hidden'), 300);
            }
        });
    }

    filterChips.forEach(chip => {
        chip.addEventListener('click', function() {
            const filter = this.dataset.filter;
            
            // Update active chip
            filterChips.forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            
            // Filter products
            filterProducts(filter);
        });
    });

    productFilter?.addEventListener('change', function() {
        filterProducts(this.value);
    });

    // Product Apply Buttons
    document.querySelectorAll('.product-apply').forEach(btn => {
        btn.addEventListener('click', function() {
            const product = this.dataset.product;
            // Simulasi pengajuan
            localStorage.setItem('selectedProduct', product);
            window.location.href = 'register.html';
        });
    });

    // Product Detail Modal (simulasi)
    document.querySelectorAll('.product-detail').forEach(btn => {
        btn.addEventListener('click', function() {
            alert('Fitur detail produk lengkap akan ditampilkan dalam modal/pop-up');
        });
    });

    // Animate on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    productCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});