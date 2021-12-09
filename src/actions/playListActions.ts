import axios from 'axios';
import { API_URL } from "../consts"


export async function getPlayList(id: string) {
  const response = await axios.get(`${API_URL}/playlists?parent_module_id=${id}`)
  return { type: 'PLAYLIST_FETCHED', payload: response.data }
}