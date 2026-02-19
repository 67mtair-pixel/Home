import StatsCounter from '../../components/shared/StatsCounter';

const stats = [
  { value: 50000, suffix: '+', label: 'طلب تم تنفيذه' },
  { value: 500, suffix: '+', label: 'تاجر وشريك' },
  { value: 200, suffix: '+', label: 'سائق ومندوب' },
  { value: 15, suffix: '+', label: 'منطقة تغطية' },
];

export default function StatsSection() {
  return (
    <section className="bg-gradient-to-br from-primary-700 via-primary-600 to-primary-700 section-padding relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-accent-400 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary-400 rounded-full blur-3xl" />
      </div>
      <div className="container-custom relative z-10">
        <StatsCounter stats={stats} light />
      </div>
    </section>
  );
}
