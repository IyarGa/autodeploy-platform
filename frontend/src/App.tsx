import ApplicationCard from "./components/ApplicationCard";
import SystemCard from "./components/SystemCard";
import "./index.css";

function App() {
    return (
        <div className="container">
            <h1>DevOps Control Center</h1>

            <ApplicationCard />

            <SystemCard />
        </div>
    );
}

export default App;