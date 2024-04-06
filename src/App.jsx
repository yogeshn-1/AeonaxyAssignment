import Introduction from "./component/Introduction";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Features from "./component/Features";
function App() {
  return (
    <div className="h-screen">
      <Header />
      <Hero />
      <Introduction />
      <Features />
    </div>
  );
}

export default App;
