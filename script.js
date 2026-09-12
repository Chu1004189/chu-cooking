@charset "UTF-8";

:root {
  --primary: #ff5722;
  --primary-dark: #e64a19;
  --bg-color: #fbf9f5;
  --text-color: #2b2b2b;
  --card-bg: #ffffff;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Noto Sans JP', sans-serif;
  background-color: var(--bg-color);
  color: var(--text-color);
  line-height: 1.6;
  overflow-x: hidden;
}

/* オープニングアニメーション */
.opening-anim {
  position: fixed;
  inset: 0;
  background: var(--primary);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.6s ease, visibility 0.6s ease;
}

.opening-anim.hide {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
}

.opening-logo {
  font-family: 'M PLUS Rounded 1c', sans-serif;
  font-size: 2.5rem;
  font-weight: 900;
  color: #fff;
  animation: pulse 1s infinite alternate;
}

@keyframes pulse {
  0% { transform: scale(0.95); }
  100% { transform: scale(1.05); }
}

/* ヘッダー */
.header {
  position: sticky;
  top: 0;
  background: rgba(251, 249, 245, 0.95);
  backdrop-filter: blur(5px);
  z-index: 100;
  border-bottom: 2px solid #eee;
}

.header-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.site-logo {
  font-family: 'M PLUS Rounded 1c', sans-serif;
  font-weight: 900;
  font-size: 1.3rem;
  color: var(--primary);
  text-decoration: none;
}

.nav ul {
  display: flex;
  list-style: none;
  gap: 1.2rem;
}

.nav a {
  text-decoration: none;
  color: var(--text-color);
  font-weight: 700;
  font-size: 0.95rem;
  transition: color 0.2s;
}

.nav a:hover {
  color: var(--primary);
}

/* ヒーローエリア（画像がテキストの右背面にかぶる構造） */
.hero {
  position: relative;
  padding: 4rem 1.5rem 3rem;
  max-width: 1100px;
  margin: 0 auto;
  overflow: hidden;
}

.hero-inner {
  position: relative;
  display: flex;
  align-items: center;
  min-height: 380px;
}

.hero-text-content {
  position: relative;
  z-index: 2; /* テキストを前面に */
  max-width: 600px;
}

.hero-sub {
  font-size: 0.9rem;
  letter-spacing: 2px;
  font-weight: 700;
  color: var(--primary);
}

.hero-title {
  font-family: 'M PLUS Rounded 1c', sans-serif;
  font-size: clamp(2.5rem, 6vw, 4.2rem);
  font-weight: 900;
  line-height: 1.2;
  margin: 0.5rem 0 1rem;
}

.hero-catch {
  font-weight: 700;
  color: #666;
}

.hero-img-wrap {
  position: absolute;
  right: -20px;
  top: 50%;
  transform: translateY(-50%);
  width: 55%;
  max-width: 550px;
  height: 90%;
  z-index: 1; /* 背面に配置 */
  opacity: 0.85;
}

.hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 30px 0 0 30px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

/* ABOUT ME / FOOD （余白縮小・イラスト削除） */
.about-section {
  background-color: #f0eae1;
  padding: 2rem 1.5rem; /* 上下幅を狭く調整 */
  text-align: center;
}

.about-inner {
  max-width: 800px;
  margin: 0 auto;
}

.about-sub {
  font-size: 0.85rem;
  font-weight: 700;
  color: #777;
  letter-spacing: 1px;
}

.about-title {
  font-family: 'M PLUS Rounded 1c', sans-serif;
  font-size: 1.8rem;
  font-weight: 800;
  margin-top: 0.5rem;
  line-height: 1.4;
}

/* 検索 & タグ */
.filter-section {
  padding: 3rem 1.5rem;
  max-width: 1000px;
  margin: 0 auto;
}

.section-title {
  font-family: 'M PLUS Rounded 1c', sans-serif;
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 1.5rem;
}

.search-box input {
  width: 100%;
  padding: 0.9rem 1.2rem;
  border: 2px solid #ddd;
  border-radius: 50px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.2s;
}

.search-box input:focus {
  border-color: var(--primary);
}

.tag-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: 1.2rem;
}

