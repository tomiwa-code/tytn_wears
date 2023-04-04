import { Link, useRouteError } from "react-router-dom";

const ErrorBoundary = () => {
  const error = useRouteError();

  return (
    <div className="w-screen h-screen bg-[#FFEFE4] flex items-center justify-center">
      {error.status === 404 ? (
        <div className="w-[500px] flex flex-col items-center justify-center relative">
          <h1 className="absolute top-0 text-center text-6xl font-semibold text-[#E6D0BB]">
            404
          </h1>
          <div className="overflow-hidden w-[300px] h-[300px]">
            <img
              src="https://res.cloudinary.com/dgdoymhtj/image/upload/v1680570124/Gifs/tired_fio08b.gif"
              alt="messed-up"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="mt-5 text-center text-[#9B7377]">
            <h3 className="font-medium">Look like you're lost</h3>
            <p className="px-10 font-medium md:px-0">
              the page you are looking for is not available!
            </p>
          </div>
          <Link
            to="/"
            className="capitalize bg-[#9B7377] text-[#E6D0BB] rounded px-5 py-3.5 mt-5"
          >
            go back home
          </Link>
        </div>
      ) : (
        <>
          <div>Something went wrong!</div>
          <Link
            to="/"
            className="capitalize bg-[#9B7377] text-[#E6D0BB] rounded px-5 py-3.5 mt-5"
          >
            go back home
          </Link>
        </>
      )}
    </div>
  );
};

export default ErrorBoundary;
