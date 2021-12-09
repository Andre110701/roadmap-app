import axios from 'axios'
import { API_URL } from "../consts"


export async function getModulesList() {

  const response = await axios.get(`${API_URL}/modules`)
  return { type: 'MODULES_LIST_FETCHED', payload: response.data }
}

export function setModuleId(moduleId: string) {
  return { type: 'SET_MODULE_ID', payload: moduleId }

}
