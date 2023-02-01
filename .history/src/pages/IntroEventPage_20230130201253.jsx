import { Link } from 'react-router-dom';
import PhotoAlbum from '../components/PhotoAlbum/PhotoAlbum';

export default function IntroEventPage() {
	return (
		<div>
			<h1>여기는 이벤트 소개 페이지입니다.</h1>

			<Link to='/piece'>✏️롤링페이퍼 쓰기 버튼</Link>

			<PhotoAlbum />
		</div>
	);
}
F