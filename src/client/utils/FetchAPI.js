const API_URL = import.meta.env.VITE_API_URL;

export const FetchAPI = async (route, headers, method = 'GET', body) => {
  let config = {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: JSON.stringify(body),
  };

  try {
    const response = await fetch(`${API_URL}${route}`, config);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('FetchAPI function error', error);
  }
};
