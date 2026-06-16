import { useEffect, useState } from "react";
import { getApplicationStatus } from "../services/api";

function ApplicationCard() {
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        getApplicationStatus().then(setData);
    }, []);

    if (!data) {
        return <div>Loading application data...</div>;
    }

    return (
        <div className="card">
            <h2>Application Information</h2>

            <p>Status: {data.status}</p>
            <p>Application: {data.appName}</p>
            <p>Version: {data.version}</p>
            <p>Environment: {data.environment}</p>
            <p>Build: {data.buildNumber}</p>
            <p>Commit: {data.commitHash}</p>
            <p>Deploy Time: {data.deployTime}</p>
        </div>
    );
}

export default ApplicationCard;