/* eslint-disable */

import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { stickerListState } from "./Atom";

function CompleteStickerList() {
  const stickerPageStyle = {
    width: "100%",
    height: "800px",
    // backgroundColor: "aqua",
    position: "absolute",
    top: "0px",
    left: "0px",
    overflow: "hidden",
  };

  const stickerListData = useRecoilValue(stickerListState);

  useEffect(() => {
    // if (props) {
    //   const stickerListData = props.recapStickerList;
    //   return stickerListData;
    // } else {
    //   const stickerListData = useRecoilValue(stickerListState);
    //   return stickerListData;
    // } 
    console.log(stickerListData)
  }, [stickerListData]);

  return (
    <>
      <div className="stickerPageContainer" style={stickerPageStyle}>
        {stickerListData ? "있다" : "없네"}
        {stickerListData &&
          stickerListData.map((sticker, idx) => {
            if (sticker) {
              return (
                <>
                  {/* , transform:rotate(sticker.angle) */}
                  <img
                    key={idx}
                    src={sticker.stickerUrl}
                    style={{
                      width: `${sticker.scale * 50}px`,
                      height: `${sticker.scale * 50}px`,
                      transform: `rotate(${sticker.angle}deg)`,
                      position: "relative",
                      top: `${sticker.topLoc}px`,
                      left: `${sticker.leftLoc}px`,
                      // 화면 크기에 따라 붙여지는 위치가 달라짐 조정 필요!!!!!****
                      // zIndex: sticker.zIndex,
                      position: "absolute",
                    }}
                    alt="sticker"
                    // onClick={() => console.log(sticker)}
                  />
                </>
              );
            }
          })}
      </div>
    </>
  );
}

export default CompleteStickerList;
