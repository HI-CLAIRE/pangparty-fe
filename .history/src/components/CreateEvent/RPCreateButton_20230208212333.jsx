/* eslint-disable */
import addRP from "../../assets/addRP.svg";

const addStyle = {
  backgroundImage: `url(${addRP})`,
  width: "50px",
  height: "50px",
  backgroundColor: "transparent",
};

function RpCreateButton() {
  return (
    <div className="" style={{ background: "aqua"}}>
      <button style={addStyle} />
    </div>
  );
}

export default RpCreateButton;