import { useLoaderData } from "react-router-dom";
import checkoutImage from "../assets/images/checkout/checkout.png"
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const BookService = () => {
    const service = useLoaderData();
    const {title, _id, price, img} = service;
    const {user} = useContext(AuthContext);

    const handleBookService= event=>{
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const booking = {
            CustomerName: name,
            email,
            img,
            date,
            service: title,
            service_id: _id,
            price: price
        }
        console.log(booking);

        fetch("http://localhost:5000/bookings",{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            } ,
            body: JSON.stringify(booking)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                alert("service Booked Successfully")
            }
        })


    }
    return (
        <div className="w-full">
      {/* Banner Section */}
      <div
        className="relative bg-cover bg-center h-64"
        style={{ backgroundImage: `url(${checkoutImage})` }} // Correctly using the imported image
      >
        <div className="absolute left-8 top-1/2 transform -translate-y-1/2">
          <h1 className="text-5xl font-bold text-white">Booking</h1>
        </div>
      </div>

      {/* Form Section */}
      <div className="container mx-auto mt-10">
        <form
            onSubmit={handleBookService}
        className="bg-gray-800 shadow-lg rounded-lg p-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* First Name */}
            <div>
              <label className="block text-sm font-medium text-gray-300">Name</label>
              <input
                type="text"
                name="name"
                className="mt-1 block w-full p-3 bg-gray-900 text-white border border-gray-700 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Name"
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-sm font-medium text-gray-300">Date</label>
              <input
                type="date"
                name="date"
                className="mt-1 block w-full p-3 bg-gray-900 text-white border border-gray-700 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Date"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium text-gray-300">Email</label>
              <input
                type="email"
                defaultValue={user?.email}
                name="email"
                className="mt-1 block w-full p-3 bg-gray-900 text-white border border-gray-700 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Your email"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-300">Due amount</label>
              <input
                type="text"
                defaultValue={price}
                className="mt-1 block w-full p-3 bg-gray-900 text-white border border-gray-700 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
               
              />
            </div>
          </div>

          

          {/* Order Confirm Button */}
          <div className="mb-6">
            <button
              type="submit"
              className="w-full bg-amber-700 text-white py-3 rounded-lg text-lg font-bold
               hover:bg-amber-600"
            >
              Book Service
            </button>
          </div>
        </form>
      </div>
    </div>
    );
};

export default BookService;