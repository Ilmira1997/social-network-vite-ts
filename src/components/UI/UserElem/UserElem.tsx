import { SCUserElem } from "./UserElem.style";

export const UserElem = () => {
    return (
        <SCUserElem className="UserElem">
        <img src="./img/profile/profile-img-1.jpeg" alt="User" />
        <div className="user__description">
          <p className="main__text">N E W</p>
          <p className="secondary__text">Развитие</p>
        </div>
        <span className="Badge">3</span>
      </SCUserElem>
    );
};