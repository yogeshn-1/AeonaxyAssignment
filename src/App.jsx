import Introduction from "./component/Introduction";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Features from "./component/Features";
import Testimonial from "./component/Testimonial";
import Callout from "./component/Callout";
import Footer from "./component/Footer";
function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Introduction />
      <Features />
      <Testimonial />
      <Callout />
      <Footer />
    </div>
  );
}

export default App;
