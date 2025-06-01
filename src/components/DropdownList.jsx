import { useState, useRef, useEffect } from 'react';

export default function DropdownList({ activeTab, classData, faqData }) {
    // Sub-component: AccordionItem
    function AccordionItem({ title, children }) {
        const [isOpen, setIsOpen] = useState(false);
        const contentRef = useRef(null);
        const [height, setHeight] = useState(0);

        useEffect(() => {
            if (isOpen) {
                setHeight(contentRef.current.scrollHeight);
            } else {
                setHeight(0);
            }
        }, [isOpen]);

        return (
            <div className="border border-gray-300 rounded-lg overflow-hidden">
                <button
                    className="w-full flex justify-between items-center text-left px-4 py-3 font-semibold text-lg focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {title}
                    <span
                        className={`transform transition-transform duration-300 ${
                            isOpen ? 'rotate-180' : ''
                        }`}
                    >
          ▼
        </span>
                </button>
                <div
                    ref={contentRef}
                    className="px-4 overflow-hidden transition-all duration-500 ease-in-out"
                    style={{ maxHeight: `${height}px` }}
                >
                    <div className="py-2">{children}</div>
                </div>
            </div>
        );
    }

    // Main dropdown list logic
    return (
        <div className="space-y-4 max-w-3xl mx-auto z-10">
            {activeTab === 'classes'
                ? classData.map((item, index) => (
                    <AccordionItem key={index} title={item.subject}>
                        <ul className="ml-4 list-disc text-gray-700">
                            {item.classes.map((className, idx) => (
                                <li key={idx}>{className}</li>
                            ))}
                        </ul>
                    </AccordionItem>
                ))
                : faqData.map((faq, index) => (
                    <AccordionItem key={index} title={faq.question}>
                        <p className="mt-2 text-gray-700">{faq.answer}</p>
                    </AccordionItem>
                ))}
        </div>
    );
}