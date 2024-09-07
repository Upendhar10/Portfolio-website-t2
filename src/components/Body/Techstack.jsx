import SkillsTemplate from "../Utils/SkillsTemplate";

function Techstack() {
  return (
    <div>
      <h3 className="mb-10 text-center font-[Gilroy-dark] text-3xl uppercase text-blue-500">
        SKIllset
      </h3>
      <div className="grid grid-cols-2 gap-5">
        <div className="flex flex-col items-center gap-4">
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
        </div>
        <div className="grid gap-5">
          <h4 className="font-[Gilroy-dark] text-2xl uppercase">Techstack</h4>
          <SkillsTemplate
            title={"Intermediate"}
            skills={[
              "https://skillicons.dev/icons?i=js",
              "https://skillicons.dev/icons?i=html",
              "https://skillicons.dev/icons?i=react",
              "https://skillicons.dev/icons?i=css",
              "https://skillicons.dev/icons?i=git",
              "https://skillicons.dev/icons?i=github",
              "https://skillicons.dev/icons?i=mysql",
              "https://skillicons.dev/icons?i=mongodb",
            ]}
          />
          <SkillsTemplate
            title={"Basics"}
            skills={[
              "https://skillicons.dev/icons?i=nodejs",
              "https://skillicons.dev/icons?i=figma",
              "https://skillicons.dev/icons?i=firebase",
              "https://skillicons.dev/icons?i=aws",
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
