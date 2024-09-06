import CareerTemplate from "../Utils/CareerTemplate";

function Experience() {
  return (
    <div className="w-auto">
      <h3 className="mb-8 text-center font-[Gilroy-dark] text-3xl uppercase text-blue-500">
        Experience
      </h3>
      <div className="space-y-6 border-l-2 border-dashed">
        <CareerTemplate
          title={"Intern - July 2024 - August 2024"}
          name={"MyDailyWork.com"}
          cgpa={`Web Development Intership`}
        />
        <CareerTemplate
          title={"Intern - August 2021 - November 2021"}
          name={"AICTE - EduSkills"}
          cgpa={`AWS Cloud Internship`}
        />
        <CareerTemplate
          title={"Intern - August 2019 - November 2019"}
          name={"S.P Technologies"}
          cgpa={`Android App Development Internship`}
        />
      </div>
    </div>
  );
}

export default Experience;
