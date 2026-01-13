import DropdownList from "../components/DropdownList.jsx";
import { useState, useRef, useEffect } from "react";

export default function BrowseClasses() {
  const [activeTab, setActiveTab] = useState("classes");
  const tabsRef = useRef([]);
  const underlineRef = useRef(null);

  const classData = [
    {
      category: "College (MiamiOH Courses) - 🎓",
      subjects: [
        {
          subject: "MTH (Mathematics) - 📐",
          classes: [
            "MTH 151 — Calculus I",
            "MTH 251 — Calculus II",
            "MTH 246 — Linear Algebra and Differential Equations for Engineers",
          ],
        },
        {
          subject: "CHM (Chemistry & Biochemistry) - 🔬",
          classes: [
            "CHM 141 — Chemistry",
            "CHM 144 — Chemistry Laboratory",
            "CHM 142 — Chemistry (II)",
            "CHM 145 — Chemistry Laboratory (II)",
            "CHM 241 — Organic Chemistry",
            "CHM 244 — Organic Chemistry Laboratory",
            "CHM 251 — Organic Chemistry for Chemistry Majors",
          ],
        },
        {
          subject: "PHY (Physics) - ⚛️",
          classes: ["PHY 181 — Physics I", "PHY 182 — Physics II"],
        },
        {
          subject: "BIO (Biology) - 🧬",
          classes: [
            "BIO 116 — Biological Concepts: Structure, Function, Cellular, and Molecular Biology",
          ],
        },
      ],
    },
    {
      category: "High School - 🏫",
      subjects: [
        {
          subject: "Math - 📐",
          classes: [
            "Algebra I & II",
            "Geometry",
            "Pre-Calculus",
            "AP Calculus AB",
            "AP Calculus BC",
            "IB Mathematics: Analysis & Approaches (SL/HL)",
            "IB Mathematics: Applications & Interpretation (SL/HL)",
          ],
        },
        {
          subject: "English - 📚",
          classes: [
            "9th - 12th Grade English",
            "AP Seminar",
            "AP Research",
            "AP English Language and Composition",
            "AP English Literature and Composition",
            "IB Language & Literature (SL/HL)",
            "IB Literature (SL/HL)",
          ],
        },
        {
          subject: "Social Studies - 🌍",
          classes: [
            "AP U.S. Government and Politics",
            "AP Human Geography",
            "AP Psychology",
            "IB History (SL/HL)",
            "IB Psychology (SL/HL)",
          ],
        },
        {
          subject: "Science - 🔬",
          classes: [
            "AP Physics 1",
            "AP Physics C: Mechanics / Electricity & Magnetism",
            "AP Chemistry",
            "AP Biology",
            "IB Biology (SL/HL)",
          ],
        },
      ],
    },
    {
      category: "Elementary/Intermediate - 📖",
      subjects: [
        {
          subject: "Math - 📐",
          classes: ["1st Grade Math", "2nd - 8th Grade Math", "Pre-Algebra"],
        },
        {
          subject: "English - 📚",
          classes: [
            "1st - 8th Grade English",
            "Reading Comprehension",
            "Writing Skills",
          ],
        },
      ],
    },
    {
      category: "Test Prep - 📝",
      subjects: [
        {
          subject: "Standardized Tests",
          classes: ["SAT Prep", "ACT Prep"],
        },
      ],
    },
  ];

  const faqData = [
    {
      question: "Who do you tutor?",
      answer:
        "We tutor anyone that we can help! From elementary to college, if you are struggling in a class or subject, we are here!",
    },
    {
      question: "Are tutoring sessions online or in person?",
      answer:
        "This is up to the discretion of the student. If they would prefer in person, then communicate with your tutor, and a spot can be set up. If the student prefers to do online, then a Google Meet can be set up. Just communicate with your tutor, and the best plan can be created!\n",
    },
    {
      question: "How much do you charge?",
      answer:
        "We charge $40 per hour for each 1-on-1 session. Group sessions can be offered by request at a reduced rate. Sessions can be at most three days a week or scheduled as needed. Communicate with your tutor to find a reliable schedule. \n",
    },
    {
      question: "Do you offer group sessions?",
      answer:
        "Yes! Group sessions are available by request at a reduced rate. However, no more than 3 students can be in one session. ",
    },
  ];

  useEffect(() => {
    const updateUnderline = () => {
      const currentTab = tabsRef.current.find(
        (tab) => tab.dataset.tab === activeTab
      );
      if (currentTab && underlineRef.current) {
        underlineRef.current.style.width = `${currentTab.offsetWidth}px`;
        underlineRef.current.style.left = `${currentTab.offsetLeft}px`;
      }
    };

    // Wait until the DOM has painted
    requestAnimationFrame(updateUnderline);

    // Listen to window resize events
    window.addEventListener("resize", updateUnderline);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", updateUnderline);
    };
  }, [activeTab]);

  return (
    <section
      id="classes"
      className="relative px-4 py-12 bg-white"
      data-aos="fade-up"
    >
      <div className="relative max-w-5xl mx-auto z-10">
        {/* Vertical Lines */}
        <div className="hidden lg:block absolute top-0 bottom-0 left-0 ml-4 w-1 bg-[#042D71]"></div>
        <div className="hidden lg:block absolute top-0 bottom-0 right-0 mr-4 w-1 bg-[#042D71]"></div>

        {/* Tabs */}
        <div className="relative flex justify-center mb-6">
          {/* Underline */}
          <div
            ref={underlineRef}
            className="absolute bottom-0 h-[2px] bg-[#042D71] transition-all duration-300 ease-in-out"
          ></div>

          <button
            ref={(el) => (tabsRef.current[0] = el)}
            data-tab="classes"
            className={`px-4 py-2 font-semibold ${
              activeTab === "classes" ? "text-[#042D71]" : "text-gray-600"
            }`}
            onClick={() => setActiveTab("classes")}
          >
            Browse Classes
          </button>
          <button
            ref={(el) => (tabsRef.current[1] = el)}
            data-tab="faqs"
            className={`px-4 py-2 font-semibold ml-4 ${
              activeTab === "faqs" ? "text-[#042D71]" : "text-gray-600"
            }`}
            onClick={() => setActiveTab("faqs")}
          >
            FAQs
          </button>
        </div>

        {/* Dropdown List with fade-in animation */}
        <div
          className={`transition-all duration-500 ease-in-out ${
            activeTab === "classes"
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
          {activeTab === "classes" && (
            <DropdownList
              activeTab={activeTab}
              classData={classData}
              faqData={faqData}
            />
          )}
        </div>
        <div
          className={`transition-all duration-500 ease-in-out ${
            activeTab === "faqs"
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
          {activeTab === "faqs" && (
            <DropdownList
              activeTab={activeTab}
              classData={classData}
              faqData={faqData}
            />
          )}
        </div>
      </div>
    </section>
  );
}
