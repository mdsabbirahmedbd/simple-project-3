import { useLoaderData } from "react-router-dom"
import Banner from "../componants/Banner"
import Cards from "../componants/Cards"



const Home = () => {
 
  const loadingData = useLoaderData()

  return (
    <div className="space-y-5 my-10">
     <div><Banner></Banner></div>

     <div className="grid lg:grid-cols-3 grid-cols-1 gap-3">
      {
      loadingData.map((data,idx) => <Cards key={idx} data={data}></Cards>)
      }
     </div>

    </div>
  )
}

export default Home
