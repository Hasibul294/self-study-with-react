import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Home = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("./data.JSON")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div>
      <Header></Header>
      <div className="bg-home-image p-36 text-left text-white">
        <h1 className="text-4xl my-2">Welcome to Self Study</h1>
        <h1 className="text-6xl">The Best Learning Institution</h1>
        <p className="text-lg my-2">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </div>
      <div className="bg-gray-200 py-16">
        <h1 className="text-4xl uppercase font-bold">our courses</h1>
        <div className="grid grid-cols-3 gap-8 text-xl p-8">
          {courses.slice(0, 4).map((course) => (
            <div
              key={course.courseId}
              className="bg-white border-1 rounded-md border-green-500 p-4"
            >
              <img className="w-full" src={course.img} alt="" />
              <h2 className="text-left font-semibold">{course.title}</h2>
              <div className="flex justify-between items-center">
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
            </div>
          ))}
        </div>
      </div>
      <Footer> </Footer>
    </div>
  );
};

export default Home;
