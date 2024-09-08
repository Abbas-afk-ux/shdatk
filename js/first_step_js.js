
function toggleMenu(hamburger) {
    var navbar = document.getElementById("navbar");

    // تبديل إظهار/إخفاء شريط التنقل
    navbar.classList.toggle("show");

    // تبديل فئة الأيقونة لتغيير شكلها
    hamburger.classList.toggle("active");
}


// تأخير الانتقال عند النقر على الروابط
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // إيقاف الرابط الافتراضي
        const href = this.getAttribute('href'); // الحصول على عنوان الرابط
        // تأخير الانتقال لمدة 500 ميللي ثانية (نصف ثانية)
        setTimeout(() => {
            window.location.href = href;
        }, 200); // يمكنك تعديل القيمة لتناسب التأخير الذي تريده
    });
});
