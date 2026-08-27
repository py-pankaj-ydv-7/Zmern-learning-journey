/* ==========================================================================
   ANSHIKA SPORTS - MAIN JAVASCRIPT
   ========================================================================== */

// Mock Products Data
const products = [
    {
        id: 1,
        name: "SG Player Edition English Willow Bat",
        category: "Cricket",
        price: "14,999",
        rating: 4.9,
        badge: "Bestseller",
        image: "https://images.unsplash.com/photo-1593341646782-e0b495cffd6d?auto=format&fit=crop&q=80&w=800",
        desc: "Grade 1 English Willow with optimum balance and massive sweet spot. Crafted for professional players."
    },
    {
        id: 2,
        name: "Nivia Premier Tournament Football",
        category: "Football",
        price: "1,299",
        rating: 4.7,
        badge: "New",
        image: "https://images.unsplash.com/photo-1614632537190-23e4146777db?auto=format&fit=crop&q=80&w=800",
        desc: "32-panel hand-stitched match football designed for all weather surface play with extreme durability."
    },
    {
        id: 3,
        name: "Yonex Astrox 99 Badminton Racket",
        category: "Badminton",
        price: "3,490",
        rating: 4.8,
        badge: "Popular",
        image: "https://images.unsplash.com/photo-1613918108466-292b78a8ef95?auto=format&fit=crop&q=80&w=800",
        desc: "Full graphite head-heavy balance racket engineered for steep attacks and maximum smash power."
    },
    {
        id: 4,
        name: "Rubber Hex Dumbbell Set (10kg Pair)",
        category: "Gym",
        price: "2,499",
        rating: 4.9,
        badge: "Essential",
        image: "https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?auto=format&fit=crop&q=80&w=800",
        desc: "Anti-roll hexagonal rubber dumbbells featuring ergonomic chrome knurled handles for safe lifting."
    },
    {
        id: 5,
        name: "Cosco Shot Rubber Basketball",
        category: "Basketball",
        price: "950",
        rating: 4.6,
        badge: "Top Rated",
        image: "https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&q=80&w=800",
        desc: "Official size 7 basketball constructed with nylon winding for outdoor hard courts."
    },
    {
        id: 6,
        name: "Cosco Table Tennis Racket",
        category: "Indoor Games",
        price: "799",
        rating: 4.5,
        badge: "Hot",
        image: "https://images.unsplash.com/photo-1534158914592-062992fbe900?auto=format&fit=crop&q=80&w=800",
        desc: "ITTF approved rubber blade racket delivering precise spin and power control."
    }
];

// Mock Reviews Data
const reviews = [
    {
        name: "Vikram Sharma",
        role: "Cricket Coach, Tekanpur Academy",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
        text: "Anshika Sports is a blessing for Tekanpur athletes! Direct brand products like SG and SS at reasonable rates."
    },
    {
        name: "Priya Patel",
        role: "College Athlete",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
        text: "Bought my Yonex badminton gear from here. 100% authentic gear and fantastic guidance by the store owner."
    },
    {
        name: "Col. Rajesh Verma (Retd.)",
        role: "Fitness Enthusiast",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
        text: "Equipped my home gym with dumbbells and bench setup. Speedy delivery and solid heavy-duty equipment!"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Icons
    lucide.createIcons();

    // 2. Hide Loader
    const loader = document.getElementById('page-loader');
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => loader.style.display = 'none', 500);
    }, 400);

    // 3. Render Products
    renderProducts();

    // 4. Render Reviews Slider
    renderReviews();

    // 5. Initialize Theme Toggle (Dark/Light)
    initTheme();

    // 6. Sticky Nav & Scroll Progress
    initScrollEvents();

    // 7. Mobile Drawer
    initMobileMenu();

    // 8. Statistics Count Up
    initCounterAnimation();

    // 9. FAQ Accordion
    initFAQ();

    // 10. Contact Form Handler
    initContactForm();
});

/* --- PRODUCTS RENDER & QUICK VIEW --- */
function renderProducts() {
    const grid = document.getElementById('products-grid');
    grid.innerHTML = products.map(p => `
        <div class="glass-card product-card">
            <div class="product-img-wrapper">
                <span class="product-badge">${p.badge}</span>
                <img loading="lazy" src="${p.image}" alt="${p.name}">
            </div>
            <span style="font-size:0.75rem; color: var(--color-accent); font-weight:700;">${p.category.toUpperCase()}</span>
            <h3 class="product-title">${p.name}</h3>
            <div class="product-meta">
                <span class="product-price">₹${p.price}</span>
                <div class="product-rating">
                    <i data-lucide="star" style="fill:#F59E0B; stroke:none; width:16px;"></i> ${p.rating}
                </div>
            </div>
            <button onclick="openModal(${p.id})" class="btn btn-primary quick-view-btn">
                Quick View
            </button>
        </div>
    `).join('');
    lucide.createIcons();
}

