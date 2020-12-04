import React, { useState, useCallback } from "react";
// кнопка появляется на ширине 768
const Burger: React.FC = (): JSX.Element => {
//  состояние, отвечает за то открыта ли навигация или нет
  const [open, setOpen] = useState(false);
 // отслеживаем нажатие кнопки для открытия навигации
  const handleBurger = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    setOpen(!open);
  }, [open]);
  // если open === true, то рисуем навигацию
  if (open) {
    return (
      <div className="burger">
        <button onClick={handleBurger} className="burger__btn">
          <img src="../../images/menu.svg" alt="" className="burger__img" />
        </button>
        <div className="burger__window">
          <ul className="burger__list">
            <li className="burger__item">
              <a href="#">Features</a>
            </li>
            <li className="burger__item">
              <a href="#">Pricing</a>
            </li>
            <li className="burger__item">
              <a href="#">Resources</a>
            </li>
          </ul>
          <a href="#" className="burger__item">
            Login
          </a>
          <button className="btn burger__sign">Sign Up</button>
        </div>
      </div>
    );
  }

  return (
    <div className="burger">
      <button onClick={handleBurger} className="burger__btn">
        <img src="../../images/menu.svg" alt="" className="burger__img" />
      </button>
    </div>
  );
};
export default Burger;
