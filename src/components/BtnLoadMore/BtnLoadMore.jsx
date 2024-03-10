// import css from "./Button.module.css";
import { LoadMoreStyle } from "./BtnLoadMore.styled";

export const Button = ({ clickFn, title }) => {
  return (
    <LoadMoreStyle >
    <button className="buttonStyle" type="button" onClick={clickFn}>
      {title}
      </button>
      </LoadMoreStyle>
  );
};