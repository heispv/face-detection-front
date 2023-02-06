import React from "react";
import "./FaceRecognition.css"

const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div className="center">
      <div className="absolute" style={{width: "600px", marginTop: "15px"}}>
        <img id="inputImage" alt="" src={imageUrl} />
        <div className="bounding-box" style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
      </div>
    </div>
  );
}

export default FaceRecognition;