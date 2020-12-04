import React from "react";

const Starter: React.FC = (): JSX.Element => {
  return (
    <div className="started">
      <div className="started__inner">
        <h1 className="started__title">More than just shorter links</h1>
        <div className="started__text">
          Build your brand`s recognition and get detailed <br />
          insights on how your links are performing.
        </div>
        <button className="btn started__btn">Get Started</button>
      </div>
      <img
        src="../../images/illustration-working.svg"
        alt=""
        className="started__bg"
      />
    </div>
  );
};
export default Starter;
