import React from "react";

const Footer: React.FC = (): JSX.Element => {
  // массив из массивов (просто для удобной отрисовки списков)
  const arr: Array<Array<string>> = [
    ["Features", "Link Shotening", "Branded Links", "Analytics"],
    ["Resources", "Blog", "Developers", "Support"],
    ["Company", "About", "Our Team", "Careers", "Contact"],
  ];
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__box">
          <div className="footer__logo">Shortly</div>
          <div className="footer__info">
            {arr.map((item, index) => (
              <ul key={index} className="footer__list">
                {item.map((elem, index) => (
                  <li key={elem+index}
                    className={
                      index ? "footer__list-item" : "footer__list-title"
                    }
                  >
                    <a href="#">{elem}</a>
                  </li>
                ))}
              </ul>
            ))}
            <ul className="list-img">
              <li className="list-img__item">
                <a href="#">
                  <img src="../../images/icon-facebook.svg" alt="" />
                </a>
              </li>
              <li className="list-img__item">
                <a href="#">
                  <img src="../../images/icon-twitter.svg" alt="" />
                </a>
              </li>
              <li className="list-img__item">
                <a href="#">
                  <img src="../../images/icon-pinterest.svg" alt="" />
                </a>
              </li>
              <li className="list-img__item">
                <a href="#">
                  <img src="../../images/icon-instagram.svg" alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
