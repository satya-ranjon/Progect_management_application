import styled from "styled-components";
import { images } from "../../constants";

const Div = styled.div`
  margin: 7vh auto;
  position: relative;
  span {
    position: absolute;
    top: 0;
    right: ${(props) =>
      (props.notifi >= 99 && "-15px") || (props.notifi < 100 && "-10px")};
    background: var(--active);
    padding: 0.2vh 0.9vh;
    border-radius: 20px;
    color: #ffff;
    font-size: 12px;
    font-weight: 500;
  }
  img {
    border: 1px solid var(--active);
    border-radius: 50%;
    width: 54px;
    hight: 54px;
    width: ${(props) =>
      (props.size === "lg" && "64px") ||
      (props.size === "md" && "54") ||
      (props.size === "sm" && "44px")};
    hight: ${(props) =>
      (props.size === "lg" && "64px") ||
      (props.size === "md" && "54") ||
      (props.size === "sm" && "44px")};
    padding: 0.3vh;
  }
`;

const Avater = ({ src, size, notifi }) => {
  return (
    <Div size={size} notifi={notifi}>
      <img src={src || images.avater} alt="avater" />
      {notifi > 0 && <span> {notifi} </span>}
    </Div>
  );
};

export default Avater;
