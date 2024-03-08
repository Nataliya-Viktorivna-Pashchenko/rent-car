// import css from "./Button.module.css";

export const Button = ({ clickLoadMore }) => {
  return (
    <div >
    <button  type="button" onClick={clickLoadMore}>
      Load more...
      </button>
      </div>
  );
};