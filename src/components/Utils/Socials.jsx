import propTypes from "prop-types";

function Socials({ link, icon }) {
  return (
    <a
      href={link}
      target="_blank"
      className="duration-300 hover:-translate-y-2 hover:text-[#3b82f6]"
    >
      <>{icon}</>
    </a>
  );
}

Socials.propTypes = {
  link: propTypes.string.isRequired,
  icon: propTypes.object.isRequired,
};

export default Socials;
