const fetchData = async (link: string) => {
  const res = await fetch(link);
  const data = await res.json();
  return data;
};

export default fetchData;
