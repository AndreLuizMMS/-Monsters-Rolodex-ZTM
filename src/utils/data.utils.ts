export const getData = async <T>(url: string): Promise<T> => {
  const res = await fetch(url);
  return res.json();
};
