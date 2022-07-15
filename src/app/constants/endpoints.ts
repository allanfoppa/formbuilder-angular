
import { environment } from "src/environments/environment"

const apiURL = environment.apiURL

export const fetchPeopleEndpoint = `${apiURL}/people`
export const createPersonEndpoint = `${apiURL}/people`
