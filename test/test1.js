// script.js
document.addEventListener('DOMContentLoaded', function () {
    var btnGlobal = document.getElementById('btn-global');
    var btnKorean = document.getElementById('btn-korean');
    var popupGlobal = document.getElementById('popup-global');
    var popupKorean = document.getElementById('popup-korean');
    var closeGlobal = document.getElementById('close-global');
    var closeKorean = document.getElementById('close-korean');

    function showPopup(popup) {
        popup.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // منع التمرير خلف النافذة المنبثقة
    }

    function hidePopup(popup) {
        popup.style.display = 'none';
        document.body.style.overflow = 'auto'; // استعادة التمرير
    }

    btnGlobal.addEventListener('click', function () {
        showPopup(popupGlobal);
    });

    btnKorean.addEventListener('click', function () {
        showPopup(popupKorean);
    });

    closeGlobal.addEventListener('click', function () {
        hidePopup(popupGlobal);
    });

    closeKorean.addEventListener('click', function () {
        hidePopup(popupKorean);
    });

    // إغلاق النوافذ المنبثقة عند النقر خارجها
    window.addEventListener('click', function (event) {
        if (event.target === popupGlobal) {
            hidePopup(popupGlobal);
        }
        if (event.target === popupKorean) {
            hidePopup(popupKorean);
        }
    });
});