.tag-btn {
  padding: 0.5rem 1rem;
  background: #fff;
  border: 1.5px solid #ddd;
  border-radius: 30px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 700;
  transition: all 0.2s;
  text-decoration: none;
  color: inherit;
}

.tag-btn:hover, .tag-btn.active {
  background: var(--primary);
  color: #fff;
  border-color: var(--primary);
}

/* レシピ一覧 & 背景装飾（ランダム配置＆アニメーション高速化） */
.recipes-section {
  position: relative;
  padding: 4rem 1.5rem;
  max-width: 1100px;
  margin: 0 auto;
  overflow: hidden;
}

.recipes-inner {
  position: relative;
  z-index: 2;
}

.recipe-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.8rem;
  margin-top: 2rem;
}

@media (max-width: 850px) {
  .recipe-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 550px) {
  .recipe-grid { grid-template-columns: 1fr; }
}

.recipe-card {
  background: var(--card-bg);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.recipe-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
}

.recipe-card-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.recipe-card-content {
  padding: 1.2rem;
}

.recipe-card-title {
  font-size: 1.1rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
}

/* 高速＆全体散布背景アニメーション */
.bg-shapes .shape {
  position: absolute;
  border-radius: 50%;
  opacity: 0.15;
  z-index: 1;
  animation: floatFast 8s infinite alternate ease-in-out;
}

@keyframes floatFast {
  0% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(40px, -50px) scale(1.2); }
  100% { transform: translate(-30px, 40px) scale(0.8); }
}

.shape-1 { top: 5%; left: 10%; width: 120px; height: 120px; background: #ff5722; animation-duration: 7s; }
.shape-2 { top: 15%; right: 8%; width: 150px; height: 150px; background: #ffb74d; animation-duration: 9s; }
.shape-3 { top: 35%; left: 5%; width: 90px; height: 90px; background: #81c784; animation-duration: 6s; }
.shape-4 { top: 40%; right: 15%; width: 130px; height: 130px; background: #ff5722; animation-duration: 8s; }
.shape-5 { top: 60%; left: 20%; width: 160px; height: 160px; background: #64b5f6; animation-duration: 10s; }
.shape-6 { top: 65%; right: 5%; width: 110px; height: 110px; background: #ffb74d; animation-duration: 7.5s; }
.shape-7 { top: 80%; left: 8%; width: 140px; height: 140px; background: #ff5722; animation-duration: 8.5s; }
.shape-8 { top: 85%; right: 25%; width: 100px; height: 100px; background: #81c784; animation-duration: 6.5s; }
.shape-9 { top: 92%; left: 45%; width: 130px; height: 130px; background: #ffb74d; animation-duration: 9.5s; }
.shape-10 { top: 25%; left: 45%; width: 80px; height: 80px; background: #64b5f6; animation-duration: 7s; }

/* 最下部 (FINAL CTA) エリア */
.final-cta {
  background: var(--primary);
  padding: 1.5rem 1rem; /* 上下幅を狭く調整 */
  text-align: center;
}

.cta-inner {
  max-width: 100%;
  margin: 0 auto;
  overflow: hidden;
}

.cta-title {
  font-family: 'M PLUS Rounded 1c', sans-serif;
  color: #fff;
  white-space: nowrap; /* 1行表示を保護 */
  /* 横幅最大サイズに納める可変サイズ指定 */
  font-size: clamp(1.2rem, 6.5vw, 4.5rem);
  font-weight: 900;
  letter-spacing: 1px;
}

/* フッター */
.footer {
  text-align: center;
  padding: 1.5rem;
  background: #111;
  color: #888;
  font-size: 0.85rem;
}

/* レシピ詳細 モーダル */
.modal {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s;
}

.modal.active {
  opacity: 1;
  visibility: visible;
}

.modal-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.6);
}

.modal-content {
  position: relative;
  background: #fff;
  width: 90%;
  max-width: 700px;
  max-height: 85vh;
  border-radius: 20px;
  overflow-y: auto; /* ここがスクロールされる */
  z-index: 2;
  padding: 2rem;
}

.modal-close {
  position: absolute;
  top: 1rem;
  right: 1.5rem;
  font-size: 2rem;
  background: none;
  border: none;
  cursor: pointer;
}
