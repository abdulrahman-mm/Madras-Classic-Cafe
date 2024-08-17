import { SOCIAL_MEDIA_LINKS } from "../constants";

const Footer = () => {
  return (
    <section >
      <div className="flex items-center justify-center gap-8">
        {SOCIAL_MEDIA_LINKS.map((link, index) => (
          <a key={index} target="_blank" rel="noopener noreferrer">
            {link.icon}
          </a>
        ))}
      </div>
      <p className="mt-8 text-center tracking-tighter text-neutral-500">
        &copy; All rights reserved
      </p>
    </section>
  );
};

export default Footer;
