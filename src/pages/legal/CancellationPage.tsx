export default function CancellationPage() {
  return (
    <div className="space-y-8 text-gray-700 leading-relaxed">
      <div>
        <h2 className="text-2xl font-bold text-primary-900 mb-4">سياسة الإلغاء</h2>
        <p className="text-sm text-gray-500 mb-6">آخر تحديث: فبراير 2025</p>
        <p>توضح هذه السياسة شروط وأحكام إلغاء الطلبات على منصة وفرة.</p>
      </div>
      <div>
        <h3 className="text-lg font-bold text-primary-900 mb-3">1. إلغاء الطلب قبل التجهيز</h3>
        <ul className="list-disc list-inside space-y-2 mr-4">
          <li>يمكنك إلغاء طلبك مجاناً قبل أن يبدأ التاجر في تجهيزه.</li>
          <li>الإلغاء متاح من صفحة تفاصيل الطلب في التطبيق.</li>
          <li>في حال الدفع الإلكتروني، يتم استرداد المبلغ كاملاً.</li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-bold text-primary-900 mb-3">2. إلغاء الطلب أثناء التجهيز</h3>
        <ul className="list-disc list-inside space-y-2 mr-4">
          <li>إذا بدأ التاجر في تجهيز الطلب، قد لا يكون الإلغاء ممكناً.</li>
          <li>تواصل مع فريق الدعم وسنحاول مساعدتك.</li>
          <li>قد يتم خصم رسوم تجهيز حسب مرحلة الإعداد.</li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-bold text-primary-900 mb-3">3. إلغاء الطلب أثناء التوصيل</h3>
        <ul className="list-disc list-inside space-y-2 mr-4">
          <li>لا يمكن إلغاء الطلب بعد أن يستلمه المندوب للتوصيل.</li>
          <li>في حالات استثنائية، تواصل مع الدعم لبحث الخيارات المتاحة.</li>
          <li>قد يتم تطبيق رسوم التوصيل في هذه الحالة.</li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-bold text-primary-900 mb-3">4. إلغاء متكرر</h3>
        <p>نحتفظ بحق اتخاذ إجراءات مناسبة في حالة الإلغاء المتكرر غير المبرر، بما في ذلك تقييد بعض الخدمات مؤقتاً.</p>
      </div>
      <div>
        <h3 className="text-lg font-bold text-primary-900 mb-3">5. إلغاء من طرف وفرة</h3>
        <p className="mb-3">قد نلغي طلبك في الحالات التالية:</p>
        <ul className="list-disc list-inside space-y-2 mr-4">
          <li>عدم توفر المنتج أو الخدمة المطلوبة.</li>
          <li>عدم التمكن من التواصل معك للتأكيد.</li>
          <li>وجود خطأ في التسعير أو المعلومات المعروضة.</li>
          <li>أسباب أمنية أو تشغيلية.</li>
        </ul>
        <p className="mt-3">في حال الإلغاء من طرفنا، يتم استرداد المبلغ كاملاً.</p>
      </div>
      <div>
        <h3 className="text-lg font-bold text-primary-900 mb-3">6. التواصل</h3>
        <p>لأي استفسارات حول الإلغاء: support@wefrh.com</p>
      </div>
    </div>
  );
}
