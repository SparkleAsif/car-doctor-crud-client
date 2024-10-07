import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";


const ServiceCard = ({service}) => {
    const {_id, title, price, img} = service;
    return (
        <div className="bg-white shadow-md rounded-lg p-4 relative flex flex-col">
        <img src={img} alt={title} className="w-full h-40 object-cover rounded-t-lg" />
        <div className="flex-grow">
          <h3 className="text-xl text-black font-bold my-3">{title}</h3>
          <p className="text-black font-semibold">Price: ${price}</p>
        </div>
        <Link to={`/book/${_id}`}>
        <button className="absolute bottom-4 right-4 bg-amber-700 text-white p-2 rounded-full hover:bg-amber-600 transition duration-300 ease-in-out">
        <FaArrowRight />
        </button>
        </Link>
      </div>
    );
};

export default ServiceCard;