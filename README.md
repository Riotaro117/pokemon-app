# Pokémon App 🐾

**シンプルな Pokémon Viewer（React + Vite）**

> 小さな学習用プロジェクト。React（Vite）を使ってポケモン図鑑を表示するシンプルなアプリです。
Reactの学習をアウトプットするために作成しました。
参考にしてサイトは以下の通りです。
「Reactを使って「ポケモン図鑑」「ブログ」「ノートメモアプリ」の3種類のアプリを構築する講座です。Reactの基礎は学び終えたからもっと実践的なアプリケーションを作りたい！応用が効くアプリ開発力を鍛えたい！という方は必見の講座内容です。」
https://www.udemy.com/course/react-3project-app-udemy/?couponCode=KEEPLEARNING

---

## 📌 概要

- **スタック**: React (v19) + Vite
- **目的**: コンポーネント設計や状態管理、API/ユーティリティの使い方を学ぶためのサンプルアプリ

## ⚙️ 機能

- ポケモンの一覧をカード形式で表示
- ナビゲーションバーを含むシンプルな UI
- 再利用可能なコンポーネント（例: `Card`, `Navigation_bar`）

## 🚀 開発を始める

### 必要条件

- Node.js（推奨: 最新の LTS）
- npm または yarn

### インストール

```bash
# リポジトリをクローン
git clone <repo-url>
cd pokemon-app

# 依存をインストール
npm install
# または
# yarn
```

### ローカル開発サーバーの起動

```bash
npm run dev
```

ブラウザで http://localhost:5173 を開いてアプリを確認します（Vite のデフォルトポート）。

### ビルドとプレビュー

```bash
npm run build
npm run preview
```

### Lint

```bash
npm run lint
```

## 📁 プロジェクト構成

主要なフォルダ/ファイル:

```
src/
  ├─ components/
  │   ├─ Card/             # カード表示のコンポーネント
  │   └─ Navigation_bar/   # ナビゲーションバー
  ├─ utils/
  │   └─ pokemon.js       # ポケモン関連ユーティリティ
  ├─ App.jsx
  └─ main.jsx

vite.config.js
package.json
```

（詳細は実際のファイルを参照してください）

## � スクリーンショット

以下はデモ画像です（`public/screenshot-example.svg` を参照）。実際のスクリーンショットを `public/` に置き、パスを更新してください。

![Screenshot](/screenshot-example.svg)

### 追加手順

1. スクリーンショット画像を `public/` に追加（例: `screenshot.png`）
2. README の画像パスを `/screenshot.png` に更新

> 推奨サイズ: 横 1200px × 縦 600px（レスポンシブ対応）

## �💡 作業のヒント

- コンポーネントを追加する際は `components/` 下にフォルダを作成し、CSS を分離すると管理しやすいです。
- `utils/pokemon.js` にデータ取得や整形ロジックを集約すると再利用がしやすくなります。

## 🧪 テスト

- 現状テストは含まれていません。必要なら Jest や React Testing Library の導入を検討してください。

## 🤝 貢献

1. Fork を作成
2. ブランチを作る: `feature/your-feature`
3. 変更をコミット
4. PR を作成

PR の際は `npm run lint` を実行し、既存のスタイルガイドに従ってください。

## 📝 ライセンス

- 明示的な指定が無い場合はプロジェクトに適したライセンス（例: MIT）を追加することを推奨します。

## 📫 作者 / 連絡先

- Author: あなたの名前（必要に応じて更新してください）

---

必要ならこの README にデプロイ手順、スクリーンショット、使用 API の詳細（例: PokeAPI の使用方法）などを追加します。✨
