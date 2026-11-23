موقع NOIR للأزياء — الملفات
index.html: الصفحة الرئيسية وعرض المنتجات.
style.css: التصميم الداكن والمتجاوب.
app.js: تفاعلات الحقيبة والقائمة.
register.html: إنشاء حساب.
login.html: تسجيل الدخول.
verify.html: صفحة تأكيد البريد.
auth.js: نقطة ربط الواجهة بخادم التحقق.
.gitignore: يستثني ملفات الأسرار.

الرفع:
ارفع جميع الملفات إلى جذر مستودع GitHub.
من Settings > Pages اختر Deploy from a branch ثم main و /root.

مهم:
هذه نسخة واجهة أمامية. إرسال البريد والتحقق الفعلي وتسجيل الدخول لا يعمل قبل نشر Backend آمن على HTTPS.
لا تضع توكن البوت أو كلمة مرور Gmail أو API secret في HTML أو JavaScript.
GitHub Pages لا يشغّل Python. نحتاج استضافة مستقلة لخادم Python.
صور الأزياء من Unsplash وتتطلب اتصال إنترنت.
