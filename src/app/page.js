// src/app/page.tsx
import Page from "@/components/Page";
import Hero from "@/components/Hero";

export const metadata = {
  title: "Home | Jillian Mae Belegorio",
};

export default function Home() {
  return (
    <Page>
      {/* Background Image */}
      <div className="hidden md:block fixed -z-50 -right-[100px] top-1/4 opacity-10 dark:opacity-5 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=500&auto=format&fit=crop"
          alt="Abstract financial background"
          className="w-[500px] h-auto"
        />
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <Hero
          title="Hi, I’m Jillian Mae Belegorio"
          description="An Accountancy graduate from Saint Paul School of Professional Studies, passionate about simplifying finances for small businesses and individuals."
        />
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="/about"
            className="inline-block px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all"
          >
            Learn More
          </a>
          <a
            href="/contact"
            className="inline-block px-6 py-2 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-md hover:bg-blue-50 dark:hover:bg-[#18232c] transition-all"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* Welcome Message */}
      <section className="container mx-auto px-4 py-12 text-center">
        <div className="flex justify-center mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-12 h-12 text-blue-600 dark:text-blue-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
            />
          </svg>
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-slate-50">
          Welcome to My World of Numbers
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          I specialize in turning financial chaos into clarity, offering tailored solutions in bookkeeping, tax preparation, and more. Let’s work together to achieve your financial goals!
        </p>
      </section>
    </Page>
  );
}