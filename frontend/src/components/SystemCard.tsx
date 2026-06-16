import { useEffect, useState } from "react";
import { getSystemStatus } from "../services/api";

function SystemCard() {
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        getSystemStatus().then(setData);
    }, []);

    if (!data) {
        return <div>Loading system data...</div>;
    }

    return (
        <div className="card">
            <h2>System Information</h2>

            <p>Hostname: {data.hostname}</p>
            <p>Platform: {data.platform}</p>
            <p>Architecture: {data.architecture}</p>
            <p>Node Version: {data.nodeVersion}</p>
            <p>Total Memory: {data.memory.total}</p>
            <p>Free Memory: {data.memory.free}</p>
            <p>Uptime: {data.uptime}</p>
        </div>
    );
}

export default SystemCard;