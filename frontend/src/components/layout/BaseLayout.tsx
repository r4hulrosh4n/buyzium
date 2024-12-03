import TopHeader from "./TopHeader";
import Header from "./Header";
import Footer from "./Footer";

interface BaseLayoutProps {
  readonly children: React.ReactNode;
}

const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <div className="flex flex-col bg-bg">
      {/*<TopHeader />*/}
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default BaseLayout;
