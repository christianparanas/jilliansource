import Link from "next/link";

const footerLinks = [
  { name: "Home", url: "/" },
  { name: "About", url: "/about" },
  { name: "Resume", url: "/resume" },
  { name: "Services", url: "/services" },
  { name: "Portfolio", url: "/portfolio" },
  { name: "Contact", url: "/contact" },
  // Add Jillian's real social links if available
  { name: "LinkedIn", url: "https://www.linkedin.com/in/jillianmaebelegorio/" }, // Example
  { name: "Email", url: "mailto:jillianmaebelegorio@gmail.com" }, // Replace with her email
];

function Footer() {
  return (
    <footer className="mt-12 mb-4 md:mt-20 border-t border-slate-200 dark:border-slate-800">
      <div className="py-2 mt-5">
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-12">
          {footerLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.url}
                className="hover:text-slate-400 transition-all cursor-pointer"
                {...(link.url.startsWith("http") || link.url.startsWith("mailto")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <p className="flex justify-center text-slate-400">
          © Jillian Mae Belegorio {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}

export default Footer;