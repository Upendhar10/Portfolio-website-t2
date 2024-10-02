import CareerTemplate from "../Utils/CareerTemplate";

const Internship = {
  MyDailyWork:
    "https://drive.google.com/file/d/114jPgjM2_TgXwYY1pKPBXVPmjhb_2K05/view",
  AWSCloud:
    "https://drive.google.com/file/d/1py8qBEt7X0lrCHE33T432BHvJ-CIJe87/view",
};

function Experience() {
  return (
    <div className="my-3">
      <h3 className="mb-5 text-center font-[Gilroy-dark] text-4xl uppercase text-blue-500">
        Experience
      </h3>
      <div className="border-l-2 border-dashed md:ml-0">
        <CareerTemplate
          title={"Web Development Internship - 2024"}
          name={"MyDailyWork.com"}
          cgpa={"Certificate"}
          href={Internship.MyDailyWork}
        />
        <CareerTemplate
          title={"AWS Cloud Internship - 2021"}
          name={"AICTE & Eduskills"}
          cgpa={"Certificate"}
          href={Internship.AWSCloud}
        />
      </div>
    </div>
  );
}

export default Experience;
