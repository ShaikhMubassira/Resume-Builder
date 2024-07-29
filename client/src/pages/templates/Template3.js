import React from "react";
import "../../resources/template.css"; // For additional custom styles, if needed

function Template3() {
  const user = JSON.parse(localStorage.getItem("SimpliCV-user"));
  return (
    <div className="container my-4">
      <div className="row">
        {/* Left Column */}
        <div className="col-md-6">
          <div className="personal-info mb-4">
            <h1>
              {user.firstName.toUpperCase()} {user.lastName.toUpperCase()}
            </h1>
            <div>
              <p>{user.email}</p>
              <p>{user.address}</p>
              <p>{user.mobileNumber}</p>
            </div>
          </div>

          <div className="objective mb-4">
            <h3 className="bg-secondary text-white p-2">Objective</h3>
            <hr />
            <p>{user.carrierObjective}</p>
          </div>

          <div className="education mb-4">
            <h3 className="bg-secondary text-white p-2">Education</h3>
            <hr />
            {user.education.map((education, index) => (
              <div key={index} className="d-flex mb-2">
                <h6 className="me-2" style={{ width: "120px" }}>
                  <b>{education.range} : </b>
                </h6>
                <p>
                  <b>{education.qualification}</b> with{" "}
                  <b>{education.percentage}%</b> in {education.institution}
                </p>
              </div>
            ))}
          </div>

          <div className="experience mb-4">
            <h3 className="bg-secondary text-white p-2">Experience</h3>
            <hr />
            {user.experience.map((exp, index) => (
              <div key={index} className="d-flex mb-2">
                <h6 className="me-2" style={{ width: "90px" }}>
                  <b>{exp.range} : </b>
                </h6>
                <p>
                  Worked As a/an <b>{exp.role}</b> at <b>{exp.company}</b> in{" "}
                  <b>{exp.place}</b>
                </p>
              </div>
            ))}
          </div>
          <div className="projects mb-4">
            <h3 className="bg-secondary text-white p-2">Projects</h3>
            <hr />
            {user.projects.map((project, index) => (
              <div key={index} className="mb-4">
                <p className="d-flex align-items-center">
                  <h5 className="mb-0 me-2">
                    <b>{project.title}</b>
                  </h5>
                  <span className="mx-2">in</span>
                  <h5 className="mb-0">
                    <b>[{project.range}]</b>
                  </h5>
                </p>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="col-md-6">
          <div className="skills mb-4">
            <h3 className="bg-secondary text-white p-2">Skills</h3>
            <hr />
            <div className="d-flex flex-wrap">
              {user.skills.map((skill, index) => (
                <div key={index} className="m-2">
                  <p
                    className="mb-0"
                    style={{ fontSize: "16px", fontWeight: 500 }}
                  >
                    {skill.technology}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="achievements mb-4">
            <h3 className="bg-secondary text-white p-2">Achievements</h3>
            <hr />
            {user.achievements.map((achieve, index) => (
              <div key={index} className="mb-4">
                <h4>
                  <b>{achieve.title} : </b>
                </h4>
                <p>{achieve.description}</p>
              </div>
            ))}
          </div>

          <div className="awards mb-4">
            <h3 className="bg-secondary text-white p-2">Awards</h3>
            <hr />
            {user.awards.map((award, index) => (
              <div key={index} className="mb-4">
                <h4>
                  <b>{award.award} : </b> <span className="mx-2">at</span>
                  <b>{award.organization}</b> <span className="mx-2">in</span>
                  <b>{award.year}</b>
                </h4>
                <p>{award.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Template3;
