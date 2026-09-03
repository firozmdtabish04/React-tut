function PaidCourse({ courses }) {
  return (
    <>
      <h1>Paid Courses</h1>
      {courses.map((course) => (
        <div key={course.id}>
          <h2>{course.title}</h2>
          <p>Instructor: {course.name}</p>
        </div>
      ))}
    </>
  );
}

function Course() {
  const paidCourse = [
    {
      id: 1,
      title: "React JS",
      name: "Neha",
    },
    {
      id: 2,
      title: "Node JS",
      name: "Aarti",
    },
  ];

  return (
    <>
      <PaidCourse courses={paidCourse} />
      <div>Course!</div>
    </>
  );
}

export default Course;
