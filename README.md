# Sparse Arrays

## `1` Description

</br>

There is a collection of input strings and a collection of query strings. For each query string, determine how many times it occurs in the list of input strings. Return an array of the results.

</br>

### Example

</br>

```
strings = ['ab', 'ab', 'abc']
queries = ['ab', 'abc', 'bc']

```

There are **2** instances of **'ab'**, **1** of **'abc'** and **0** of **'bc'**. For each query, add an element to the return array:

```
results = [2,1,0]
```

</br>

### Function Description

</br>

Complete the function matchingStrings in the editor below. The function must return an array of integers representing the frequency of occurrence of each query string in strings.

matchingStrings has the following parameters:

- string strings[n] - an array of strings to search
- string queries[q] - an array of query strings

</br>

### Returns

</br>

- int[q]: an array of results for each query

</br>

---

For a full description of this problem, please check [Hackerrank](https://www.hackerrank.com/challenges/sparse-arrays/problem).

---

## `2` Solution

</br>

```
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
```

</br>
