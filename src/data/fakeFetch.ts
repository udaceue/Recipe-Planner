const fakeFetch = (data: any) => {
  console.log('---- executing fake fetch -----');
  return new Promise<[]>((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
};

export default fakeFetch;
