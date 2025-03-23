// src/app/portfolio/page.tsx
import Page from "@/components/Page";

// Static metadata
export const metadata = {
  title: "Portfolio | Jillian Mae Belegorio",
};

export default function Portfolio() {
  const projects = [
    {
      title: "Bookkeeping Overhaul for Sweet Delights Bakery",
      description:
        "Revamped the financial record-keeping system for a local bakery with 10+ employees, transitioning from manual spreadsheets to QuickBooks. Reduced monthly reconciliation time by 30% and ensured accurate expense tracking.",
      details: {
        duration: "January 2023 - March 2023",
        client: "Sweet Delights Bakery, [City], Philippines",
        tools: "QuickBooks, Microsoft Excel",
        outcome: "Saved the owner 10 hours monthly and identified $2,000 in untracked expenses.",
      },
      testimonial: "“Jillian transformed our chaotic books into a clear system we can rely on!” — Maria Santos, Owner",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-12 h-12 text-slate-900 dark:text-slate-50 flex-shrink-0"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
          />
        </svg>
      ), // Heroicons "Book Open"
    },
    {
      title: "Tax Filing Optimization for Freelance Designer",
      description:
        "Prepared and filed annual taxes for a freelance graphic designer, navigating complex self-employment regulations. Identified $1,500 in overlooked deductions, including home office and equipment expenses.",
      details: {
        duration: "February 2024 - April 2024",
        client: "John Dela Cruz, Freelance Designer",
        tools: "TaxAct, Microsoft Excel",
        outcome: "Reduced tax liability by 20% and ensured full compliance with local tax laws.",
      },
      testimonial: "“Jillian saved me money and made tax season stress-free!” — John Dela Cruz",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-12 h-12 text-slate-900 dark:text-slate-50 flex-shrink-0"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
          />
        </svg>
      ), // Heroicons "Document Text"
    },
    {
      title: "Financial Analysis for Tech Startup Pitch",
      description:
        "Developed a comprehensive financial analysis report for a tech startup seeking seed funding. Included revenue projections, cost breakdowns, and cash flow statements, contributing to a successful $50,000 investment.",
      details: {
        duration: "June 2023 - August 2023",
        client: "InnoTech Solutions, [City], Philippines",
        tools: "Microsoft Excel, Google Sheets",
        outcome: "Enabled the startup to secure funding by presenting clear financial insights.",
      },
      testimonial: "“Her analysis gave us the edge we needed to impress investors!” — Carlo Reyes, CEO",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-12 h-12 text-slate-900 dark:text-slate-50 flex-shrink-0"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
          />
        </svg>
      ), // Heroicons "Bar Chart"
    },
    {
      title: "Budget Planning for Community Non-Profit",
      description:
        "Designed a detailed budget plan for a non-profit focused on education, optimizing $10,000 in annual funds. Allocated resources across programs, ensuring sustainability and transparency.",
      details: {
        duration: "September 2022 - November 2022",
        client: "LearnBright Foundation, [City], Philippines",
        tools: "Microsoft Excel, Google Sheets",
        outcome: "Increased program funding by 15% through efficient resource allocation.",
      },
      testimonial: "“Jillian’s budgeting skills kept our mission on track!” — Ana Lim, Director",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-12 h-12 text-slate-900 dark:text-slate-50 flex-shrink-0"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9"
          />
        </svg>
      ), // Heroicons "Wallet"
    },
  ];

  return (
    <Page>
      <main className="mt-[100px] container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-50 text-center">
          My Portfolio
        </h1>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 text-center max-w-2xl mx-auto">
          Explore a selection of my accountancy projects, demonstrating practical solutions and measurable results for clients across various sectors.
        </p>

        <div className="mt-12 space-y-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white dark:bg-[#18232c] rounded-lg shadow-md p-6 flex flex-col md:flex-row items-start gap-6 transition-all hover:shadow-lg"
            >
              <div className="flex-shrink-0">{project.icon}</div>
              <div className="flex-1 space-y-4">
                <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50">
                  {project.title}
                </h2>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  {project.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-500 dark:text-slate-400">
                  <p>
                    <strong>Duration:</strong> {project.details.duration}
                  </p>
                  <p>
                    <strong>Client:</strong> {project.details.client}
                  </p>
                  <p>
                    <strong>Tools:</strong> {project.details.tools}
                  </p>
                  <p>
                    <strong>Outcome:</strong> {project.details.outcome}
                  </p>
                </div>
                <blockquote className="text-sm italic text-slate-600 dark:text-slate-300 border-l-4 border-blue-500 pl-4">
                  {project.testimonial}
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </main>
    </Page>
  );
}