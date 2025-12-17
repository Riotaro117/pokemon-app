import './App.css';
import { useEffect, useState } from 'react';
import { getAllPokemon, getPokemon } from './utils/pokemon';
import Card from './components/Card/Card';

function App() {
  // ENDPOINTの設定
  const initialURL = 'https://pokeapi.co/api/v2/pokemon';
  const [loading, setLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState([]);

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

  //非同期の処理はuseEffect
  useEffect(() => {
    const fetchPokemonData = async () => {
      // 全てのポケモンデータを取得
      let res = await getAllPokemon(initialURL);
      // console.log(res)

      // 各ポケモンの詳細なデータを取得
      loadPokemon(res.results);
      // console.log(res.results)

      // ちゃんとロードが完了したため、ロード画面は必要ないfalse
      setLoading(false);
    };
    fetchPokemonData();
  }, []);

  // console.log(pokemonData);

  return (
    <div className="App">
      {loading ? (
        <h1>ロード中・・・</h1>
      ) : (
        <>
          <div className="pokemonCardContainer">
            {pokemonData.map((pokemon, i) => {
              console.log(pokemon);
              return <Card key={i} pokemon={pokemon} />;
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
