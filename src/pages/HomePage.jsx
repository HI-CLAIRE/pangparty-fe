// import SearchBar from "components/Search/SearchBar";
// import SearchResults from "components/Search/SearchResults";
// import SearchType from "components/Search/SearchType";
import { Link } from "react-router-dom";
import Button from "../components/common/Button";
import Icon from "../components/common/Icon";

// 우리 메인 홈화면

export default function HomePage() {
  return (
    <div>
      <h1>여기가 Home 입니다.</h1>
      {/* <SearchBar/>
      <SearchType/>
      <SearchResults/> */}
      <div>
        <Link to="/event/intro">
          <Button>이벤트 소개페이지 바로가기</Button>
        </Link>
        <Link to="/event/tagmember">
          <Button>🎉이벤트 만들기🎉</Button>
        </Link>
        <Button size="small" color="orange-1">
          작은 버튼
        </Button>

        <p>아이콘 모음 ...</p>
        <Icon img="alarm">알람</Icon>
        <Icon img="like">좋아요</Icon>
        <Icon img="pang">팡파레</Icon>
        <Icon img="setting">설정</Icon>
      </div>
    </div>
  );
}

// const [isActivate, setIsActivate] = useState({
//   Feed: true,
//   ReceicedEvent: false,
//   Badges: false,
//   EventCalander: false,
// });

// const activateHandler = (e) => {
//   const newActivation = {
//     Feed: false,
//     ReceicedEvent: false,
//     Badges: false,
//     EventCalander: false,
//   };
//   const newTarget = e.target.id;
//   newActivation[newTarget] = true;
//   setIsActivate(newActivation);
// };
