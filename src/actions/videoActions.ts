import axios from 'axios';
import { API_URL } from "../consts"


export async function getVideoCompleted(id: string) {
  const response = await axios.get(`${API_URL}/playlists?parent_module_id=${id}`)
  return { type: 'COMPLETED_LIST', payload: response.data }
}