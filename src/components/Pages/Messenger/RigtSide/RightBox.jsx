import React from "react";

const RightBox = ({ obj }) => {
  return (
    <div style={{width: '350px', textAlign: 'center'}}>
      {obj.map((item) => (
        <div key={item.id}>
          <img
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50px",
              marginBottom: "20px",
            }}
            src={item.img}
          />
          <h4>{item.name}</h4>
        </div>
      ))}
    </div>
  );
};

export default RightBox;
