import { Link } from 'react-router-dom';

// 완성된 롤링페이퍼 페이지

export default function PieceListPage() {
	return (
		<div>
			<h1>완성된 롤링페이퍼 페이지</h1>
			<div style={{ width: '100%', height: '500px' }} />
			<Link to='/rollingpaper/sticker'>
				<button type='button'>🧸스티커 붙이기🧸</button>
			</Link>
			<Link to='/'>🏡 회귀 🏡</Link>
		</div>
	);
}
