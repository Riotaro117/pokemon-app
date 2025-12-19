# Pokémon App 🐾

**シンプルな Pokémon Viewer（React + Vite）**

> 小さな学習用プロジェクト。React（Vite）を使ってポケモン図鑑を表示するシンプルなアプリです。
Reactの学習をアウトプットするために作成しました。
参考にしたサイトは以下の通りです。
「Reactを使って「ポケモン図鑑」「ブログ」「ノートメモアプリ」の3種類のアプリを構築する講座です。Reactの基礎は学び終えたからもっと実践的なアプリケーションを作りたい！応用が効くアプリ開発力を鍛えたい！という方は必見の講座内容です。」
https://www.udemy.com/course/react-3project-app-udemy/?couponCode=KEEPLEARNING



https://github.com/user-attachments/assets/cf28c175-e4b7-438a-a21b-096d9f1f029e




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

## �💡 作業のヒント

- コンポーネントを追加する際は `components/` 下にフォルダを作成し、CSS を分離すると管理しやすいです。
- `utils/pokemon.js` にデータ取得や整形ロジックを集約すると再利用がしやすくなります。

## 🧪 テスト

- 現状テストは含まれていません。必要なら Jest や React Testing Library の導入を検討してください。
