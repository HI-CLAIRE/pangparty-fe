// import SearchBar from "../components/Search/SearchBar";
// import SearchResults from "../components/Search/SearchResults";
// import SearchType from "../components/Search/SearchType";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { authState } from "../recoils/user/Atoms";

// 우리 메인 홈화면

export default function HomePage() {
  const auth = useRecoilValue(authState);

  return (
    <div>
      <h1>여기가 Home 입니다.</h1>
      {/* <SearchBar/>
      <SearchType/>
      <SearchResults/> */}
      <Link to="/event/intro">이벤트 소개페이지 바로가기</Link>
      <Link to="/event/tagmember">
        <button type="button">🎉이벤트 만들기🎉</button>
      </Link>
      <br />
      {auth ? (
        <Link to="/login">로그아웃</Link>
      ) : (
        <Link to="/login">로그인</Link>
      )}
      <br />
      <Link to="/signup/intro">회원가입</Link>
    </div>
  );
}
