// Program to find differences between two words

// 1. CHARACTER-BY-CHARACTER COMPARISON
function findCharacterDifferences(word1, word2) {
  console.log("\n=== CHARACTER-BY-CHARACTER COMPARISON ===");
  console.log(`Word 1: ${word1}`);
  console.log(`Word 2: ${word2}`);
  
  const differenceMap = new Map();
  const maxLength = Math.max(word1.length, word2.length);
  
  for (let i = 0; i < maxLength; i++) {
    const char1 = word1[i] || "-";
    const char2 = word2[i] || "-";
    
    if (char1 !== char2) {
      differenceMap.set(i, { position: i, char1, char2 });
    }
  }
  
  if (differenceMap.size === 0) {
    console.log("✓ Words are identical!");
  } else {
    console.log(`Total differences: ${differenceMap.size}`);
    // Iterate through Map to display differences
    differenceMap.forEach((diff) => {
      console.log(`  Position ${diff.position}: '${diff.char1}' vs '${diff.char2}'`);
    });
  }
  
  return [...differenceMap.values()];
}

// 2. EDIT DISTANCE (LEVENSHTEIN DISTANCE)
function editDistance(word1, word2) {
  const m = word1.length;
  const n = word2.length;
  const dp = new Map();
  
  // Initialize first row and column
  for (let i = 0; i <= m; i++) {
    dp.set(`${i},0`, i);
  }
  for (let j = 0; j <= n; j++) {
    dp.set(`0,${j}`, j);
  }
  
  // Fill the dp table using Map
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp.set(`${i},${j}`, dp.get(`${i - 1},${j - 1}`));
      } else {
        const val = 1 + Math.min(
          dp.get(`${i - 1},${j}`),
          dp.get(`${i},${j - 1}`),
          dp.get(`${i - 1},${j - 1}`)
        );
        dp.set(`${i},${j}`, val);
      }
    }
  }
  
  return dp.get(`${m},${n}`);
}

function findEditDistance(word1, word2) {
  console.log("\n=== EDIT DISTANCE (Levenshtein Distance) ===");
  const distance = editDistance(word1, word2);
  console.log(`Minimum edits needed to transform "${word1}" to "${word2}": ${distance}`);
  return distance;
}

// 3. COMMON AND UNIQUE CHARACTERS
function findCharacterDifference(word1, word2) {
  console.log("\n=== CHARACTER SET DIFFERENCE ===");
  
  // Create Maps to track character frequency
  const map1 = new Map();
  const map2 = new Map();
  
  // Build map for word1
  for (const char of word1.toLowerCase()) {
    map1.set(char, (map1.get(char) || 0) + 1);
  }
  
  // Build map for word2
  for (const char of word2.toLowerCase()) {
    map2.set(char, (map2.get(char) || 0) + 1);
  }
  
  // Find unique characters using Map
  const uniqueInWord1 = [...map1.keys()].filter(char => !map2.has(char));
  const uniqueInWord2 = [...map2.keys()].filter(char => !map1.has(char));
  const common = [...map1.keys()].filter(char => map2.has(char));
  
  console.log(`Word 1: ${word1}`);
  console.log(`Word 2: ${word2}`);
  console.log(`Unique to Word 1: ${uniqueInWord1.join(", ") || "None"}`);
  console.log(`Unique to Word 2: ${uniqueInWord2.join(", ") || "None"}`);
  console.log(`Common characters: ${common.join(", ") || "None"}`);
  
  // Display character frequencies
  console.log(`\nCharacter frequency in Word 1:`);
  map1.forEach((count, char) => {
    console.log(`  '${char}': ${count}`);
  });
  
  console.log(`\nCharacter frequency in Word 2:`);
  map2.forEach((count, char) => {
    console.log(`  '${char}': ${count}`);
  });
}

// 4. LENGTH DIFFERENCE
function findLengthDifference(word1, word2) {
  console.log("\n=== LENGTH DIFFERENCE ===");
  const len1 = word1.length;
  const len2 = word2.length;
  const diff = Math.abs(len1 - len2);
  console.log(`Word 1 length: ${len1}`);
  console.log(`Word 2 length: ${len2}`);
  console.log(`Length difference: ${diff} characters`);
}

// MAIN FUNCTION - COMPARE TWO WORDS
function compareWords(word1, word2) {
  console.log("\n╔════════════════════════════════════════╗");
  console.log("║   FINDING DIFFERENCES BETWEEN WORDS   ║");
  console.log("╚════════════════════════════════════════╝");
  
  findCharacterDifferences(word1, word2);
  findEditDistance(word1, word2);
  findCharacterDifference(word1, word2);
  findLengthDifference(word1, word2);
}

// TEST EXAMPLES
console.log("TEST CASE 1:");
compareWords("hello", "hallo");

console.log("\n\nTEST CASE 2:");
compareWords("javascript", "java");

console.log("\n\nTEST CASE 3:");
compareWords("cat", "car");

// EXPORT FOR USE AS MODULE
module.exports = { compareWords, findCharacterDifferences, findEditDistance, findLengthDifference, findCharacterDifference };
