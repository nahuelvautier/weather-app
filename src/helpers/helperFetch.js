export const helperFetch = () => {
  const httpConnect = async (endpoint) => {
    const controller = new AbortController();

    setTimeout(() => { controller.abort(); }, 3000);

    try {
      const res = await fetch(endpoint);
      return await ( res.ok ? res.json() : Promise.reject({
        error: true,
        status: res.status,
        statusText: res.statusText,
      }));
    } catch (error) {
      return error;
    }
  }
  
  const makeQuery = () => httpConnect();
}
