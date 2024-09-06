import CareerTemplate from "../Utils/CareerTemplate";

function Academics() {
  return (
    <div className="ml-4 flex w-auto flex-col items-center justify-center">
      <h3 className="mb-8 text-center font-[Gilroy-dark] text-3xl uppercase text-blue-500">
        Academics
      </h3>
      <div className="ml-6 space-y-6 border-l-2 border-dashed md:ml-0">
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
        <CareerTemplate
          title={"High School -  2016"}
          name={"Bhavya's Grammar High School"}
          cgpa={`CGPA : ${8.8}`}
        />
      </div>
    </div>
  );
}

export default Academics;
