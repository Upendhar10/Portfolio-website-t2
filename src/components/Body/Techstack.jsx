import SkillsTemplate from "../Utils/SkillsTemplate";

function Techstack() {
  return (
    <div className="">
      <h3 className="mb-5 text-center font-[Gilroy-dark] text-4xl uppercase text-blue-500">
        SKIllset
      </h3>
      <div className="grid place-content-center gap-3">
        <div className="grid place-content-center gap-4">
          <SkillsTemplate
            title="Languages"
            skills={[
              "https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white",
              "https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white",
              "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
              "https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white",
            ]}
          />
          <SkillsTemplate
            title="Frameworks"
            skills={[
              "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
              "https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white",
              "https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white",
            ]}
          />
          <SkillsTemplate
            title="Version Control"
            skills={[
              "https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white",
              "https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white",
            ]}
          />
          <SkillsTemplate
            title="Databases & Cloud"
            skills={[
              "https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase",
              "https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white",
              "https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white",
            ]}
          />
          <SkillsTemplate
            title="Development Tools"
            skills={[
              "https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white",
              "https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white",
              "https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white",
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default Techstack;

<div className="flex flex-col items-center gap-4 border-4">
  <h4 className="font-[Gilroy-dark] text-2xl uppercase">SoftsKills</h4>
  <div className="grid place-content-center gap-3">
    <span className="rounded-md border-2 bg-slate-100 p-2 text-center font-bold dark:text-black">
      Collaboration
    </span>
    <span className="rounded-md border-2 bg-slate-100 p-2 text-center font-bold dark:text-black">
      Adaptability
    </span>
    <span className="rounded-md border-2 bg-slate-100 p-2 text-center font-bold dark:text-black">
      Problem solving
    </span>
    <span className="rounded-md border-2 bg-slate-100 p-2 text-center font-bold dark:text-black">
      Critical Thinking
    </span>
    <span className="rounded-md border-2 bg-slate-100 p-2 text-center font-bold dark:text-black">
      Time Management
    </span>
  </div>
</div>;
