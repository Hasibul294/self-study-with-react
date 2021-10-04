import React, { useEffect, useState } from "react";

const Faculty = () => {
  const [teachers, setTeachers] = useState([]);
  useEffect(() => {
    fetch("./data2.JSON")
      .then((res) => res.json())
      .then((data) => setTeachers(data));
  }, []);
  return (
    <div>
      <div className="bg-gray-200 py-16">
        <h1 className="text-4xl uppercase font-bold">Our Teachers</h1>
        <div className="grid grid-cols-3 gap-8 text-xl p-8">
          {teachers.map((teacher) => (
            <div
              key={teacher.id}
              className="bg-white border-1 rounded-md border-green-500 p-4"
            >
              <img className="w-full" src={teacher.img} alt="" />
              <h2 className="text-2xl text-left font-bold my-2">
                Name: {teacher.name}
              </h2>
              <h4 className="text-left text-xl font-medium my-2">
                {teacher.profession}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faculty;
