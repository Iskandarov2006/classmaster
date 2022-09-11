import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/Home.css";
function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://class-master-admin.herokuapp.com/api/news/")
      .then((res) => res.json())
      .then((data) => setData(data.data))
      .catch((error) => console.log(error));
  }, []);

  const [course, setCourse] = useState([]);
  useEffect(() => {
    fetch("https://class-master-admin.herokuapp.com/api/course/")
      .then((res) => res.json())
      .then((course) => setCourse(course.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <header className="header-bigg">
        <div>
          <p>
            Zamonaviy kasblarni <span>classmaster</span> bilan o'rganing
          </p>
        </div>
      </header>
      <section className="NewsSections">
        <div className="newstext">
          <h1>Yangiliklar</h1>
          <Link className="NewSectionLink" to="/">
            Koproq <i className="fa-sharp fa-solid fa-arrow-right"></i>
          </Link>
        </div>
        <div className="News">
          {data.length > 0 &&
            data.map((e) => (
              <div className="New" key={e.title}>
                <div>
                  <img src={e.img} alt="" />
                  <div>
                    <h4>{e.title}</h4>
                    <h5 id="description">
                      <p>{e.description}</p>
                    </h5>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>

      <section className="NewsSections2 NewsSections">
        <div className="newstext">
          <h1>Kurslarimiz</h1>
          <Link className="NewSectionLink" to="/course">
            Koproq <i className="fa-sharp fa-solid fa-arrow-right"></i>
          </Link>
        </div>
        <div className="News">
          {data.length > 0 &&
            course.map((e) => (
              <Link to='/course'>
                <div className="New" key={e.id}>
                  <div>
                    <img src={e.img} alt="" />
                    <div>
                      <h4>
                        Kurs nomi: <b>{e.name}</b>
                      </h4>
                      <h4 id="description">
                        <p>
                          Narxi: <b>{e.price}</b>
                        </p>
                      </h4>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </section>
    </>
  );
}

export default Home;
