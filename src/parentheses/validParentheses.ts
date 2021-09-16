/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:
  Open brackets must be closed by the same type of brackets.
  Open brackets must be closed in the correct order.
*/
export function isValid(s: string): boolean {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const map: any = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  const stack = [];

  for (const char of s) {
    if (map[char]) {
      stack.push(map[char]);
    } else {
      if (stack.pop() !== char) {
        return false;
      }
    }
  }

  return (stack.length === 0);
}
