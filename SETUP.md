# 🚀 تعليمات تشغيل الموقع

## الخطوات السريعة

### 1. تثبيت الحزم
```bash
npm install
```

### 2. تشغيل الموقع
```bash
npm run dev
```

### 3. فتح المتصفح
افتح المتصفح على: `http://localhost:3000`

---

## 📦 الحزم المستخدمة

- **Next.js 14** - Framework
- **React 18** - UI Library
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **TypeScript** - Type Safety

---

## 🎨 التخصيص

### تغيير الألوان
عدّل في `tailwind.config.js`:
```js
colors: {
  navy: '#0A1929',
  purple: '#533483',
  orange: '#FF6B35',
}
```

### تحديث المشاريع
عدّل في `components/Projects.tsx` - قائمة `projects`

### تحديث المعلومات الشخصية
- `components/Hero.tsx` - القسم الرئيسي
- `components/About.tsx` - قسم من أنا
- `components/Contact.tsx` - معلومات التواصل

---

## 🌐 النشر (Deployment)

### على Vercel (موصى به)
```bash
npm install -g vercel
vercel
```

### على Netlify
1. ارفع المشروع على GitHub
2. اربطه بـ Netlify
3. Build command: `npm run build`
4. Publish directory: `.next`

---

## ✅ Checklist قبل النشر

- [ ] تحديث معلومات التواصل
- [ ] تحديث روابط GitHub
- [ ] تحديث المشاريع
- [ ] اختبار على Mobile
- [ ] اختبار الأداء
- [ ] تحديث README.md

---

## 🐛 حل المشاكل

### خطأ في التثبيت
```bash
rm -rf node_modules package-lock.json
npm install
```

### خطأ في البناء
```bash
npm run build
```

### الموقع لا يعمل
تأكد من:
- Node.js 18+ مثبت
- جميع الحزم مثبتة
- Port 3000 متاح

---

**ملاحظة**: بعد تثبيت الحزم، ستعمل جميع الأخطاء في TypeScript تلقائياً! 🎉

