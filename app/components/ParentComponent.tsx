import React from 'react'
import ChildComponent from '../components/ChildComponent';

const ParentComponent = () => {
    const cars = [
        {
          carImage: "https://images.prismic.io/carwow/a0b54c70-b58c-482c-8d28-b72884380e42_2023+Tesla+Model+S+front+quarter+static.jpg",
          carName: "Tesla Model S",
          carPrice: "$80,000",
          carReviews: "Excellent performance and range!",
        },
        {
          carImage: "https://www.topgear.com/sites/default/files/cars-car/image/2024/12/54196859052_9249719e93_o.jpg",
          carName: "Ford Mustang",
          carPrice: "$55,000",
          carReviews: "Classic muscle car with modern tech.",
        },
        {
          carImage: "https://www.toyota-central.com/Assets/images/Vehicle/CorollaX/Color/AttitudeBlack.png",
          carName: "Toyota Corolla",
          carPrice: "$25,000",
          carReviews: "Affordable and reliable daily driver.",
        },
        {
          carImage: "https://di-uploads-pod24.dealerinspire.com/bmwoftenafly/uploads/2020/03/Interior-dashboard-view-of-a-2020-BMW-X5.png",
          carName: "BMW X5",
          carPrice: "$70,000",
          carReviews: "Luxury SUV with great handling.",
        },
      ];
  return (
    <div>
     <h1 className="text-4xl md:text-6xl text-center text-slate-900 font-light mb-6 p-3 tracking-wider border-b-4 border-indigo-500">
  CAR LISTINGS
</h1>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 bg-gray-100 rounded-lg shadow-lg">
  {cars.map((car, index) => (
    <ChildComponent
      key={index}
      carImage={car.carImage}
      carName={car.carName}
      carPrice={car.carPrice}
      carReviews={car.carReviews}
    />
  ))}
</div>

    </div>
  )
}

export default ParentComponent