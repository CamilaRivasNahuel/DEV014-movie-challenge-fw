// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useEffect, useState } from "react";
import { Card } from "./components/Card";
import { getMovie } from "./getMovie";
export function App(){
  
  const [Movie, setMovie] = useState()
  useEffect(() => {
  getMovie().then((resp)=>{
    setMovie(resp)
  })

  }, [])
  

  return <>
    <h1> Movie Challenge </h1>

    <ul>
    {
      Movie?.results.map((m)=>{
        return <Card title={m.title} img={m.poster_path} />
      })
    }
    </ul>
    </>
  

         
}




