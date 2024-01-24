import Footer from "./Footer";
import Header from "./Header";
import Page from "./Page";

function App() {
  return (
    <div className="dark">
      <div className="bg-white text-dark dark:bg-body dark:text-white">
        <Header />
        <Page />
        <Footer />
      </div>
    </div>
  );
}

export default App;
