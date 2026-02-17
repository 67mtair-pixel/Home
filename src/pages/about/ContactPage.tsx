import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import PageHero from '../../components/shared/PageHero';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const contactInfo = [
  { icon: <Phone className="w-5 h-5" />, title: 'الهاتف', value: '+970 59 123 4567', href: 'tel:+970591234567' },
  { icon: <Mail className="w-5 h-5" />, title: 'البريد الإلكتروني', value: 'info@wefrh.com', href: 'mailto:info@wefrh.com' },
  { icon: <MapPin className="w-5 h-5" />, title: 'العنوان', value: 'غزة، فلسطين', href: null },
  { icon: <Clock className="w-5 h-5" />, title: 'ساعات العمل', value: 'السبت - الخميس: 8:00 - 20:00', href: null },
];

const socialLinks = [
  { icon: <Facebook className="w-5 h-5" />, label: 'Facebook', href: '#' },
  { icon: <Twitter className="w-5 h-5" />, label: 'Twitter', href: '#' },
  { icon: <Instagram className="w-5 h-5" />, label: 'Instagram', href: '#' },
  { icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn', href: '#' },
];

export default function ContactPage() {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '', email: '', subject: '', message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('شكراً لرسالتك! سنتواصل معك قريباً.');
  };

  return (
    <>
      <PageHero
        title="تواصل معنا"
        description="نحن هنا لمساعدتك. تواصل معنا بأي طريقة تناسبك."
        breadcrumbs={[{ label: 'عن وفرة' }, { label: 'تواصل معنا' }]}
      />

      <section className="section-padding">
        <div className="container-custom">
          <div
            ref={ref}
            className={`grid lg:grid-cols-3 gap-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
          >
            <div className="lg:col-span-1 space-y-6">
              {contactInfo.map((info, i) => (
                <div key={i} className="bg-white rounded-2xl p-5 border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary-50 text-primary-600">
                      {info.icon}
                    </span>
                    <div>
                      <p className="text-xs text-gray-500 mb-0.5">{info.title}</p>
                      {info.href ? (
                        <a href={info.href} className="text-sm font-semibold text-primary-900 hover:text-primary-600 transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-sm font-semibold text-primary-900">{info.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              <div className="bg-white rounded-2xl p-5 border border-gray-100">
                <p className="text-sm font-semibold text-primary-900 mb-3">تابعنا على</p>
                <div className="flex gap-2">
                  {socialLinks.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      className="w-10 h-10 flex items-center justify-center rounded-xl bg-primary-50 text-primary-600 hover:bg-primary-600 hover:text-white transition-colors"
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-gray-100 shadow-lg p-8 space-y-5">
                <h2 className="text-xl font-bold text-primary-900 mb-2">أرسل لنا رسالة</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-primary-900 mb-1.5">الاسم</label>
                    <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-primary-600 focus:ring-2 focus:ring-primary-100 outline-none transition-all text-sm" placeholder="اسمك الكامل" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary-900 mb-1.5">البريد الإلكتروني</label>
                    <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-primary-600 focus:ring-2 focus:ring-primary-100 outline-none transition-all text-sm" placeholder="example@email.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary-900 mb-1.5">الموضوع</label>
                  <input type="text" required value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-primary-600 focus:ring-2 focus:ring-primary-100 outline-none transition-all text-sm" placeholder="موضوع الرسالة" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary-900 mb-1.5">الرسالة</label>
                  <textarea required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows={5} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-primary-600 focus:ring-2 focus:ring-primary-100 outline-none transition-all text-sm resize-none" placeholder="اكتب رسالتك هنا..." />
                </div>
                <button type="submit" className="w-full py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-colors">
                  أرسل الرسالة
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
