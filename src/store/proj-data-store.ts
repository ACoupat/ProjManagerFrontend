const PROTOCOL = "http"
const PORT = "8080"

export interface Proj {
    _id: string,
    manufacturingYear: string,
    name: string,
    brand: string,
    medias: Media[]
}

export interface Media {
    _id: string,
    description: string,
    title: string
}

export function fetchAllProjs(): Promise<any> {
    return fetch(`${PROTOCOL}://${window.location.hostname}:${PORT}/proj`)
}

export function fetchProj(id: string) {
    return fetch(`${PROTOCOL}://${window.location.hostname}:${PORT}/proj/${id}`)
        .then(res => res.json()) as Promise<Proj>;
}

export function updateProj(projId: string, proj: Proj) {
    return fetch(`${PROTOCOL}://${window.location.hostname}:${PORT}/proj/${projId}`, {
        headers: new Headers({
            "Content-Type": "application/json"
        }),
        method: 'PUT',
        body: JSON.stringify(proj)
    }).then(response => response.json())
}

export function createProj() {
    return fetch(`${PROTOCOL}://${window.location.hostname}:${PORT}/proj/`, {
        method: 'POST',
    }).then(response => response.json())
}

export function createMedia(file: File, fileName: string, projId: string) {
    const myHeaders = new Headers();

    const formdata = new FormData();
    formdata.append("file", file, fileName);

    const requestOptions: RequestInit = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    return fetch(`${PROTOCOL}://${window.location.hostname}:${PORT}/media?fileName=${fileName}&projId=${projId}`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}

export function downloadMedia(id: string) : Promise<Blob>{
    const myHeaders = new Headers();

    const requestOptions: RequestInit = {
        method: 'GET',
        headers: myHeaders,
        body: null,
        redirect: 'follow'
    };

    return fetch(`${PROTOCOL}://${window.location.hostname}:${PORT}/media/downloadFile/${id}`, requestOptions)
        .then(response => response.blob())
        // .then(result => console.log(result))
        // .catch(error => console.log('error', error));
}