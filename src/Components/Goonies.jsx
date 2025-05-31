import Goonie from "./Goonie";

const data = [
  {
    name: "Mikey",
    link: "/img/5d000a3b16a6c64e19f1841b_1.jpg",
  },
  {
    name: "Chunk",
    link: "/img/5d000a3b7c779fffb58ff3ed_2.jpg",
  },
  {
    name: "Data",
    link: "/img/5d02ab04e61881f2925c8c80_gadet.jpg",
  },
  {
    name: "Mouth",
    link: "/img/5d002392773f43b68a233649_4.jpg",
  },
];

const Goonies = () => {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {data.map((item, index) => (
        <Goonie key={index} name={item.name} link={item.link} />
      ))}
    </div>
  );
};

export default Goonies;
