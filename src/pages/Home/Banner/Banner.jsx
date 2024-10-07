import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full h-[80vh]">
  {/* Slide 1 */}
  <div id="slide1" className="carousel-item relative w-full ">
    <div className="relative w-full h-full rounded-xl ">
      <img src={img1} className="w-full h-full object-cover rounded-xl" alt="Car Servicing" />
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </div>
    <div className="absolute top-32 left-16 flex flex-col space-y-5 z-10">
      <h2 className="text-7xl font-bold text-white">
        Affordable <br /> Price For Car <br /> Servicing
      </h2>
      <p className="text-white">
        There are many variations of passages available, but <br /> the majority have suffered alteration in some form.
      </p>
      <div className="flex flex-row space-x-4">
        <button className="btn btn-warning p-3 text-white bg-amber-700 border-amber-700">
          Discover More
        </button>
        <button className="btn btn-outline p-3 text-white border-white font-bold border-2">
          Latest Project
        </button>
      </div>
    </div>
    <div className="absolute bottom-7 right-7 flex space-x-6 z-10">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>

  {/* Slide 2 */}
  <div id="slide2" className="carousel-item relative w-full">
    <div className="relative w-full h-full">
      <img src={img2} className="w-full h-full object-cover" alt="Car Servicing" />
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </div>
    <div className="absolute top-32 left-16 flex flex-col space-y-5 z-10">
      <h2 className="text-7xl font-bold text-white">
        Affordable <br /> Price For Car <br /> Servicing
      </h2>
      <p className="text-white">
        There are many variations of passages available, but <br /> the majority have suffered alteration in some form.
      </p>
      <div className="flex flex-row space-x-4">
        <button className="btn btn-warning p-3 text-white bg-amber-700 border-amber-700">
          Discover More
        </button>
        <button className="btn btn-outline p-3 text-white border-white font-bold border-2">
          Latest Project
        </button>
      </div>
    </div>
    <div className="absolute bottom-7 right-7 flex space-x-6 z-10">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>

  {/* Slide 3 */}
  <div id="slide3" className="carousel-item relative w-full">
    <div className="relative w-full h-full">
      <img src={img3} className="w-full h-full object-cover" alt="Car Servicing" />
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </div>
    <div className="absolute top-32 left-16 flex flex-col space-y-5 z-10">
      <h2 className="text-7xl font-bold text-white">
        Affordable <br /> Price For Car <br /> Servicing
      </h2>
      <p className="text-white">
        There are many variations of passages available, but <br /> the majority have suffered alteration in some form.
      </p>
      <div className="flex flex-row space-x-4">
        <button className="btn btn-warning p-3 text-white bg-amber-700 border-amber-700">
          Discover More
        </button>
        <button className="btn btn-outline p-3 text-white border-white font-bold border-2">
          Latest Project
        </button>
      </div>
    </div>
    <div className="absolute bottom-7 right-7 flex space-x-6 z-10">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>

  {/* Slide 4 */}
  <div id="slide4" className="carousel-item relative w-full">
    <div className="relative w-full h-full">
      <img src={img4} className="w-full h-full object-cover" alt="Car Servicing" />
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </div>
    <div className="absolute top-32 left-16 flex flex-col space-y-5 z-10">
      <h2 className="text-7xl font-bold text-white">
        Affordable <br /> Price For Car <br /> Servicing
      </h2>
      <p className="text-white">
        There are many variations of passages available, but <br /> the majority have suffered alteration in some form.
      </p>
      <div className="flex flex-row space-x-4">
        <button className="btn btn-warning p-3 text-white bg-amber-700 border-amber-700">
          Discover More
        </button>
        <button className="btn btn-outline p-3 text-white border-white font-bold border-2">
          Latest Project
        </button>
      </div>
    </div>
    <div className="absolute bottom-7 right-7 flex space-x-6 z-10">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>

  
  );
};

export default Banner;
