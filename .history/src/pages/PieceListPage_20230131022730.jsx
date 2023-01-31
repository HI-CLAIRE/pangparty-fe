import { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../components/common/Modal';
import StickerLists from '../components/Sticker/StickerLists';

// 완성된 롤링페이퍼 페이지

export default function PieceListPage() {

	return (
		<div>
			<h1>완성된 롤링페이퍼 페이지</h1>
			<div style={{ width: '100%', height: '500px' }} />
			
			<Link to='/'>🏡 회귀 🏡</Link>
		</div>
	);
}
