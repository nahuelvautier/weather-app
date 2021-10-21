export const helperFetch = () => {
  const httpConnect = async (endpoint, options) => {
    const defaultHeaders = {
      accept: "application/json",
    }

    options.method = options.method || "GET";
    options.headers = options.headers
      ? { ...defaultHeaders, ...options.headers }
      : defaultHeaders;

    //console.log(options);

    try {
      const res = await fetch(endpoint, options);
      return await ( res.ok ? res.json() : Promise.reject({
        error: true,
        status: res.status,
        statusText: res.statusText,
      }));
    } catch (err) {
      return err;
    }
  }
  
  const getter = (url, options = {}) => httpConnect(url, options);

  return getter;
}
