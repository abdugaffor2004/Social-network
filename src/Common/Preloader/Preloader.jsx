import preloader from "../../assets/img/Spinner-1s-200px.svg";
import s from "./Preloader.module.css";

let Preloader = () => {
  return (
    <div className={s.preloaderWrap}>
      <img src={preloader} alt="loader" />
    </div>
  );
};

export default Preloader;
