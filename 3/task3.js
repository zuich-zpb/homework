//Задача №3(Найти самый длинный палиндром в строке)
function isPalindrome(s) {
  let rev = s
    .split("")
    .reverse()
    .join("");
  return s == rev;
}
function longestPalindrom(s) {
  let maxp_length = 0,
    maxp = "";
  for (i = 0; i < s.length; i++) {
    let subs = s.substr(i, s.length);
    if (subs.length <= maxp_length) break;
    for (j = subs.length; j >= 0; j--) {
      let sub_subs = subs.substr(0, j);
      if (sub_subs.length <= maxp_length) break;
      if (isPalindrome(sub_subs)) {
        maxp_length = sub_subs.length;
        maxp = sub_subs;
      }
    }
  }
  return maxp;
}
longestPalindrom("babad"); //bab
longestPalindrom("cbbd"); //bb
longestPalindrom("dbabddb"); //dbabd