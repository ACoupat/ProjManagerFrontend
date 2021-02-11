const PROTOCOL = "http"
const PORT = "8080"

export interface Proj {
    _id: string,
    manufacturingYear: string,
    name: string,
    brand: string,
}

export function fetchAllProjs(): Promise<any> {
    return fetch(`${PROTOCOL}://${window.location.hostname}:${PORT}/api/proj`)
}

export function fetchProj(id: string) {
    return fetch(`${PROTOCOL}://${window.location.hostname}:${PORT}/api/proj/${id}`)
        .then(res => res.json()) as Promise<Proj>;
}

export function updateProj(projId: string, proj: Proj) {
    return fetch(`${PROTOCOL}://${window.location.hostname}:${PORT}/api/proj/${projId}`, {
        headers: new Headers({
            "Content-Type" : "application/json"
        }),
        method: 'PUT',
        body: JSON.stringify(proj)
    }).then(response => response.json())
}

export function createProj() {
    return fetch(`${PROTOCOL}://${window.location.hostname}:${PORT}/api/proj/`, {
        method: 'POST',
    }).then(response => response.json())
}