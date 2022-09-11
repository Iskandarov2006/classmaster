import React, { useRef } from "react";
// import '../css/course.css'
function News() {
  const elImg = useRef();
  const elText = useRef();
  const elvary = useRef();
  const handleForm = (evt) => {
    evt.preventDefault();
    fetch("https://class-master-api.herokuapp.com/api/news/add/", {
      method: "post",
      title: elText.current.value,
      description: elvary.current.value,
      img: elImg.current.value
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };
  return (
    <div>
      <form>
        <input ref={elImg} type="text" name="img" required/>
        <input ref={elText} type="text" name="title" required/>
        <input ref={elvary} type="text" name="description" required/>
        <button type="Submit" onClick={handleForm}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default News;
