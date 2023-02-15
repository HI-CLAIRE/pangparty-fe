/* eslint-disable */
// import { useEffect, useState } from "react";
import { useEffect, useState } from "react";
import Icon from "../common/Icon";
import axios from "../../api/axios";
import requests from "../../api/requests";
import useAuth from "../../hooks/useAuth";
import "./Pang.scss";

function Pang({ eventUid }) {
  const [isPang, setIsPang] = useState(false);
  const [pangCnt, setPangCnt] = useState(0);

  const auth = useAuth();
  const [user, setUser] = useState("");
  useEffect(() => {
    setUser(auth.user);
  }, [user]);


  // 이벤트 소개페이지 정보 GET
  useEffect(() => {
    // console.log(eventUid)
    if(!eventUid) return;
    async function fetchData() {
      await axios
        .get(requests.events.introEvent.eventItroAll(eventUid))
        .then((res) => {
          setIsPang(res.data.isLiked);
          setPangCnt(res.data.likeCnt);
        })
        .catch((err) => {
          console.error(err);
        })
    }
    fetchData();
  }, [eventUid]);

  const pangClickHandler = (e) => {
    e.preventDefault();

    async function deletePang() {
      await axios
        .delete(requests.events.introEvent.deletePang(eventUid))
        .then((res) => {
          setPangCnt(pangCnt - 1);
          setIsPang(!isPang);
        })
        .catch((err) => console.log(err));
    }

    async function postPang() {
      await axios
        .post(requests.events.introEvent.postPang(eventUid))
        .then((res) => {
          setPangCnt(pangCnt + 1);
          setIsPang(!isPang);
        })
        .catch((err) => console.log(err));
    }

    if (isPang) {
      return deletePang();
    }
    return postPang();
  };

  return (
    <>
      <div className="pangContainer" onClick={pangClickHandler}>
        <div className="pangIcon">
          <Icon img="pang" isActive={isPang} />
        </div>
        <div
          className="pangCnt"
          style={isPang ? { color: "#FF7A5C" } : { color: "#6B6B6B" }}
        >
          {pangCnt}
        </div>
      </div>
    </>
  );
}

export default Pang;
