import { Link } from "react-router-dom";
import { FiMenu, FiX, FiChevronRight, FiChevronDown } from "react-icons/fi";

const ServiceList = ({ services, activeServiceIndex, toggleCategory }) => {
  return (
    <div className="absolute w-[350px] -left-20 top-10 mt-2 bg-white text-black shadow-lg rounded-md p-4 space-y-2">
      {services.map((service, index) => (
        <div
          key={index}
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleCategory(index)}
        >
          <Link
            to={`/services/${service.link}`}
            className=" hover:text-gray-700 text-[15px] rounded px-2 py-1 items-center transition w-full  hover:bg-gray-300 flex justify-between"
          >
            {service.title}
            <FiChevronRight
              className={`transform transition-transform ${
                activeServiceIndex === index ? "rotate-90" : ""
              }`}
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ServiceList;
