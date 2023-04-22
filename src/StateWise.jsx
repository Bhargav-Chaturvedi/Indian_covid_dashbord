import React, { useEffect, useState } from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const StateWise = () => {
  const [data, setdata] = useState([]);
  const CovidData = async () => {
    const res = await fetch("https://data.covid19india.org/data.json");
    const actualData = await res.json();
    console.log(actualData.statewise);
    setdata(actualData.statewise);
  };
  useEffect(() => {
    CovidData();
  }, []);
  return (
    <>
      {/* <h1>COVID-19 DASHBORD OF INDIAN REGION</h1> */}
      <div className="container-fluid mt-5">
        <div className="main-heading">
          <h1 className="mb-5 text-center">
            <span className="font-weight-bold">INDIAN </span>COVID-19 DASHBORD
          </h1>
        </div>
        <div className="table-responsive">
          <table className="table table-hover">
            <thead className="thead-dark">
              <tr>
                <th>State</th>
                <th>Confirmed</th>
                <th>Recovered</th>
                <th>Deaths</th>
                <th>Active</th>
                <th>Updated</th>
              </tr>
            </thead>
            <tbody>
              {data.map((curElement, index) => {
                return (
                  <tr key={index}>
                    <td>{curElement.state}</td>
                    <td>{curElement.confirmed}</td>
                    <td>{curElement.recovered}</td>
                    <td>{curElement.deaths}</td>
                    <td>{curElement.active}</td>
                    <td>{curElement.lastupdatedtime}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default StateWise;
