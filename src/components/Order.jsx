const Order = ({ orderData }) => {
  const { id, title, img, price, status } = orderData;

  return (
    <div className="flex flex-wrap items-center space-y-3 md:px-6 gap-x-2 md:gap-x-0">
      <p className="flex-1 text-xs font-medium text-dark-500 md:text-sm lg:text-base">#{id}</p>
      <div className="flex-1">
        <div className="w-12 h-12 overflow-hidden md:w-16 md:h-16 lg:w-24 lg:h-24">
          <img src={img} alt="new" className="object-cover w-full h-full" />
        </div>
      </div>
      <p className="flex-1 text-sm font-medium capitalize text-dark-500 lg:text-base">{title}</p>
      <p className="flex-1 text-sm font-medium text-dark-500 lg:text-base">NGN {price.toFixed(2)}</p>
      <div className="flex items-center flex-1 space-x-2 text-sm lg:text-base">
        <span className="font-medium text-dark-500">Status:</span>
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
