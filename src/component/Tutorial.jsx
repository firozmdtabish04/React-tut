import React from "react";

// 1
function FreeCourse() {
  const course = {
    title: "Free React Course",
    description: "Learn React for free with this comprehensive course.",
    duration: "4 weeks",
    level: "Beginner",
  };
  return (
    <h1 className="text-3xl font-bold bg-black text-white">
      {course.description}
    </h1>
  );
}
// 2
function PaidCourse() {
  const name = "Paid React Course";
  return <h1 className="text-3xl font-bold bg-green-500 text-white">{name}</h1>;
}
// 3
function Chargeable() {
  const name = "Price React Course";
  return (
    <h1 className="text-3xl font-bold bg-orange-400 text-white">{name}</h1>
  );
}
// 0
function Tutorial() {
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold bg-red-400 text-white">
          Tutorial Component added
        </h1>
      </div>
      <FreeCourse />
      <PaidCourse />
      <Chargeable />
    </>
  );
}

export default Tutorial;
