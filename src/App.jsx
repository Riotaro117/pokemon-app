import './App.css';
import { useEffect, useState } from 'react';
import { getAllPokemon, getPokemon } from './utils/pokemon';
import Card from './components/Card/Card';
import Navigation_bar from './components/Navigation_bar/Navigation_bar';

function App() {
  // ENDPOINTの設定
  const initialURL = 'https://pokeapi.co/api/v2/pokemon';

  // ロード画面の状態を格納
  const [loading, setLoading] = useState(true);
  // ポケモンのデータオブジェクトの状態を格納
  const [pokemonData, setPokemonData] = useState([]);
  // 次のページの状態を格納するuseState
  const [nextURL, setNextURL] = useState('');

  const [prevURL, setPrevURL] = useState('');

  // ポケモン１匹ずつのデータを取得してくる
  const loadPokemon = async (data) => {
    // Promise.allなのはポケモン１匹ずつ全て取得するまで待つということ
    let _pokemonData = await Promise.all(
      data.map((pokemon) => {
        let pokemonRecord = getPokemon(pokemon.url);
        return pokemonRecord;
      })
    );
    setPokemonData(_pokemonData);
  };

  // APIとの通信は非同期なのでuseEffectを使用
  useEffect(() => {
    const fetchPokemonData = async () => {
      // 全てのポケモンデータを取得
      let res = await getAllPokemon(initialURL);
      // console.log(res);

      // 各ポケモンの詳細なデータを取得
      loadPokemon(res.results);
      // console.log(res.results);

      // 次のポケモンのデータを取得
      setNextURL(res.next);

      setPrevURL(res.previous);

      // ちゃんとロードが完了したため、ロード画面は必要ないfalse
      setLoading(false);
    };
    fetchPokemonData();
  }, []);

  // console.log(pokemonData);

  const handlePrevPage = async () => {
    // 最初のページはpreviousがnullのため分岐しておく
    if (!prevURL) return;

    setLoading(true);
    let data = await getAllPokemon(prevURL);
    console.log(data);
    await loadPokemon(data.results);
    setNextURL(data.next);
    setPrevURL(data.previous);
    setLoading(false);
  };

  const handleNextPage = async () => {
    setLoading(true);
    // 次のポケモンの詳細なデータを取得
    let data = await getAllPokemon(nextURL);
    // console.log(data);
    // 次のポケモンを読み込む
    await loadPokemon(data.results);
    // 次のページの情報を更新する
    setNextURL(data.next);
    // 前のページの情報を更新する
    setPrevURL(data.previous);
    setLoading(false);
  };

  return (
    <>
      <Navigation_bar />
      <div className="App">
        {loading ? (
          <h1>ロード中・・・</h1>
        ) : (
          <>
            <div className="pokemonCardContainer">
              {pokemonData.map((pokemon, i) => {
                // console.log(pokemon);
                return <Card key={i} pokemon={pokemon} />;
              })}
            </div>
            <div className="btn">
              <button onClick={handlePrevPage}>前へ</button>
              <button onClick={handleNextPage}>次へ</button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
