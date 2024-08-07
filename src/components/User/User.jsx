import { useParams } from "react-router-dom"

function User() {
    const {userid} = useParams()
  return (
    <div className="text-3xl text-center font-bold text-gray-700 ">User: {userid} </div>
  )
}

export default User