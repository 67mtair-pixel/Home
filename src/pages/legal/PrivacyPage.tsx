export default function PrivacyPage() {
  return (
    <div className="space-y-8 text-gray-700 leading-relaxed">
      <div>
        <h2 className="text-2xl font-bold text-primary-900 mb-4">سياسة الخصوصية</h2>
        <p className="text-sm text-gray-500 mb-6">آخر تحديث: فبراير 2025</p>
        <p>نحن في وفرة نلتزم بحماية خصوصية مستخدمينا. توضح هذه السياسة كيفية جمع واستخدام وحماية بياناتك الشخصية عند استخدامك لمنصة وفرة.</p>
      </div>

      <div>
        <h3 className="text-lg font-bold text-primary-900 mb-3">1. البيانات التي نجمعها</h3>
        <p className="mb-3">نجمع الأنواع التالية من البيانات:</p>
        <ul className="list-disc list-inside space-y-2 mr-4">
          <li><strong>بيانات التسجيل:</strong> الاسم، رقم الهاتف، البريد الإلكتروني، والعنوان.</li>
          <li><strong>بيانات الطلبات:</strong> تفاصيل الطلبات، المنتجات المشتراة، وتاريخ الطلبات.</li>
          <li><strong>بيانات الموقع:</strong> موقعك الجغرافي لتوفير خدمة التوصيل.</li>
          <li><strong>بيانات الجهاز:</strong> نوع الجهاز، نظام التشغيل، ومعرّف الجهاز.</li>
          <li><strong>بيانات الاستخدام:</strong> كيفية تفاعلك مع التطبيق والصفحات التي تزورها.</li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-bold text-primary-900 mb-3">2. كيف نستخدم بياناتك</h3>
        <ul className="list-disc list-inside space-y-2 mr-4">
          <li>تقديم وتحسين خدماتنا وتنفيذ طلباتك.</li>
          <li>التواصل معك بشأن طلباتك وتحديثات الخدمة.</li>
          <li>تحسين تجربة المستخدم وتخصيص المحتوى.</li>
          <li>ضمان أمان المنصة ومنع الاحتيال.</li>
          <li>الامتثال للمتطلبات القانونية والتنظيمية.</li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-bold text-primary-900 mb-3">3. مشاركة البيانات</h3>
        <p className="mb-3">لا نبيع بياناتك الشخصية. قد نشارك بياناتك في الحالات التالية:</p>
        <ul className="list-disc list-inside space-y-2 mr-4">
          <li>مع التجار والسائقين لتنفيذ طلباتك.</li>
          <li>مع مزودي الخدمات التقنية الذين يساعدوننا في تشغيل المنصة.</li>
          <li>عند الطلب من جهات قانونية مختصة.</li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-bold text-primary-900 mb-3">4. حماية البيانات</h3>
        <p>نستخدم تقنيات تشفير متقدمة وإجراءات أمنية صارمة لحماية بياناتك من الوصول غير المصرح به أو الاستخدام غير المشروع أو الإفصاح أو التعديل أو الإتلاف.</p>
      </div>

      <div>
        <h3 className="text-lg font-bold text-primary-900 mb-3">5. حقوقك</h3>
        <ul className="list-disc list-inside space-y-2 mr-4">
          <li>الوصول لبياناتك الشخصية المخزنة لدينا.</li>
          <li>طلب تصحيح أو تحديث بياناتك.</li>
          <li>طلب حذف حسابك وبياناتك.</li>
          <li>الاعتراض على معالجة بياناتك لأغراض تسويقية.</li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-bold text-primary-900 mb-3">6. التواصل</h3>
        <p>لأي استفسارات حول سياسة الخصوصية، تواصل معنا عبر البريد الإلكتروني: privacy@wefrh.com</p>
      </div>
    </div>
  );
}
