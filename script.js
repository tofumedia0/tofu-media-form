document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('applyForm');

    if (form) {
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
            
            // ⚠️ حطي المفتاح الخاص بيكِ هنا مكان YOUR_ACCESS_KEY_HERE
            formData.append("access_key", "4579e504-4006-4d59-99fb-ff7ff12f1fc1"); 

            try {
                const response = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    body: formData
                });

                const data = await response.json();

                if (data.success) {
                    // التوجيه فوراً لصفحة تم الاستلام
                    window.location.href = 'success.html';
                } else {
                    alert('حدث خطأ أثناء الإرسال: ' + data.message);
                    submitBtn.disabled = false;
                    submitBtn.innerText = 'إرسال / Submit';
                }
            } catch (error) {
                alert('تعذر الاتصال بالشبكة، يرجى التأكد من اتصال الإنترنت.');
                submitBtn.disabled = false;
                submitBtn.innerText = 'إرسال / Submit';
            }
        });
    }
});
