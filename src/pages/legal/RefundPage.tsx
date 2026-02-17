export default function RefundPage() {
  return (
    <div className="space-y-8 text-gray-700 leading-relaxed">
      <div>
        <h2 className="text-2xl font-bold text-primary-900 mb-4">سياسة الاسترجاع والاستبدال</h2>
        <p className="text-sm text-gray-500 mb-6">آخر تحديث: فبراير 2025</p>
        <p>نحرص في وفرة على رضا عملائنا. توضح هذه السياسة شروط وإجراءات استرجاع واستبدال المنتجات.</p>
      </div>
      <div>
        <h3 className="text-lg font-bold text-primary-900 mb-3">1. شروط الاسترجاع</h3>
        <ul className="list-disc list-inside space-y-2 mr-4">
          <li>يمكن طلب الاسترجاع خلال 24 ساعة من استلام الطلب.</li>
          <li>المنتج يجب أن يكون بحالته الأصلية وغير مستخدم.</li>
          <li>يجب توفر إثبات الشراء (رقم الطلب).</li>
          <li>المنتجات الغذائية القابلة للتلف لا تقبل الاسترجاع إلا في حالة وجود عيب.</li>
          <li>الأدوية لا تقبل الاسترجاع لأسباب صحية وسلامة إلا في حالة خطأ في الطلب.</li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-bold text-primary-900 mb-3">2. حالات الاسترجاع المقبولة</h3>
        <ul className="list-disc list-inside space-y-2 mr-4">
          <li>استلام منتج خاطئ يختلف عما تم طلبه.</li>
          <li>استلام منتج تالف أو معيب.</li>
          <li>عدم مطابقة المنتج للوصف المعروض.</li>
          <li>نقص في محتويات الطلب.</li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-bold text-primary-900 mb-3">3. إجراءات الاسترجاع</h3>
        <ol className="list-decimal list-inside space-y-2 mr-4">
          <li>تواصل مع فريق الدعم عبر التطبيق أو الهاتف.</li>
          <li>وضّح سبب الاسترجاع مع صور توضيحية إن أمكن.</li>
          <li>انتظر موافقة فريق الدعم على طلب الاسترجاع.</li>
          <li>في حال الموافقة، سيتم ترتيب استلام المنتج أو استرداد المبلغ.</li>
        </ol>
      </div>
      <div>
        <h3 className="text-lg font-bold text-primary-900 mb-3">4. الاستبدال</h3>
        <p>في حال توفر المنتج البديل، يمكننا استبدال المنتج بدلاً من الاسترجاع. يتم ذلك بنفس إجراءات الاسترجاع.</p>
      </div>
      <div>
        <h3 className="text-lg font-bold text-primary-900 mb-3">5. استرداد المبلغ</h3>
        <p>في حال الموافقة على الاسترجاع، يتم استرداد المبلغ بنفس طريقة الدفع الأصلية خلال 3-7 أيام عمل.</p>
      </div>
      <div>
        <h3 className="text-lg font-bold text-primary-900 mb-3">6. التواصل</h3>
        <p>لطلبات الاسترجاع والاستبدال: support@wefrh.com</p>
      </div>
    </div>
  );
}
