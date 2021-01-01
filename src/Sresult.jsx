import React from "react";

const Sresult = (props) => {
    const Img = `https://source.unsplash.com/500x500/?${props.name}`;
    return(
        <>
          <div>
              <img src = {Img} alt = "Images"/>
          </div>
        </>
    );
};

export default Sresult;