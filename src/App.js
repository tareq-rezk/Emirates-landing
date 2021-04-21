import "./App.css";
import Footer from "./components/Footer/Footer";
import MainNav from "./components/MainNav/MainNav";
import MainSection from "./components/MainSection/MainSection";
import OurServices from "./components/OurServices/OurServices";
import RequiredDocs from "./components/RequiredDocs/RequiredDocs";
import RequiredProcedures from "./components/RequiredProcedures/RequiredProcedures";
import StartToday from "./components/StartToday/StartToday";

function App() {
  return (
    <div className="App">
      <MainNav />
      <MainSection />
      <StartToday />
      <OurServices />
      <RequiredProcedures />
      <RequiredDocs />
      <Footer />
    </div>
  );
}

export default App;
