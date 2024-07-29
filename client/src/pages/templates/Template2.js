import React from "react";
import "../../resources/template.css";

function Template2() {
  const user = JSON.parse(localStorage.getItem("SimpliCV-user"));
  return (
    <div className="template1-parent">
      <div className="d-flex flex-column">
        <h1>
          {user.firstName.toUpperCase()} {user.lastName.toUpperCase()}
        </h1>
        <div>
          <p>{user.email}</p>
          <p>{user.address}</p>
          <p>{user.mobileNumber}</p>
        </div>
      </div>
      <div className="divider mt-5"></div>
      <div className="divider mt-1"></div>

      <div className="objective mt-5">
        <h3 style={{backgroundColor:'gray' , padding:10}}>Objective</h3>
        <hr />
        <p>{user.carrierObjective}</p>
      </div>
      <div className="divider mt-5"></div>

      <div className="education mt-5">
        <h3 style={{backgroundColor:'gray' , padding:10}}>Education</h3>
        <hr />
        {user.education.map((education) => {
          return (
            <div className="d-flex">
              <h6 style={{ width: 120 }}>
                <b>{education.range} : </b>
              </h6>
              <p>
                <b>{education.qualification}</b> with{" "}
                <b>{education.percentage}%</b> in {education.institution}
              </p>
            </div>
          );
        })}
      </div>
      <div className="divider mt-5"></div>

      <div className="experience mt-5">
        <h3 style={{backgroundColor:'gray' , padding:10}}>Experience</h3>
        <hr />
        {user.experience.map((exp) => {
          return (
            <div className="d-flex">
              <h6 style={{ width: 90 }}>
                <b>{exp.range} : </b>
              </h6>
              <p>
                Worked As a/an <b>{exp.role}</b> at <b>{exp.company}</b> in{" "}
                <b>{exp.place}</b>
              </p>
            </div>
          );
        })}
      </div>
      <div className="divider mt-5"></div>

      <div className="projects mt-5">
        <h3 style={{backgroundColor:'gray' , padding:10}}>Projects</h3>
        <hr />
        {user.projects.map((project) => {
          return (
            <div className="d-flex mt-5 flex-column">
              <p className="d-flex">
                <h5>
                  <b>{project.title}</b>
                </h5>{" "}
                <span className="mx-2">in</span>{" "}
                <h5>
                  <b>[{project.range}]</b>
                </h5>
              </p>
              <p>{project.description}</p>
            </div>
          );
        })}
      </div>
      <div className="divider mt-5"></div>

      <div className="skills mt-5">
        <h3 style={{backgroundColor:'gray' , padding:10}}>Skills</h3>
        <hr />

        <div className="d-flex flex-wrap">
          {user.skills.map((skill) => {
            return (
              <div className="m-2">
                <p className="mb-0" style={{ fontSize: 16, fontWeight: 500 }}>
                  {skill.technology}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="divider mt-5"></div>

      <div className="achievements mt-5">
        <h3 style={{backgroundColor:'gray' , padding:10}}>Achievements</h3>
        <hr />
        {user.achievements.map((achieve) => {
          return (
            <div className="d-flex flex-column">
              <h4>
                <b>{achieve.title} : </b>
              </h4>
              <p>{achieve.description}</p>
            </div>
          );
        })}
      </div>
      <div className="divider mt-5"></div>

      <div className="awards mt-5">
        <h3 style={{backgroundColor:'gray' , padding:10}}>Awards</h3>
        <hr />
        {user.awards.map((award) => {
          return (
            <div className="d-flex flex-column">
              <h4>
                <b>{award.award} : </b> <span className="mx-2">at</span>
                <b>{award.organization}</b> <span className="mx-2">in</span>
                <b>{award.year}</b>
              </h4>
              <p>{award.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Template2;
