import request from 'superagent'
import { Welcome } from '../models/welcome.ts'

const serverURL = '/api/v1'

//  Create the functions that make your API calls in client/apiClient.ts, and call those functions within your React components

// *** EXAMPLE ***
export function getWelcome(): Promise<Welcome> {
  return request.get(`${serverURL}/welcome`).then((response) => response.body)
}
// ***   ***   ***
