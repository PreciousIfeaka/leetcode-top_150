function canConstruct(ransomNote: string, magazine: string): boolean {
  let seen = new Map();
  for (let i = 0; i < ransomNote.length; i++) {
      if (magazine.indexOf(ransomNote[i]) === -1) return false;
      else {
        const idx = seen.get(ransomNote[i]);
        if (idx === undefined) seen.set(ransomNote[i], magazine.indexOf(ransomNote[i]));
        else if (magazine.indexOf(ransomNote[i], idx + 1) === -1) return false;
        else seen.set(ransomNote[i], magazine.indexOf(ransomNote[i], idx + 1))
      };
  };
  return true;
};

console.log(canConstruct("a", "b"));
console.log(canConstruct("aa", "ab"));
console.log(canConstruct("aa", "aab"));