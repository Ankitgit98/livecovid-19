import React, { useEffect, useState } from "react";
import "tachyons";
import "./App.css";

const Covid = (props) => {
  const [data, setData] = useState([]);

  const getCovidData = async () => {
    try {
      const res = await fetch("https://api.covid19india.org/data.json");
      const covidData = await res.json();

      console.log(covidData.statewise[0]);

      setData(covidData.statewise[0]);
    } catch (err) {
      alert(err);
    }
  };
  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <section>
      <div className="super">
        <div className="superheading">
          <h1 className="head">🔴Live </h1>
          <h2 className="heading"> COVID-19 CoronaVirus Tracker</h2>
        </div>

        <div className="max-width">
          <div className="supercard">
            <div className="box box-time">
              <h2 className="text"> Time </h2>
              <p>{data.lastupdatedtime}</p>
            </div>

            <div className="box box-case">
              <h2 className="text">Active Case</h2>
              {data.active}
            </div>

            <div className="box box-re">
              <h2 className="text"> Recovered</h2>
              {data.recovered}
            </div>

            <div className="box box-death">
              <h2 className="text"> Death's</h2>
              {data.deaths}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Covid;
