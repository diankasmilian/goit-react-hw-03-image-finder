function fetchImage(value, page = 1) {
  return fetch(
    `https://pixabay.com/api/?key=36494115-429f42e0991e0d4dcacf7517d&q=${value}&per_page=12&page=${page}`
  )
    .then(response => response.json())
    .then(data => data.hits)
    .then(hits => {
      if (hits.length === 0) {
        return Promise.reject(new Error(`😥OOPS... undefined image`));
      }

      return hits;
    });
}

const api = {
  fetchImage,
};

export default api;
