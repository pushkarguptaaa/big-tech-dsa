// VALID PALINDROME

// 1. COMPARE AGAINST REVERSE

const string = "A man, a plan, a canal: Panama";

const isValidPalindrome = function (s) {
  s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  let rev = "";

  for (let i = s.length - 1; i >= 0; i--) {
    rev += s[i];
  }

  return rev === s;
};

console.log(isValidPalindrome(string));

// 2. 2 POINTERS FROM OUTSIDE

const isValidPalindrome1 = function (s) {
  s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

  let left = 0;
  right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
};

console.log(isValidPalindrome1(string));

// 3. 2 POINTERS FROM CENTER

const isValidPalindrome2 = function (s) {
  s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

  let left = Math.floor(s.length / 2),
    right = left;

  if (s.length % 2 === 0) {
    left--;
  }

  while (left >= 0 && right < s.length) {
    if (s[left] !== s[right]) {
      return false;
    }

    left--;
    right++;
  }

  return true;
};

console.log(isValidPalindrome2(string));
