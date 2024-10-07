import about1 from "../../../assets/images/about_us/person.jpg";
import about2 from "../../../assets/images/about_us/parts.jpg";


const About = () => {
    return (
        <div className="hero  min-h-[80vh]">
  <div className="hero-content flex-col lg:flex-row">
    <div className="lg:w-1/2 relative">
    <img
      src={about1}
      className="w-3/4  rounded-lg shadow-2xl" />
    <img
      src={about2}
      className="w-1/2 rounded-lg shadow-2xl absolute right-5 top-1/2
       border-8 border-gray-400" />
    </div>
    <div className="lg:w-1/2 p-8  rounded-lg shadow-lg">
  <h3 className="text-amber-700 text-3xl font-bold mb-4">About Us</h3>
  <h1 className="text-5xl font-bold text-white leading-tight">
    We are qualified <br /> & experienced <br /> in this field
  </h1>
  <p className="py-2 ">
  There are many variations of passages of Lorem Ipsum <br /> available, but the majority have suffered alteration in some <br /> form, by injected humour, or randomised words which don't <br /> look even slightly believable. 
  </p>
  <p className="mb-2">
  the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
  </p>
  <button className="btn  px-6 py-3 text-white bg-amber-700
   hover:bg-amber-600 transition duration-300 ease-in-out">
    Get More Info
  </button>
</div>

  </div>
</div>
    );
};

export default About;