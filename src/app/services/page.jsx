// src/app/services/page.tsx
import Page from "@/components/Page";

// Static metadata
export const metadata = {
  title: "Services | Jillian Mae Belegorio",
};

export default function Services() {
  const services = [
    {
      title: "Bookkeeping",
      description: "Keep your financial records organized and up-to-date with detailed tracking and reporting.",
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
            d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
          />
        </svg>
      ), // Heroicons "Book Open"
    },
    {
      title: "Tax Preparation",
      description: "Ensure compliance and maximize deductions with expert tax filing assistance.",
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
            d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
          />
        </svg>
      ), // Heroicons "Document Text"
    },
    {
      title: "Financial Analysis",
      description: "Gain insights into your financial health with detailed reports and forecasts.",
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
            d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
          />
        </svg>
      ), // Heroicons "Bar Chart"
    },
    {
      title: "Budget Planning",
      description: "Achieve your financial goals with customized budget plans tailored to your needs.",
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
            d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9"
          />
        </svg>
      ), // Heroicons "Wallet"
    },
    {
      title: "Payroll Management",
      description: "Streamline payroll processing for timely and accurate employee payments.",
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
            d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
          />
        </svg>
      ), // Heroicons "Users"
    },
  ];

  return (
    <Page>
      <main className="mt-[100px] container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-50 text-center">
          My Services
        </h1>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 text-center max-w-2xl mx-auto">
          As an accountancy graduate, I provide professional services to help individuals and small businesses manage their finances with precision and care.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white dark:bg-[#18232c] rounded-lg shadow-md p-6 flex flex-col items-center text-center transition-all hover:shadow-lg"
            >
              <div className="mb-4">{service.icon}</div>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-2">
                {service.title}
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </main>
    </Page>
  );
}