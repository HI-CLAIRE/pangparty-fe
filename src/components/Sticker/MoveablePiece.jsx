/* eslint-disable */
// 원하는 기능만 남겨놓고 삭제할것

// import ReactDOM from "react-dom";
import { ref } from "framework-utils";
import { Frame } from "scenejs";
import Moveable from "react-moveable";
import React from "react";
import "./MoveablePiece.css";

// 한별 수정
const customAble = {
  name: "tooltool",
  render(moveable) {
    const { renderPoses } = moveable.state;

    return (
      <button
        className="stickerClose"
        onClick={() => {
          alert("ㅎㅎ");
        }}
        style={{
          position: "absolute",
          transform: `translate(-50%, -50%) translate(${renderPoses[1][0]}px, ${renderPoses[1][1]}px) translateZ(-50px)`,
          zIndex: 100,
        }}
      >
        <img alt="exit" src={`${process.env.PUBLIC_URL}/image/exit.png`} style={{width: "10px"}}/>
      </button>
    );
  },
};

class MoveablePiece extends React.Component {
  frame = new Frame({
    position: "absolute",
    width: "100px",
    height: "100px",
    left: "0px",
    top: "0px",
    transform: {
      rotate: "0deg",
      scaleX: 1,
      scaleY: 1,
      matrix3d: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    },
  });
  state = {
    target: null,
    container: null,
    scalable: true,
  };
  render() {
    const { scalable, target } = this.state;
    const sticker = this.props.sticker ? this.props.sticker : {};
    // console.log(sticker);

    return (
      <>
        <Moveable
          ref={ref(this, "moveable")}
          target={target}
          pinchThreshold={20}
          container={document.body}
          draggable={true}
          scalable={scalable}
          rotatable={true}
          origin={false}
          throttleDrag={1}
          throttleRotate={0.2}
          throttleScale={0.01}
          onDrag={this.onDrag}
          onScale={this.onScale}
          onRotate={this.onRotate}
          onDragEnd={this.onEnd}
          onScaleEnd={this.onEnd}
          onRotateEnd={this.onEnd}
          // 한별 수정
          ables={[customAble]}
          tooltool={true}
        />

        {/* 스티커 이미지 = moveable한 container */}
        <div className="container">
          <div className="moveable">
            <span>
              {sticker && (
                <img
                  src={sticker.url}
                  position="relative"
                  width="100px"
                  height="100px;"
                />
              )}
            </span>
          </div>
        </div>

        {/* 선택 영역 = label */}
        <div className="label" ref={ref(this, "label")} />
      </>
    );
  }

  // 마운트 발생
  componentDidMount() {
    this.setState({
      target: document.querySelector(".moveable"),
    });
  }
  clickScalable = () => {
    this.setState({
      scalable: true,
    });
  };
  setTransform(target) {
    target.style.cssText = this.frame.toCSS();
  }
  setLabel(clientX, clientY, text) {
    this.label.style.cssText = `display: block; 
      transform: translate(${clientX}px, ${clientY - 10}px) 
      translate(-100%, -100%)
      translateZ(-100px);`;
    this.label.innerHTML = text;
  }
  // onDrag = ({ target, clientX, clientY, top, left, isPinch }) => {
  onDrag = ({ target, top, left }) => {
    // `${left + 50}px` -> `${left}px`
    // 커서 조정 수정(23.02.03 11: 37)
    this.frame.set("left", `${left}px`);
    this.frame.set("top", `${top}px`);
    this.setTransform(target);
    // if (!isPinch) {
    //   this.setLabel(clientX, clientY, `X: ${left}px<br/>Y: ${top}px`);
    // }
  };
  // onScale = ({ target, delta, clientX, clientY, isPinch }) => {
  onScale = ({ target, delta }) => {
    const scaleX = this.frame.get("transform", "scaleX") * delta[0];
    // delta[1] -> delta[0]로 수정(23.02.03 10:35 한별)
    // 대각선 방향 스케일만 커지게 된..듯?
    const scaleY = this.frame.get("transform", "scaleY") * delta[0];
    this.frame.set("transform", "scaleX", scaleX);
    this.frame.set("transform", "scaleY", scaleY);
    this.setTransform(target);
    // if (!isPinch) {
    //   this.setLabel(
    //     clientX,
    //     clientY,
    //     `S: ${scaleX.toFixed(2)}, ${scaleY.toFixed(2)}`
    //   );
    // }
  };
  // onRotate = ({ target, clientX, clientY, beforeDelta, isPinch }) => {
  onRotate = ({ target, beforeDelta }) => {
    const deg = parseFloat(this.frame.get("transform", "rotate")) + beforeDelta;

    this.frame.set("transform", "rotate", `${deg}deg`);
    this.setTransform(target);
    // if (!isPinch) {
    //   this.setLabel(clientX, clientY, `R: ${deg.toFixed(1)}`);
    // }
  };
  onEnd = () => {
    this.label.style.display = "none";
  };
}
// const rootElement = document.getElementById("root");
// ReactDOM.render(<MoveablePiece />, rootElement);

export default MoveablePiece;
