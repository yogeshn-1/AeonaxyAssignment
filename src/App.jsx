import Introduction from "./component/Introduction";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Features from "./component/Features";
import Testimonial from "./component/Testimonial";
import Callout from "./component/Callout";
function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Introduction />
      <Features />
      <Testimonial />
      <Callout />
    </div>
  );
}

export default App;
