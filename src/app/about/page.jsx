// src/app/about/page.tsx
import Image from "next/image";
import Page from "@/components/Page";

// Static metadata
export const metadata = {
  title: "About | Jillian Mae Belegorio",
};

export default function About() {
  return (
    <Page>
      <main className="mt-[100px] container mx-auto px-4 py-8">
        <header className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50">
            About Me
          </h1>
          <p className="mt-2 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Get to know me and my passion for accountancy.
          </p>
        </header>

        <section className="mt-12 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0 w-[250px] md:w-[300px]">
            <Image
              src="https://media.licdn.com/dms/image/v2/D5603AQHaLk1XG-lDDw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1720066923256?e=1748476800&v=beta&t=OMyEJAZdSpfcG7QGrMEPRyx7MXKcGSsuE-ybnoq8cTs"
              alt="Jillian Mae Belegorio"
              width={300}
              height={300}
              className="rounded-full object-cover shadow-lg"
            />
          </div>
          <div className="flex-1 space-y-6 text-slate-900 dark:text-slate-50">
            <div className="flex items-start gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.964 0a9 9 0 1 0-11.964 0m11.964 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
              <div>
                <h2 className="text-xl font-semibold">Who I Am</h2>
                <p className="mt-2 text-slate-600 dark:text-slate-300">
                  Hello! I’m Jillian Mae Belegorio, an accountancy graduate from Saint Paul School of Professional Studies, Philippines. I earned my Bachelor’s degree in Accountancy in 2024, mastering financial reporting, auditing, and tax management.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3A2.25 2.25 0 0 0 7.5 5.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                />
              </svg>
              <div>
                <h2 className="text-xl font-semibold">What I Do</h2>
                <p className="mt-2 text-slate-600 dark:text-slate-300">
                  In my free time, I assist small businesses and individuals with bookkeeping, budget planning, financial analysis, and tax preparation. I’m passionate about simplifying complex financial concepts to help others succeed.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Page>
  );
}