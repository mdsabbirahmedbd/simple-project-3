import { FaLocationDot } from "react-icons/fa6"
import { IoIosPricetags } from "react-icons/io"
import { Link, useLoaderData, useParams } from "react-router-dom"



const Details = () => {
  const loadingData = useLoaderData()
  console.log(loadingData)
  const {id} = useParams()
  const convartNum = parseInt(id)
  const currrentDetails = loadingData.find((current) => current.id === convartNum)
   const {image_url,estate_title,segment_name,description,price,status,area,location,facilities} = currrentDetails
  return (
    <div className="my-12">
        <div className="card border p-3">
    <figure><img src={image_url} className='h-96 w-full' alt="" /></figure>
    <div className="card-body">
      <h2 className="card-title">{estate_title}</h2>
      <p><span className='font-bold text-black'>Segment Name :</span> {segment_name}</p>
      <p><span className='font-bold text-black'>Description:</span> {description}</p>
      <div className="flex items-center ">
        <p className="flex gap-2 items-center"><IoIosPricetags className="text-lg" /> <span>{price}</span> </p>
        <p><span className='font-bold text-black'>Status:</span> {status}</p>
      </div>
      <div className="flex items-center ">
        <p className="flex gap-2 items-center"><FaLocationDot  className="text-lg" /> <span>{location}</span> </p>
        <p><span className='font-bold text-black'>Area:</span> {area}</p>
      </div>
      <div className="space-x-3">
        {
            facilities.map((faciliti,idx) => <span className="badge " key={idx}>{faciliti}</span> )
        }
      </div>
    </div>
    <Link className="mx-auto" to={'/'}><button className="btn btn-primary">Go Back</button></Link>
  </div>
    
    </div>
  )
}

export default Details

