// ================================
// Language Toggle
// ================================
document.addEventListener('DOMContentLoaded', function() {
    const langZh = document.getElementById('lang-zh');
    const langEn = document.getElementById('lang-en');
    const body = document.body;
    
    // Check saved language preference
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang) {
        setLanguage(savedLang);
    }
    
    langZh.addEventListener('click', function() {
        setLanguage('zh');
    });
    
    langEn.addEventListener('click', function() {
        setLanguage('en');
    });
    
    function setLanguage(lang) {
        body.classList.remove('lang-zh', 'lang-en');
        body.classList.add('lang-' + lang);
        
        langZh.classList.remove('active');
        langEn.classList.remove('active');
        
        if (lang === 'zh') {
            langZh.classList.add('active');
        } else {
            langEn.classList.add('active');
        }
        
        localStorage.setItem('preferredLanguage', lang);
    }
});

// ================================
// Toggle Answer Visibility
// ================================
document.addEventListener('DOMContentLoaded', function() {
    const toggleButtons = document.querySelectorAll('.toggle-answer');
    
    toggleButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const answerContent = this.nextElementSibling;
            answerContent.classList.toggle('show');
            
            // Update button text
            const zhText = this.querySelector('.zh');
            const enText = this.querySelector('.en');
            
            if (answerContent.classList.contains('show')) {
                zhText.textContent = '隱藏建議答案';
                enText.textContent = 'Hide Suggested Answer';
            } else {
                zhText.textContent = '顯示建議答案';
                enText.textContent = 'Show Suggested Answer';
            }
        });
    });
});

// ================================
// Smooth Scrolling for Navigation
// ================================
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-list a');
    
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// ================================
// Highlight Active Navigation
// ================================
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-list a');
    
    window.addEventListener('scroll', function() {
        let current = '';
        const navHeight = document.querySelector('.navbar').offsetHeight;
        
        sections.forEach(function(section) {
            const sectionTop = section.offsetTop - navHeight - 100;
            const sectionHeight = section.offsetHeight;
            
            if (window.pageYOffset >= sectionTop) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(function(link) {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
});

// ================================
// Worksheet Data Export (Optional)
// ================================
function exportWorksheetData() {
    const table = document.querySelector('.worksheet-table');
    const rows = table.querySelectorAll('tbody tr');
    const data = [];
    
    rows.forEach(function(row) {
        const cells = row.querySelectorAll('td');
        const rowData = [];
        cells.forEach(function(cell) {
            rowData.push(cell.textContent.trim());
        });
        data.push(rowData);
    });
    
    console.log('Worksheet Data:', data);
    return data;
}

// ================================
// Animation on Scroll
// ================================
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    const animatedElements = document.querySelectorAll('.discussion-card, .summary-card, .activity-card');
    
    animatedElements.forEach(function(el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });
});
