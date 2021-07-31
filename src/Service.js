import React from "react";
import Card from "./Card";
import Sdata from "./components/Sdata"


function Service() {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">our services</h1>
      </div>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {
                Sdata.map((val) =>{
                  return <Card 
                  imgsrc={val.imgsrc}
                  title={val.title}
                  />
                })
              }        
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
