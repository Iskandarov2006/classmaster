import React, { Fragment, useEffect, useState } from "react";

function Teachers() {
  const [course, setCourse] = useState([]);
  useEffect(() => {
    fetch("https://class-master-admin.herokuapp.com/api/teachers/")
      .then((res) => res.json())
      .then((data) => setCourse(data.data))
      .catch((error) => console.log(error));
  }, [fetch, setCourse]);
  return (
    <Fragment>
      <div className="bodyCourse">
        <section className="CoursesSection">
          <h1>Kurslar</h1>
          <div className="Courses">
            {course.length > 0 &&
              course.map((e) => (
                <div className="Course" key={e.id}>
                  <img src={e.img} alt="" />
                  <div>
                    <div>
                      <h5>Ismi:</h5> <strong>{e.name}</strong>
                    </div>
                    <div>
                      <h5>Fan:</h5> <strong>{e.science}</strong>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </section>
      </div>
    </Fragment>
  );
}

export default Teachers;
