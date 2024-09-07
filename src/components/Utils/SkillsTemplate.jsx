import propTypes from "prop-types";

function SkillsTemplate({ title, skills }) {
  return (
    <div className="grid gap-3">
      <h4 className="mb-2 text-xl font-bold uppercase">{title}</h4>
      <div className="flex max-w-[220px] flex-wrap items-center justify-start gap-3 p-1">
        {skills.map((skill, index) => (
          <img
            key={index}
            className="h-10"
            src={skill}
            alt={`skill-${index}`}
          />
        ))}
      </div>
    </div>
  );
}

export default SkillsTemplate;

SkillsTemplate.propTypes = {
  title: propTypes.string.isRequired,
  skills: propTypes.arrayOf(propTypes.string).isRequired,
};
