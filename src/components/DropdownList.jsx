import { useState, useRef, useEffect, cloneElement, Children } from "react";

export default function DropdownList({ activeTab, classData, faqData }) {
  // Sub-component: AccordionItem
  function AccordionItem({ title, children, parentIsOpen = true }) {
    const [isOpen, setIsOpen] = useState(false);
    const innerContentRef = useRef(null);
    const [height, setHeight] = useState(0);

    // Close child accordions when parent closes
    useEffect(() => {
      if (!parentIsOpen && isOpen) {
        setIsOpen(false);
      }
    }, [parentIsOpen, isOpen]);

    // Handle height updates when accordion opens/closes or content changes
    useEffect(() => {
      if (!isOpen) {
        setHeight(0);
        return;
      }

      if (!innerContentRef.current) return;

      const updateHeight = () => {
        if (innerContentRef.current) {
          setHeight(innerContentRef.current.scrollHeight);
        }
      };

      // Initial height calculation
      updateHeight();

      // Use ResizeObserver to watch for size changes (including nested accordions)
      const resizeObserver = new ResizeObserver(() => {
        updateHeight();
      });

      // Observe the inner content container - ResizeObserver will catch all nested changes
      resizeObserver.observe(innerContentRef.current);

      return () => {
        resizeObserver.disconnect();
      };
    }, [isOpen]);

    return (
      <div className="border border-gray-300 rounded-lg overflow-hidden accordion-container">
        <button
          className="w-full flex justify-between items-center text-left px-4 py-3 font-semibold text-lg focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {title}
          <span
            className={`transform transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            ▼
          </span>
        </button>
        <div
          className="px-4 overflow-hidden transition-all duration-500 ease-in-out"
          style={{ maxHeight: `${height}px` }}
        >
          <div ref={innerContentRef} className="py-2">
            {Children.map(children, (child) => {
              // Recursive function to clone AccordionItems with parentIsOpen
              const cloneWithParentState = (element) => {
                if (!element || typeof element !== "object") return element;

                // Check if this is an AccordionItem by checking component name or structure
                if (
                  element.type &&
                  (element.type === AccordionItem ||
                    element.type.displayName === "AccordionItem" ||
                    element.type.name === "AccordionItem")
                ) {
                  return cloneElement(element, { parentIsOpen: isOpen });
                }

                // If it has children, recursively process them
                if (element.props && element.props.children) {
                  return cloneElement(element, {
                    ...element.props,
                    children: Children.map(
                      element.props.children,
                      cloneWithParentState
                    ),
                  });
                }

                return element;
              };

              return cloneWithParentState(child);
            })}
          </div>
        </div>
      </div>
    );
  }

  // Set displayName for AccordionItem to help with identification
  AccordionItem.displayName = "AccordionItem";

  // Main dropdown list logic
  return (
    <div className="space-y-4 max-w-3xl mx-auto z-10">
      {activeTab === "classes"
        ? classData.map((category, categoryIndex) => (
            <AccordionItem key={categoryIndex} title={category.category}>
              <div className="space-y-3">
                {category.subjects.map((subject, subjectIndex) => (
                  <AccordionItem key={subjectIndex} title={subject.subject}>
                    <ul className="ml-4 list-disc text-gray-700">
                      {subject.classes.map((className, idx) => (
                        <li key={idx} className="mb-1">
                          {className}
                        </li>
                      ))}
                    </ul>
                  </AccordionItem>
                ))}
              </div>
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
