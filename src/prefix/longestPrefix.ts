// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

export function getLongestCommonPrefix(strings: string[]): string {
  const prefix = strings[0];
  strings.shift();

  let result = '';

  for (let i = 0; i < prefix.length; i++) {
    const foundDiff = strings.some(str => !(prefix[i] === str[i]));
    if (foundDiff) {
      return result;
    }

    result += prefix[i];
  }

  return result;
}
