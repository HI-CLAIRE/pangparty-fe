/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import EventLink from "./EventLink";
import axios from "../../api/axios";
import requests from "../../api/requests";
import "./Feed.scss";

export default function CreateFeed() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [eventUid, setEventUid] = useState("");
  const navigate = useNavigate();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    const contentObj = {
      title,
      content,
      eventUid,
    };
    const postData = async (body) => {
      await axios
        .post(requests.posts.postPost(), body, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.err(err);
        });
    };
    postData(contentObj);
    return navigate("/feed");
  };

  return (
    <div>
      {/* 상단 component에서 handleSubmit 가능하게 */}
      <form onSubmit={handleSubmit}>
        <h4>제목</h4>
        <input
          type="text"
          value={title}
          placeholder="제목을 입력해주세요"
          onChange={handleTitleChange}
          maxLength="20"
        />
        <h4>내용</h4>
        <textarea
          type="text"
          value={content}
          placeholder="내용을 입력해주세요"
          onChange={handleContentChange}
        />
        <h4>이벤트 링크하기</h4>
        <EventLink eventUid={eventUid} setEventUid={setEventUid} />
        <button></button>
      </form>
    </div>
  );
}
