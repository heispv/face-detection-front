import React from "react";
import "./ImageLinkFrom.css"

const ImageLinkFrom = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className="white f3">
        {"Upload the image of your food and get its name."}
      </p>
      <div className="inputs">
        <div className="row inputAndButton pa4 shadow-5 br3" >
          <input className="f4 pa2 w-75 center" type={"text"} onChange={onInputChange}/>
          <button
            className="w-25 f4 grow link ph3 pv2 dib white bg-light-purple"
            onClick={onButtonSubmit}>
            Get the name
          </button>
        </div>
      </div>
    </div>
  );

}

export default ImageLinkFrom;