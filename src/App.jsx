import Introduction from "./component/Introduction";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Features from "./component/Features";
import Testimonial from "./component/Testimonial";
function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Introduction />
      <Features />
      <Testimonial />
    </div>
  );
}

export default App;
