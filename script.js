document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('applyForm');

    form.addEventListener('submit', function (e) {
        // التحقق من صحة أرقام الهواتف المصرية
        const phoneInput = document.getElementById('phone');
        const whatsappInput = document.getElementById('whatsapp');
        const phoneRegex = /^01[0125][0-9]{8}$/;

        if (!phoneRegex.test(phoneInput.value.trim())) {
            alert('برجاء إدخال رقم هاتف مصري صحيح مكون من 11 رقم');
            phoneInput.focus();
            e.preventDefault(); // يمنع فتح تطبيق الإيميل إذا كان الرقم خاطئاً
            return;
        }

        if (!phoneRegex.test(whatsappInput.value.trim())) {
            alert('برجاء إدخال رقم واتساب مصري صحيح مكون من 11 رقم');
            whatsappInput.focus();
            e.preventDefault(); // يمنع فتح تطبيق الإيميل إذا كان الرقم خاطئاً
            return;
        }

        // إذا كانت البيانات صحيحة، سيقوم المتصفح تلقائياً بفتح تطبيق البريد لإرسال البيانات للإيميل
    });

    // منع كتابة الحروف في حقول الأرقام
    const numericInputs = [
        document.getElementById('birthYear'), 
        document.getElementById('phone'), 
        document.getElementById('whatsapp')
    ];
    
    numericInputs.forEach(input => {
        if (input) {
            input.addEventListener('input', (e) => {
                e.target.value = e.target.value.replace(/[^0-9]/g, '');
            });
        }
    });
});