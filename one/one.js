



function toggleMenu(hamburger) {
    var navbar = document.getElementById("navbar");

    // تبديل إظهار/إخفاء شريط التنقل
    navbar.classList.toggle("show");

    // تبديل فئة الأيقونة لتغيير شكلها
    hamburger.classList.toggle("active");
}


const ope = document.querySelectorAll('.b');
const clos = document.getElementById('clos');
const bgo = document.getElementById('bgo');







ope.forEach(function (button) {
    button.addEventListener('click', function () {
         // إضافة تأخير قبل عرض النافذة المنبثقة
         setTimeout(() => {
            bgo.style.display = 'block'; // عرض النافذة المنبثقة
            document.body.style.overflow = 'hidden'; // إخفاء التمرير
        }, 200); // تأخير لمدة 200 ميللي ثانية (نصف ثانية)
        
    });
    
    
 });

 clos.addEventListener('click', function() {
     bgo.style.display = 'none';
     document.body.style.overflow = '';
 });


 document.addEventListener('click', function(event) {
    // التحقق مما إذا كان النقر خارج النافذة المنبثقة
    if (!event.target.closest('.boxx') && !event.target.closest('.b')) {
        bgo.style.display = 'none';
        document.body.style.overflow = '';
    }
 });



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
