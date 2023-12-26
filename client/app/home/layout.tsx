import Footer from "../components/footer";
import Header from "../components/header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className="px-[10rem]">{children}</div>
      <Footer />
    </>
  );
}
