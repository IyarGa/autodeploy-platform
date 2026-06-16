export async function getApplicationStatus() {
    const response = await fetch("http://localhost:3000/api/status");
    return response.json();
}

export async function getSystemStatus() {
    const response = await fetch("http://localhost:3000/api/system");
    return response.json();
}