import React from 'react'
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div>
      <h1>존재하지 않는 페이지입니다!</h1>
      <Link to="/">🏡 회귀 🏡</Link>
    </div>
  );
}
