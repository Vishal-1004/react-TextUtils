import React from "react";

function About(props) {
  document.title = "TextUtils - About";
  return (
    <div
      className="container"
      style={{ color: props.mode === "dark" ? "white" : "black" }}
    >
      <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionExample">
        <div
          className="card"
          style={{
            backgroundColor: props.mode === "dark" ? "#5e5e5e" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          <div className="card-header" id="headingOne">
            <h2 className="mb-0">
              <button
                className="btn btn-link btn-block text-left"
                type="button"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Why use TextUtils?
              </button>
            </h2>
          </div>

          <div
            id="collapseOne"
            className="collapse show"
            aria-labelledby="headingOne"
            data-parent="#accordionExample"
          >
            <div className="card-body">
              TextUtils is a dynamic web application developed using the
              powerful JavaScript library, React. Our platform offers a
              convenient way to manipulate and enhance your text. Whether you
              need to convert your text to uppercase or lowercase or even copy
              your edited text directly to your clipboard, TextUtils has you
              covered.
              <br /> One of the key features of TextUtils is its adaptability to
              your preferences. You have the freedom to switch between the sleek
              and stylish dark mode or the clean and refreshing light mode,
              ensuring a comfortable and personalized experience. With
              TextUtils, every action you take is met with helpful prompts,
              ensuring a user-friendly and intuitive journey.
              <br /> We hope you find TextUtils to be a valuable resource for
              your text-related needs. Thank you for visiting, and we appreciate
              your support for our work.
            </div>
          </div>
        </div>
        <div
          className="card"
          style={{
            backgroundColor: props.mode === "dark" ? "#5e5e5e" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          <div className="card-header" id="headingTwo">
            <h2 className="mb-0">
              <button
                className="btn btn-link btn-block text-left collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Why use React to build this website?
              </button>
            </h2>
          </div>
          <div
            id="collapseTwo"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionExample"
          >
            <div className="card-body">
              React is chosen to build the TextUtils website due to its
              component-based architecture, efficient virtual DOM, and
              reactivity. These features simplify UI development, improve
              performance, and streamline maintenance. React's extensive
              ecosystem, strong community support, and compatibility with
              various tools further enhance the development process.
              Additionally, React's support for server-side rendering,
              scalability, and performance optimization make it an excellent
              choice for building dynamic and user-friendly websites like
              TextUtils.
            </div>
          </div>
        </div>
        <div
          className="card"
          style={{
            backgroundColor: props.mode === "dark" ? "#5e5e5e" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          <div className="card-header" id="headingThree">
            <h2 className="mb-0">
              <button
                className="btn btn-link btn-block text-left collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Who build this website?
              </button>
            </h2>
          </div>
          <div
            id="collapseThree"
            className="collapse"
            aria-labelledby="headingThree"
            data-parent="#accordionExample"
          >
            <div className="card-body">
              Greetings! I'm Vishal Kumar Yadav, a dedicated third-year student
              at VIT Chennai. I take pride in maintaining a stellar academic
              record with a consistent 9-pointer, unlocking various advantages
              that my college offers. My journey has been a progressive one,
              having already mastered the foundational elements of front-end
              development, including HTML, CSS, and JavaScript. Furthermore,
              I've delved into advanced tools such as Bootstrap, SASS, and honed
              my skills in WordPress development.
              <br /> My current focus revolves around building a robust
              foundation in React.js, recognizing its significance in modern web
              development. Simultaneously, I've ventured into the world of UI/UX
              design, leveraging tools like Figma to craft engaging user
              experiences.
              <br /> To get a deeper insight into my professional journey feel
              free to visit my{" "}
              <a
                href="https://www.linkedin.com/in/vishal-kumar-yadav-8085a3232/"
                target="blank"
              >
                LinkedIn
              </a>
              . You can also check out my extensive body of work over their. I'm
              excited to continue evolving and contributing to the ever-evolving
              field of web development.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
