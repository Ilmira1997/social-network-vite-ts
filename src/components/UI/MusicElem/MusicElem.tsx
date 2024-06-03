import { SCMusicElem } from "./MusicElem.style";

interface IMusicElem {
    linkImg:string,
    mainText:string,
    secondaryText:string,
}

export const MusicElem = ({linkImg,mainText,secondaryText}:IMusicElem) => {
    return (
        <SCMusicElem>
              <img src={linkImg} alt="Album" />
              <div className="music__description">
                <p className="main__text">{mainText}</p>
                <p className="secondary__text">{secondaryText}</p>
              </div>
              <div className="plus-button _active"></div>
            </SCMusicElem>
    );
};

