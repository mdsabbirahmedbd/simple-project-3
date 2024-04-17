import slider1 from '../../public/images/slider1.jpg'
import slider2 from '../../public/images/slider2.jpg'
import slider3 from '../../public/images/slider3.jpg'
import slider4 from '../../public/images/silder4.jpg'



const Home = () => {
  return (
    <div>
        <div className="carousel h-96 lg:h-[500px] w-full">
  <div id="item1" className="carousel-item w-full ">
    <img src={slider1} className="w-full rounded-md" />
  </div> 
  <div id="item2" className="carousel-item w-full">
    <img src={slider2} className="w-full rounded-md" />
  </div> 
  <div id="item3" className="carousel-item w-full">
    <img src={slider3} className="w-full rounded-md" />
  </div> 
  <div id="item4" className="carousel-item w-full">
    <img src={slider4} className="w-full rounded-md" />
  </div>
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  <a href="#item4" className="btn btn-xs">4</a>
</div>
    </div>
  )
}

export default Home
