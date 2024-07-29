import React from "react";
import DefaultLayout from "../components/DefaultLayout";
import "../resources/template.css";
import template1img from "../resources/templates/Template_1.png";
import template2img from "../resources/templates/Template_2.png";
import template3img from "../resources/templates/Template_3.png";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const templates = [
    {
      title: "Simple Resume",
      image: template1img,
    },
    {
      title: "Highlighted Resume",
      image: template2img,
    },
    {
      title: "Partitioned Resume",
      image: template3img,
    }
  ];
  return (
    <DefaultLayout>
      <div className="row home">
        {templates.map((template, index) => {
          return (
            <div className="col-md-4" key={index}>
              <div className="template">
                <img src={template.image} height="400" alt="" className="image"/>
                <div className="text">
                  <p>{template.title}</p>
                  <button onClick={() => navigate(`/templates/${index + 1}`)}>TRY</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </DefaultLayout>
  );
}

export default Home;
