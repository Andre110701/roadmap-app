import { useEffect, useState } from 'react'
import axios from 'axios'

type ModuleType = {
  id: string;
  name: string;
}

export default function ModuleList() {

  const [modulesList, setModulesList] = useState([])

  useEffect(() => {
    console.log('carregou')
    getModulesList()
  }, [])

  async function getModulesList() {

    const response = await axios.get("http://localhost:3003/modules")
    setModulesList(response.data)
    console.log(response.data)
  }




  return (
    <div>
      {modulesList.length > 0 ?
        <ul>
          {modulesList.map((module: ModuleType) => (
            <li key={module.id}>
              {module.name}
            </li>
          ))}
        </ul>
        : false
      }
    </div>
  )
}