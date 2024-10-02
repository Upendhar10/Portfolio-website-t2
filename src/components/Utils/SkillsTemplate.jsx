import propTypes from "prop-types";

function SkillsTemplate({ title, skills }) {
  return (
    <div className="">
      <table>
        <tbody className="flex flex-col items-center gap-5 md:flex-row">
          <td className="text-3xl font-semibold uppercase">{title}</td>
          <div className="flex max-w-[400px] flex-wrap items-center justify-center gap-3 p-3 md:max-w-none md:flex-nowrap">
            {skills.map((skill, index) => (
              <img
                key={index}
                className="h-11"
                src={skill}
                alt={`skill-${index}`}
              />
            ))}
          </div>
        </tbody>
      </table>
    </div>
  );
}

export default SkillsTemplate;

SkillsTemplate.propTypes = {
  title: propTypes.string.isRequired,
  skills: propTypes.arrayOf(propTypes.string).isRequired,
};
