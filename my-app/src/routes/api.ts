const BASE_URL = `https://api.coinpaprika.com/v1`;

export function fetchCoins() {
  return fetch(`${BASE_URL}/coins`).then((response) => response.json());
}

export function fetchCoinInfo(coinIds: string) {
  return fetch(`${BASE_URL}/coins/${coinIds}`).then((response) =>
    response.json()
  );
}

export function fetchCoinTickers(coinIds: string) {
  return fetch(`${BASE_URL}/tickers/${coinIds}`).then((response) =>
    response.json()
  );
}
