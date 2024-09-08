


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

   
   
   
   
   
   
   
   
   
   
   
   
    var btnGlobal = document.getElementById('btn-global');
    var btnKorean = document.getElementById('btn-korean');
    var popupGlobal = document.getElementById('popup-global');
    var popupKorean = document.getElementById('popup-korean');
    var closeGlobal = document.getElementById('close-global');
    var closeKorean = document.getElementById('close-korean');

    btnGlobal.addEventListener('click', function () {
        popupGlobal.style.display = 'flex';
        updateProductVisibility('product-global');
    });

    btnKorean.addEventListener('click', function () {
        popupKorean.style.display = 'flex';
        updateProductVisibility('product-korean');
    });

    closeGlobal.addEventListener('click', function () {
        popupGlobal.style.display = 'none';
    });

    closeKorean.addEventListener('click', function () {
        popupKorean.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === popupGlobal) {
            popupGlobal.style.display = 'none';
        }
        if (event.target === popupKorean) {
            popupKorean.style.display = 'none';
        }
    });

    // Function to update visibility of products based on expiration date
    function updateProductVisibility(productId) {
        var products = document.querySelectorAll(`#${productId} .product`);
        var now = new Date();

        products.forEach(function(product) {
            var endDate = new Date(product.getAttribute('data-end'));
            if (endDate < now) {
                product.style.display = 'none';
            } else {
                product.style.display = 'block';
            }
        });
    }

    // Check for expired offers and reload page if necessary
    function checkForExpiredOffers() {
        var now = new Date();
        var products = document.querySelectorAll('.product');
        var needsReload = false;

        products.forEach(function(product) {
            var endDate = new Date(product.getAttribute('data-end'));
            if (endDate < now) {
                needsReload = true;
            }
        });

        if (needsReload) {
            location.reload(); // Reload the page to update the offers
        }
    }

    // Check for expired offers every 60 seconds (60000 milliseconds)
    setInterval(checkForExpiredOffers, 60000);

