// #1 Para este exercício deve-se utilizar uma API para puxar as 10 primeiras criptomoedas mostrando as seguintes informaçõe: Nome da criptomoeda, o símbolo e seu valor em dólares.

const ul = document.getElementById('coins-list');

const createLi = (param) => {
  const tenCoins = param.slice(0, 10);
  tenCoins.forEach((coin) => {
    const li = document.createElement('li');
    const { name, priceUsd, symbol } = coin;
    li.innerText = `${name} (${symbol}): ${Number(priceUsd).toFixed(2)}`;
    ul.appendChild(li);
  });
};

const fetchCoins = async () => {
  try {
    const promise = await fetch('https://api.coincap.io/v2/assets');
    const coin = await promise.json();
    return createLi(coin.data);
  } catch (erro) {
    console.log(`Deu erro champs - ${erro}`);
  }
};

fetchCoins();