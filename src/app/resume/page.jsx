// src/app/resume/page.tsx
import Page from "@/components/Page";
import Link from "next/link";

// Static metadata
export const metadata = {
  title: "Resume | Jillian Mae Belegorio",
};

export default function Resume() {
  const resumeSections = [
    {
      title: "Education",
      items: [
        {
          name: "Bachelor of Science in Accountancy",
          details: "[University Name], Philippines — Graduated [Year]",
          description: "Focused on financial reporting, auditing, and taxation, with a strong foundation in accounting principles.",
        },
      ],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-12 h-12 text-slate-900 dark:text-slate-50"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
          />
        </svg>
      ), // Heroicons "Academic Cap"
    },
    {
      title: "Experience",
      items: [
        {
          name: "Freelance Accountant",
          details: "Self-Employed — [Year] - Present",
          description: "Provided bookkeeping, tax preparation, and financial analysis services to small businesses and individuals.",
        },
        {
          name: "Accounting Intern",
          details: "[Company Name], Philippines — [Year]",
          description: "Assisted with preparing financial statements and conducting audits for local clients.",
        },
      ],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-12 h-12 text-slate-900 dark:text-slate-50"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3A2.25 2.25 0 0 0 7.5 5.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
          />
        </svg>
      ), // Heroicons "Briefcase"
    },
    {
      title: "Skills",
      items: [
        { name: "Financial Reporting" },
        { name: "Tax Compliance" },
        { name: "Bookkeeping (QuickBooks, Excel)" },
        { name: "Budgeting & Forecasting" },
        { name: "Payroll Processing" },
      ],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-12 h-12 text-slate-900 dark:text-slate-50"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
      ), // Heroicons "Cog"
    },
    {
      title: "Certifications",
      items: [
        { name: "[Certification Name, e.g., CPA in Progress]", details: "[Issuing Body] — [Year]" },
      ],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-12 h-12 text-slate-900 dark:text-slate-50"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25h-4.5A2.25 2.25 0 0 0 7.5 6v2.25m9 0H18A2.25 2.25 0 0 1 20.25 10.5v.243m0 0a3.64 3.64 0 0 1-.621 2.023L17.25 15.84a3.593 3.593 0 0 1-2.475 1.41M16.5 8.25H7.5m0 0H6A2.25 2.25 0 0 0 3.75 10.5v.243m0 0c.419 1.186 1.445 2.01 2.621 2.023L6.75 15.84a3.593 3.593 0 0 0 2.475 1.41m0 0 1.125 6.75m-4.5-6.75 1.125 6.75m0 0a2.25 2.25 0 0 0 4.5 0M10.5 18l1.125-6.75M13.5 18l-1.125-6.75"
          />
        </svg>
      ), // Heroicons "Award"
    },
  ];

  return (
    <Page>
      <main className="mt-[100px] container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-50 text-center">
          My Resume
        </h1>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 text-center max-w-2xl mx-auto">
          A summary of my education, experience, and skills as an accountancy professional.
        </p>

        <div className="mt-12 space-y-12">
          {resumeSections.map((section) => (
            <div key={section.title} className="bg-white dark:bg-[#18232c] rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="mr-4">{section.icon}</div>
                <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-50">
                  {section.title}
                </h2>
              </div>
              <div className="space-y-4">
                {section.items.map((item) => (
                  <div key={item.name} className="text-slate-600 dark:text-slate-300">
                    <p className="text-lg font-medium text-slate-900 dark:text-slate-50">
                      {item.name}
                    </p>
                    {item.details && (
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        {item.details}
                      </p>
                    )}
                    {item.description && <p className="mt-1 text-sm">{item.description}</p>}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/resume.pdf"
            className="inline-block px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download PDF Resume
          </Link>
        </div>
      </main>
    </Page>
  );
}