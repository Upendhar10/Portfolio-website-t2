import CareerTemplate from "../Utils/CareerTemplate";

function Academics() {
  return (
    <div className="my-3">
      <h3 className="mb-5 text-center font-[Gilroy-dark] text-4xl uppercase text-blue-500">
        Academics
      </h3>
      <div className="ml-14 border-l-2 border-dashed md:ml-0">
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
