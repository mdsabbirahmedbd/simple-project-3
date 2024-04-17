import { useLoaderData } from "react-router-dom"
import Banner from "../componants/Banner"
import Cards from "../componants/Cards"
import { Helmet } from "react-helmet-async"



const Home = () => {
 
  const loadingData = useLoaderData()

  return (
    <div className="space-y-5 my-10">
      <Helmet>
        <title>TripAdvisor | Home</title>
      </Helmet>
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
