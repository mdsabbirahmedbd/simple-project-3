import { IoIosPricetags } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { PropTypes } from 'prop-types';
import { Link } from "react-router-dom";

const Cards = ({data}) => {
  
    const {id,image_url,estate_title,segment_name,description,price,status,area,location,facilities} = data

  return (
    <div className="card border p-3">
    <figure><img src={image_url} className='h-60 w-full' alt="" /></figure>
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
      <div className="card-actions justify-end">
        <Link to={}><button className="btn btn-primary">View</button></Link>
      </div>
    </div>
  </div>
    
  )
}

export default Cards

Cards.propTypes = {
    data:PropTypes.object
}