document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('applyForm');

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // يمنع السلوك الافتراضي الذي يسبب الرموز الغريبة

        // 1. التحقق من أرقام الهواتف
        const phoneInput = document.getElementById('phone').value.trim();
        const whatsappInput = document.getElementById('whatsapp').value.trim();
        const phoneRegex = /^01[0125][0-9]{8}$/;

        if (!phoneRegex.test(phoneInput)) {
            alert('برجاء إدخال رقم هاتف مصري صحيح مكون من 11 رقم');
            return;
        }

        if (!phoneRegex.test(whatsappInput)) {
            alert('برجاء إدخال رقم واتساب مصري صحيح مكون من 11 رقم');
            return;
        }

        // 2. قراءة البيانات من الحقول
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const birthYear = document.getElementById('birthYear').value.trim();
        const governorate = document.getElementById('governorate').value.trim();
        const specialization = document.getElementById('specialization').value.trim();
        const role = document.getElementById('role').value;
        const whyJoin = document.getElementById('whyJoin').value.trim();

        // 3. تجهيز عنوان الرسالة ونص البيانات
        const subject = "طلب انضمام جديد - TOFU Media Team";
        const emailBody = 
`Full Name: ${name}
Email Address: ${email}
Birth Year: ${birthYear}
Phone Number: ${phoneInput}
WhatsApp Number: ${whatsappInput}
Governorate: ${governorate}
School / College: ${specialization}
Applying Track: ${role}
Reason to Join:
${whyJoin}`;

        // 4. فتح تطبيق البريد بنص واضح ونظيف
        const mailtoUrl = `mailto:tofumedia0@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
        window.location.href = mailtoUrl;
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
