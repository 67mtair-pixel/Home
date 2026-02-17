export default function ShippingPage() {
  return (
    <div className="space-y-8 text-gray-700 leading-relaxed">
      <div>
        <h2 className="text-2xl font-bold text-primary-900 mb-4">سياسة الشحن والتوصيل</h2>
        <p className="text-sm text-gray-500 mb-6">آخر تحديث: فبراير 2025</p>
        <p>توضح هذه السياسة شروط وأحكام خدمة التوصيل عبر منصة وفرة.</p>
      </div>
      <div>
        <h3 className="text-lg font-bold text-primary-900 mb-3">1. مناطق التغطية</h3>
        <p>وفرة تغطي حالياً معظم مناطق قطاع غزة. يمكنك التحقق من توفر خدمة التوصيل في منطقتك عبر التطبيق عند إدخال عنوانك.</p>
      </div>
      <div>
        <h3 className="text-lg font-bold text-primary-900 mb-3">2. أوقات التوصيل</h3>
        <ul className="list-disc list-inside space-y-2 mr-4">
          <li>الطلبات العادية: 30-60 دقيقة حسب الموقع والطلب.</li>
          <li>طلبات الأدوية: نسعى للتوصيل خلال ساعة واحدة.</li>
          <li>طلبات الغاز: حسب التوفر والموقع.</li>
          <li>قد تتأثر الأوقات في أوقات الذروة أو الظروف الاستثنائية.</li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-bold text-primary-900 mb-3">3. رسوم التوصيل</h3>
        <ul className="list-disc list-inside space-y-2 mr-4">
          <li>رسوم التوصيل تبدأ من 10 شيكل.</li>
          <li>قد تختلف الرسوم حسب المسافة ونوع الطلب.</li>
          <li>يتم عرض رسوم التوصيل بوضوح قبل تأكيد الطلب.</li>
          <li>قد تتوفر عروض توصيل مجاني على بعض الطلبات.</li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-bold text-primary-900 mb-3">4. تتبع الطلب</h3>
        <p>يمكنك تتبع طلبك لحظياً عبر التطبيق من لحظة تأكيده حتى وصوله لعنوانك. ستتلقى إشعارات بكل تحديث على حالة الطلب.</p>
      </div>
      <div>
        <h3 className="text-lg font-bold text-primary-900 mb-3">5. استلام الطلب</h3>
        <ul className="list-disc list-inside space-y-2 mr-4">
          <li>يجب أن يكون شخص متواجد على العنوان لاستلام الطلب.</li>
          <li>تأكد من صحة العنوان ورقم الهاتف عند الطلب.</li>
          <li>في حالة عدم التواجد، سيحاول المندوب الاتصال بك.</li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-bold text-primary-900 mb-3">6. التواصل</h3>
        <p>لأي استفسارات حول التوصيل: support@wefrh.com</p>
      </div>
    </div>
  );
}
