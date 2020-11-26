const matchingStrings = (strings, queries) => {
  const isQuery = (query) => {
    const regex = new RegExp(`^${query}$`);
    return strings.reduce((acc, string) => {
      regex.test(string) ? acc++ : '';
      return acc;
    }, 0);
  };

  const match = queries.reduce((acc, query) => {
    acc.push(isQuery(query));
    return acc;
  }, []);

  return match;
};

matchingStrings(['ab', 'ab', 'abc'], ['ab', 'abc', 'bc']);
