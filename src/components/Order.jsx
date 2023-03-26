const Order = ({ orderData }) => {
  const { id, title, img, price, status } = orderData;

  return (
    <div className="flex items-center px-6" key={id}>
      <p className="flex-1 font-medium text-dark-500">#{id}</p>
      <div className="flex-1">
        <div className="w-24 h-24 overflow-hidden">
          <img src={img} alt="new" className="w-full h-full object-cover" />
        </div>
      </div>
      <p className="flex-1 capitalize font-medium text-dark-500">{title}</p>
      <p className="flex-1 text-dark-500 font-medium">NGN {price.toFixed(2)}</p>
      <div className="flex-1 flex items-center space-x-2">
        <span className="text-dark-500 font-medium">Status:</span>
        <p
          className={`${
            status === "in production"
              ? "text-red-400 "
              : status === "delivering"
              ? "text-green-400"
              : status === "packaging"
              ? "text-orange-400 "
              : status === "canceled"
              ? "text-red-500 "
              : status === "delivered"
              ? "text-green-500 "
              : ""
          } capitalize font-medium `}
        >
          {status}
        </p>
      </div>
    </div>
  );
};

export default Order;
