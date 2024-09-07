import CareerTemplate from "../Utils/CareerTemplate";

function Academics() {
  return (
    <div>
      <h3 className="mb-10 text-center font-[Gilroy-dark] text-3xl uppercase text-blue-500">
        Academics
      </h3>
      <div className="ml-14 border-l-2 border-dashed md:ml-0">
        <CareerTemplate
          title={"Intern - July 2024 - August 2024"}
          name={"MyDailyWork.com"}
          cgpa={`Web Development Intership`}
        />
        <CareerTemplate
          title={"B.Tech - 2022"}
          name={"Gokaraju Rangaraju Institute of Engineering and Technology"}
          cgpa={`CGPA : ${7.1}`}
        />
        <CareerTemplate
          title={"Diploma -  2019"}
          name={"Sanjay Gandhi Memorial Govt Polyechnic College"}
          cgpa={`CGPA : ${7.8}`}
        />
      </div>
    </div>
  );
}

export default Academics;
