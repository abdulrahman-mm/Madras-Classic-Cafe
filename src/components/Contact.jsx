import { CONTACT } from "../constants";

const Contact = () => {
  return (
    <section id='contact' className="text-neutral-400 mt-10 lg:mt-0 px-16 ">


    <div className="flex gap-10 items-center justify-center flex-wrap">
    
      <div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1755.9932337853602!2d80.1268130171916!3d13.42028768268448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1723822812389!5m2!1sen!2sin" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="rounded md:h-[350px] md:w-[550px] h-[200px] w-[300px]"></iframe>
      </div>

      <div>
      {CONTACT.map((details) => (
        <p
          key={details.key}
          className="my-16 border-b-2 border-dotted border-neutral-700 lg:pb-12 pb-4 text-center text-xl text-white tracking-tighter lg:text-3xl"
        >
          {details.value}
        </p>
      ))}
      </div>
    </div>

      
    </section>
  );
};

export default Contact;
