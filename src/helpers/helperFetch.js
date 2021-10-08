export const helperFetch = () => {
  const httpConnect = async (endpoint, options) => {
    const defaultHeaders = {
      accept: "application/json",
    }

    const controller = new AbortController();

    options.signal = controller.signal;
    options.method = options.method || "GET";
    options.headers = options.headers
      ? { ...defaultHeaders, ...options.headers }
      : defaultHeaders;

    //console.log(options);

    setTimeout(() => { controller.abort(); }, 3000);

    try {
      const res = await fetch(endpoint, options);
      return await ( res.ok ? res.json() : Promise.reject({
        error: true,
        status: res.status,
        statusText: res.statusText,
      }));
    } catch (error) {
      return error;
    }
  }
  
  const getter = (url, options = {}) => httpConnect(url, options);

  return getter;
}
