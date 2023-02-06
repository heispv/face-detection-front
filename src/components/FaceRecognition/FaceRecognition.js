import React from "react";

const FaceRecognition = ({ imageUrl }) => {
  return (
    <div className="center">
      <img className="rowCenter" style={{width: "600px", marginTop: "15px"}} alt="" src={imageUrl} />
    </div>
  );
}

export default FaceRecognition;