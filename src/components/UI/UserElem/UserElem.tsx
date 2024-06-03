import { SCUserElem } from "./UserElem.style";

interface IUserElem {
  linkImg:string,
  mainText:string,
  secondaryText:string,
  online?:string
}

export const UserElem = ({linkImg,mainText,secondaryText,online}: IUserElem) => {
    return (
        <SCUserElem className="UserElem">
        <img src={linkImg} alt="User" />
        <div className="user__description">
          <p className="main__text">{mainText}</p>
          <p className={`secondary__text ${online}`}>{secondaryText}</p>
        </div>
        <span className="Badge">3</span>
      </SCUserElem>
    );
};