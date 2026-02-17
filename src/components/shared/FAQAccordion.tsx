import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div
          key={i}
          className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-primary-200 transition-colors"
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="flex items-center justify-between w-full px-6 py-4 text-right"
          >
            <span className="font-semibold text-primary-900 text-sm md:text-base">{item.question}</span>
            <ChevronDown
              className={`w-5 h-5 text-primary-600 transition-transform shrink-0 mr-4 ${
                openIndex === i ? 'rotate-180' : ''
              }`}
            />
          </button>
          <div
            className={`grid transition-all duration-300 ${
              openIndex === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
            }`}
          >
            <div className="overflow-hidden">
              <p className="px-6 pb-4 text-sm text-gray-600 leading-relaxed">{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
