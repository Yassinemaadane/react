import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import RoutesApplications from "./components/routes.application";


function App() {
  return (
    <div>
      <NavBar />
      <RoutesApplications />
    </div>
  );
}

export default App;
