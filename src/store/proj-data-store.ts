const PROTOCOL = "http"
const PORT = "8080"

export interface Proj{
    id : string,
    manufacturingYear: string,
    name: string,
    brand: string,
}

export function fetchAllProjs() : Promise<any>{
    return fetch(`${PROTOCOL}://${window.location.hostname}:${PORT}/api/proj`)
}

export function updateProj(projId : string,proj : Proj){
    return fetch(`${PROTOCOL}://${window.location.hostname}:${PORT}/api/proj/projId`,{
        method : 'PUT',
        body: JSON.stringify(proj)
    })
}

export function createProj(){
    return fetch(`${PROTOCOL}://${window.location.hostname}:${PORT}/api/proj/`,{
        method : 'POST',
    })
}