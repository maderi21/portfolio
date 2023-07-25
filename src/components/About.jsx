import { Link } from "react-router-dom";
import { RoughNotation } from "react-rough-notation";

const About = () => {
  return (
    <section class="p-5">
      <div class="container">
        <div class="row align-items-center justify-content-between">
          <div class="col-md p-5">
            <h3 className="fw-light">About me</h3>
            <p>
              I am a curious front-end web dev located in Bratislava with a
              thirst for knowledge and a passion
              <RoughNotation
                type="highlight"
                show={true}
                color="#fed66d"
                animationDuration="2500"
              >
                for exploration.
              </RoughNotation>
              <RoughNotation
                type="box"
                show={true}
                color="tomato"
                animationDuration="2500"
              >
                When you combine my interest for learning, travel, eating, and
                reading, you can get a pretty cool team member, would you try?
              </RoughNotation>
            </p>
            <Link
              to="/about"
              className="link-offset-2 link-underline link-underline-opacity-0 text-dark fw-bold"
            >
              continue to read...
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