function openModal(id) {
    const p = products.find(prod => prod.id === id);
    if (!p) return;

    const modalContent = document.getElementById('modal-content');
    const waText = encodeURIComponent(`Hi Anshika Sports, I want to inquire about purchasing "${p.name}" priced at ₹${p.price}.`);

    modalContent.innerHTML = `
        <div style="height:250px; border-radius:12px; overflow:hidden;">
            <img src="${p.image}" alt="${p.name}" style="width:100%; height:100%; object-fit:cover;">
        </div>
        <div>
            <span style="font-size:0.75rem; color:var(--color-accent); font-weight:700;">${p.category}</span>
            <h2 style="font-size:1.5rem; font-weight:800; margin-bottom:0.5rem;">${p.name}</h2>
            <p style="font-size:1.5rem; font-weight:900; color:var(--color-accent); margin-bottom:1rem;">₹${p.price}</p>
            <p style="font-size:0.85rem; color:var(--text-secondary); margin-bottom:1.5rem;">${p.desc}</p>
            <a href="https://wa.me/919516499774?text=${waText}" target="_blank" class="btn btn-whatsapp w-full">
                Order via WhatsApp
            </a>
        </div>
    `;

    document.getElementById('quick-view-modal').classList.add('active');
    lucide.createIcons();
}

document.getElementById('modal-close').addEventListener('click', () => {
    document.getElementById('quick-view-modal').classList.remove('active');
});

/* --- REVIEWS SLIDER --- */
let currentSlide = 0;
function renderReviews() {
    const wrapper = document.getElementById('reviews-wrapper');
    wrapper.innerHTML = reviews.map(r => `
        <div class="review-slide glass-card">
            <img src="${r.image}" alt="${r.name}" class="reviewer-img">
            <div class="stars">★★★★★</div>
            <p class="review-text">"${r.text}"</p>
            <h4 class="reviewer-name">${r.name}</h4>
            <span class="reviewer-role">${r.role}</span>
        </div>
    `).join('');

    document.getElementById('next-slide').addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % reviews.length;
        updateSlider();
    });

    document.getElementById('prev-slide').addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + reviews.length) % reviews.length;
        updateSlider();
    });
}

function updateSlider() {
    document.getElementById('reviews-wrapper').style.transform = `translateX(-${currentSlide * 100}%)`;
}

/* --- THEME TOGGLE --- */
function initTheme() {
    const toggle = document.getElementById('theme-toggle');
    const icon = document.getElementById('theme-icon');

    toggle.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
        const isDark = document.documentElement.classList.contains('dark');
        icon.setAttribute('data-lucide', isDark ? 'sun' : 'moon');
        lucide.createIcons();
    });
}

/* --- SCROLL EVENTS & BACK TO TOP --- */
function initScrollEvents() {
    const progressBar = document.getElementById('scroll-progress');
    const backToTop = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        // Scroll Progress Line
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (window.scrollY / totalHeight) * 100;
        progressBar.style.width = `${progress}%`;

        // Back To Top Visibility
        if (window.scrollY > 400) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

/* --- MOBILE DRAWER MENU --- */
function initMobileMenu() {
    const drawer = document.getElementById('mobile-menu');
    const openBtn = document.getElementById('mobile-menu-toggle');
    const closeBtn = document.getElementById('mobile-menu-close');
    const links = document.querySelectorAll('.mobile-nav-link');

    openBtn.addEventListener('click', () => drawer.classList.add('active'));
    closeBtn.addEventListener('click', () => drawer.classList.remove('active'));
    links.forEach(l => l.addEventListener('click', () => drawer.classList.remove('active')));
}

/* --- STATISTICS COUNTER ANIMATION --- */
function initCounterAnimation() {
    const counters = document.querySelectorAll('.counter');
    let animated = false;

    window.addEventListener('scroll', () => {
        const section = document.getElementById('hero');
        const pos = section.getBoundingClientRect().top;

        if (pos < window.innerHeight && !animated) {
            animated = true;
            counters.forEach(c => {
                const target = +c.getAttribute('data-target');
                let count = 0;
                const speed = target / 50;

                const updateCount = () => {
                    count += speed;
                    if (count < target) {
                        c.innerText = Math.ceil(count);
                        setTimeout(updateCount, 30);
                    } else {
                        c.innerText = target;
                    }
                };
                updateCount();
            });
        }
    });
}

/* --- FAQ ACCORDION --- */
function initFAQ() {
    const items = document.querySelectorAll('.faq-item');
    items.forEach(item => {
        item.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            items.forEach(i => i.classList.remove('active'));
            if (!isActive) item.classList.add('active');
        });
    });
}

/* --- CONTACT FORM --- */
function initContactForm() {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const msg = document.getElementById('message').value;
        
        const waMsg = encodeURIComponent(`Hi Anshika Sports, My name is ${name}. Inquiry: ${msg}`);
        window.open(`https://wa.me/919516499774?text=${waMsg}`, '_blank');
        form.reset();
    });
}