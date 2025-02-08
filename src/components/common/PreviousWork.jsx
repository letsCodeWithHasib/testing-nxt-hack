import { previousWork } from "../../assets/data";

const PreviousWork = () => {
  return (
    <div className="md:px-[100px] mx-auto py-10 px-4 font-outfit">
      <h1 className="text-4xl font-bold text-center mb-6">Our Previous Work</h1>
      <p className="text-lg text-center text-gray-600 mb-8">
        Explore our past training programs and workshops.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {previousWork.map((work, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden border"
          >
            <img
              src={work.image}
              alt={work.title}
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h1 className="text-2xl font-bold">{work.name}</h1>
              <h2 className="text-xl font-semibold">{work.title}</h2>
              <p className="text-gray-500">{work.year}</p>
              <p className="text-gray-700 mt-2">{work.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreviousWork;
