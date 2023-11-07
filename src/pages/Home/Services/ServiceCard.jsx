import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, title, img, price } = service;
  return (
    <div>
      <div className="card w-80 bg-blue-100  border border-slate-200">
        <figure className="pt-5">
          <img src={img} alt="Shoes" className="rounded-xl w-full" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="text-orange-500">Price: ${price}</p>
          <div className="card-actions">
            <Link to={`/book/${_id}`}>
              <button className="btn btn-primary">Book Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
