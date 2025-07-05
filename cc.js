// إضافة تفاعل عند النقر على الصورة لعرضها بشكل أكبر
alert('welcome')
const images = document.querySelectorAll('.image-container img');

images.forEach(image => {
    image.addEventListener('click', function () {
        // إنشاء نافذة عرض الصور الكبيرة
        const modal = document.createElement('div');
        modal.classList.add('modal');

        const modalImage = document.createElement('img');
        modalImage.src = image.src;
        modal.appendChild(modalImage);

        // إضافة النوافذ المودالية إلى الصفحة
        document.body.appendChild(modal);

        // إغلاق النافذة عند النقر عليها
        modal.addEventListener('click', function () {
            modal.remove();
        });
    });
});