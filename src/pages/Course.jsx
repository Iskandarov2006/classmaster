import React, { useEffect, useState } from "react";
import '../css/course.css'
function Course() {
  const [course, setCourse] = useState([]);
  useEffect(() => {
    fetch("https://class-master-admin.herokuapp.com/api/course/")
      .then((res) => res.json())
      .then((data) => setCourse(data.data))
      .catch((error) => console.log(error));
  }, [fetch, setCourse]);
  return (
    <>
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
                      <h5>Kurs nomi:</h5> <strong>{e.name}</strong>
                    </div>
                    <div>
                      <h5>Kurs narxi:</h5> <strong>{e.price}</strong>
                    </div>
                    <a href="tel: +998999543001">
                      <button>Qoshilish</button>
                    </a>
                  </div>
                </div>
              ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default Course;
