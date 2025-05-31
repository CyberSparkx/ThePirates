const Goonie = ({ link, name }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-[50vw] lg:w-[25vw] lg:mt-64 group bg-zinc-500 overflow-hidden relative h-[70vh] sm:h-[80vh] lg:h-screen">
      {/* Background image */}
      <img
        src={link}
        alt={name}
        className="h-full w-full object-cover hover:scale-110 opacity-60 hover:opacity-100 duration-500 absolute"
      />

      {/* Text content */}
      <p className="absolute bottom-20 left-5 sm:left-8 text-xl sm:text-2xl lg:text-4xl font-semibold text-white transform translate-y-40 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition duration-500">
        {name}
      </p>
      <p className="absolute bottom-12 left-5 sm:left-8 text-md sm:text-xl lg:text-2xl font-semibold text-white transform translate-y-40 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition duration-500">
        More Info
      </p>

      {/* Arrow icon */}
      <img
        src="/img/5d00256012408bddc81a0512_arrow.png"
        alt="arrow"
        className="absolute bottom-10 left-5 sm:left-8 w-6 sm:w-8 transform translate-y-40 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition duration-500"
      />
    </div>
  );
};

export default Goonie;
