import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"


function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/vaibhavvvg')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [])
    
  return (
    <div className="text-3xl text-center font-bold text-gray-700">Github followers: {data.followers} 
    <img src={data.avatar_url} alt="Git Picture" width={300} />
    </div>
    
  )
}

export default Github

export const githubLoaderInfo = async () => {
    const response = await fetch('https://api.github.com/users/vaibhavvvg')
    return response.json()
}