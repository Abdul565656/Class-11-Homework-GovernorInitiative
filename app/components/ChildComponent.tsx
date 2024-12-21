interface ChildComponentProps {
    carImage: string;
    carName: string;
    carPrice: string;
    carReviews: string;
  }
  
  const ChildComponent: React.FC<ChildComponentProps> = ({ carImage, carName, carPrice, carReviews }) => {
    return (
      <div>
        <img src={carImage} alt={carName} />
        <h2>{carName}</h2>
        <p>Price: {carPrice}</p>
        <p>Reviews: {carReviews}</p>
      </div>
    );
  };
  
  export default ChildComponent;
  