import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Course = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("./data.JSON")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div>
      <Header></Header>
      <div className="bg-gray-200 py-16">
        <h1 className="text-4xl uppercase font-bold">All courses</h1>
        <div className="grid grid-cols-3 gap-8 text-xl p-8">
          {courses.map((course) => (
            <div
              key={course.courseId}
              className="bg-white border-1 rounded-md border-green-500 p-4"
            >
              <img className="w-full" src={course.img} alt="" />
              <h2 className="text-left font-semibold">{course.title}</h2>
              <h2 className="text-m text-justify my-3">{course.details}</h2>
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-left text-4xl font-bold">
                  ${course.price}
                </h4>
                <Rating
                  className="text-yellow-400"
                  initialRating={course.rating}
                  readonly
                  emptySymbol="far fa-star"
                  fullSymbol="fas fa-star"
                ></Rating>
              </div>
              <p className="text-left text-sm">
                Enrolled: (<span className="font-bold">{course.enrolled} </span>
                )
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Course;
