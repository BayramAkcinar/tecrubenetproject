import Header from "../components/header/page";
import Footer from "../components/footer/page"
export const metadata = {
  title: "tecrubeNet",
};

export default function RootLayout({ children }) {
  return (
    <section>
      <Header></Header>
      {children}
      <Footer></Footer>
    </section>
  );
}
