export const getAllPokemon = (url) => {
  return new Promise((resolve) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => resolve(data));
  });
};

// １匹ずつのポケモンデータを取得
export const getPokemon = (url) => {
  return new Promise((resolve) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        resolve(data);
        // console.log(data);
      });
  });
};
