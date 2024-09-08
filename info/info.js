// تبديل شريط التنقل
function toggleMenu(hamburger) {
    var navbar = document.getElementById("navbar");
    navbar.classList.toggle("show");
    hamburger.classList.toggle("active");
}

// التحكم بالنوافذ المنبثقة
const buttons = document.querySelectorAll('.b');

// إظهار النافذة المنبثقة عند النقر على الزر
const modalButtons = document.querySelectorAll('.b');
modalButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        const personId = this.getAttribute('data-person');
        const modal = document.getElementById(personId);
        if (modal) {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    });
});

// إغلاق النافذة المنبثقة عند النقر على زر الإغلاق
function closeModal(personId) {
    const modal = document.getElementById(personId);
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
}

// إغلاق النافذة المنبثقة عند النقر خارجها
document.addEventListener('click', function(event) {
    const openModals = document.querySelectorAll('.bgo');
    openModals.forEach(function(modal) {
        if (!event.target.closest('.boxx') && !event.target.closest('.b') && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
});

function openNewWindow(url) {
    // فتح نافذة جديدة مع الرابط المراد
    window.open(url, '_blank'); 
}

// التعامل مع الأزرار لفتح الروابط
const linkButtons = document.querySelectorAll('.z');
linkButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        const url = this.getAttribute('data-url');
        openNewWindow(url);
    });
})