function useFetch(data, setData, page) {
  const require = async () => {
    try {
      const res = await fetch(
        `https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=${page}`
      );
      const resJson = await res.json();

      setData([...data, ...resJson.products]);
    } catch (e) {
      console.log(e);
    }
  };
  require();
}

export default useFetch;
