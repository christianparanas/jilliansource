import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

const Page = ({ children }) => (
  <div className="grid md:grid-cols-[380px_1fr]">
    <Nav />

    <div className="px-4 md:col-start-2 md:px-8 md:max-w-[1200px]  mx-auto">
      <main className="min-h-screen h-fit">{children}</main>
      <Footer />
    </div>
  </div>
);

export default Page;
