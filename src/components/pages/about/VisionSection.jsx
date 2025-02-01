const MissionVision = () => {
  return (
    <div className="px-10 py-16 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center">
      <h2 className="text-3xl font-bold">Our Mission & Vision</h2>
      <div className="mt-8 grid sm:grid-cols-2 gap-10">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800">Mission</h3>
          <p className="mt-4 text-gray-600">
            Our mission is to provide the best-in-class IT solutions and
            training, enabling individuals and businesses to achieve digital
            transformation.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800">Vision</h3>
          <p className="mt-4 text-gray-600">
            Our vision is to become a leading provider of innovative and
            cutting-edge IT training solutions, helping our clients stay ahead
            in the fast-paced digital world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
