/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import "./CreateFeed.scss";
import "../Search/SearchEvent.scss";
import classNames from "classnames";

export default function EventLinkResults({
  setClickedEvent,
  searchResults,
  setModalOpen,
}) {
  const handleClick = (e, event) => {
    e.preventDefault();
    // console.log(event);
    setModalOpen(false);
    console.log(event);
    return setClickedEvent(event);
  };

  const getDday = (date) => {
    const dDay = new Date(date);
    const today = new Date();
    return Math.floor((dDay - today) / (1000 * 60 * 60 * 24));
  };

  return (
    <div>
      {searchResults
        ? searchResults.map((event) => {
            return (
              <div
                key={event.uid}
                onClick={(e) => handleClick(e, event)}
                className={classNames("SearchEvent")}
              >
                <img
                  src={event.imgUrl}
                  className="EventThumbnail"
                  alt="이벤트 이미지"
                />
                <div className="EventContents">
                  <div className="EventHeader">
                    {event.eventName && (
                      <div className="EventTitle">{event.eventName}</div>
                    )}
                    <div className="EventDday">D{getDday(event.dday)}</div>
                  </div>
                  <div className="EventTag">@{event.targetId}</div>
                  <div className="EventDate">{event.dday}</div>
                  <br />
                </div>
              </div>
            );
          })
        : ""}
    </div>
  );
}
