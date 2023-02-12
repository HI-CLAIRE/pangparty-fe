/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import styled from "styled-components";
import PhotoUpload from "./PhotoUpload";
import PhotoCarousel from "./PhotoCarousel";
import axios from "../../api/axios";
import requests from "../../api/requests";
import useAuth from "../../hooks/useAuth";

export default function PhotoAlbum({ isPart, eventUid }) {
  const page = 0;
  const limit = 30;

  const [photoList, setPhotoList] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [photoSelected, setPhotoSelected] = useState({});

  const auth = useAuth();
  const [user, setUser] = useState("");

  useEffect(() => {
    setUser(auth.user);
  }, [user]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        requests.events.album.mediaAll(eventUid, page, limit)
      );
      setPhotoList(request.data.media);
      console.log(request.data.media);
    }
    fetchData();
  }, []);

  const handleModalClick = (photo) => {
    setModalOpen(true);
    setPhotoSelected(photo);
  };

  return (
    <div>
      <AlbumFrame>
        {isPart && (
          <AddContainer>
            <PhotoUpload eventUid={eventUid} />
          </AddContainer>
        )}
        {photoList.map((photo) => {
          if (photo) {
            return (
              <button
                type="button"
                key={photo.uid}
                onClick={() => handleModalClick(photo)}
                onKeyDown={() => handleModalClick(photo)}
                style={{ backgroundColor: "transparent", border: "none" }}
              >
                <PhotoFrame src={photo.thumbnailUrl} />
              </button>
            );
          }
          return null;
        })}
      </AlbumFrame>
      <br />
      {modalOpen && (
        <PhotoCarousel
          mediaUid={photoSelected.uid}
          setModalOpen={setModalOpen}
          eventUid={eventUid}
          photoList={photoList}
          setPhotoList={setPhotoList}
        />
      )}
    </div>
  );
}

const AlbumFrame = styled.div`
  display: flex;
  width: auto;
  height: fit-contents;
  flex-flow: row wrap;
  gap: 5px;
  padding: 0px;
`;

const PhotoFrame = styled.img`
  display: flex;
  width: 90px;
  height: 90px;
  object-fit: cover;
  border-radius: 3px;
  box-shadow: 0px 0px 13px 4px rgba(209, 209, 209, 0.25);
`;

const AddContainer = styled.div`
  margin: 1px;
  padding: 0px 5px;
  border: 1px dashed #6b6b6b;
  display: flex;
  width: 85px;
  height: 85px;
  object-fit: cover;
`;
