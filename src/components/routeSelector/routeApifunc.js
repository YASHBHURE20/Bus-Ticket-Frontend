import axios from 'axios'

export async function getRoutesFromApi(startCity, destination) {
    const baseURL = "https://bus-ticket-backend.onrender.com/booking/"
    let incoming = await axios.post(baseURL, { startCity, destination })
    return incoming
}