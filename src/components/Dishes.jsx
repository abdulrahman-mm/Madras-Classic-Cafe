import { DISHES } from "../constants";

const Dishes = () => {

  return (
    <section
      id="dishes"
      className="container mx-auto mt-10 lg:mt-4 lg:pb-16 px-10"
    >
      <h2 className="mb-8 text-center text-3xl tracking-tighter lg:text-4xl">
        Our Dishes
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5  gap-8 ">
        {
        DISHES.map((project, index) => (
              <div key={index} >
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-3xl p-2"
                  loading='eager'
                />
                <div className="p-4">
                  <h3 className="mb-2 text-2xl font-bold tracking-tighter">
                    {project.title}
                  </h3>
                  <p className="text-sm">{project.description}</p>
                </div>
              </div>
            ))}
      </div>
    </section>
  );
};

export default Dishes;
