document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('applyForm');

    form.addEventListener('submit', async function (e) {
        e.preventDefault();

        // 1. التحقق من أرقام الهواتف
        const phoneInput = document.getElementById('phone').value.trim();
        const whatsappInput = document.getElementById('whatsapp').value.trim();
        const phoneRegex = /^01[0125][0-9]{8}$/;

        if (!phoneRegex.test(phoneInput) || !phoneRegex.test(whatsappInput)) {
            alert('برجاء إدخال أرقام هواتف مصرية صحيحة مكونة من 11 رقم');
            return;
        }

        const submitBtn = document.getElementById('submitBtn');
        submitBtn.disabled = true;
        submitBtn.innerText = 'جاري الإرسال...';

        // 2. تجهيز البيانات
        const formData = new FormData(form);
        // حطي الـ Access Key اللي وصلك على الإيميل هنا
        formData.append("access_key", "حطي_المفتاح_هنا_YOUR_ACCESS_KEY"); 

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                // التوجيه لصفحة تم الاستلام
                window.location.href = 'success.html';
            } else {
                alert('حدث خطأ أثناء الإرسال، حاول مرة أخرى.');
                submitBtn.disabled = false;
                submitBtn.innerText = 'إرسال / Submit';
            }
        } catch (error) {
            alert('تعذر الاتصال بالشبكة، يرجى التأكد من الإنترنت.');
            submitBtn.disabled = false;
            submitBtn.innerText = 'إرسال / Submit';
        }
    });
});
