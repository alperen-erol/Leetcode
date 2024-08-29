// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// SOLUTION:

// const twoSum = function(nums, target) {
//     for (let i=0;i<nums.length;i++){
//         for(let j = i+1;j<nums.length;j++){
//             if(nums[i]+nums[j]==target){
//                 return[i,j]
//             }
//         }
//     }
//     return null
// };

// -----------------------------------------------------------------------------------------

// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example 1:

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

// SOLUTION:

//  var isPalindrome = function(x) {
//    x=x.toString()
//  y=(x.length)-1
//      for(let i=0;i<y;i++,y--){
//         if(x[i]!==x[y]){
//            return false
//         }
//      }
//     return true
//  };

// -----------------------------------------------------------------------------------------

// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

// Example 1:

// Input: s = "III"
// Output: 3
// Explanation: III = 3.
// Example 2:

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 3:

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

// SOLUTION:

// function romanToInt(s) {
//     const romanNumbers = {
//         'I': 1,
//         'V': 5,
//         'X': 10,
//         'L': 50,
//         'C': 100,
//         'D': 500,
//         'M': 1000
//     };

//     let result = 0;

//       for (let i = 0; i < s.length; i++) {
//         const value = romanNumbers[s[i]];
//         const nextValue = romanNumbers[s[i + 1]];

//         if (value < nextValue) {
//             result += nextValue - value;
//             i++;
//         } else {
//             result += value;
//         }
//     }

//     return result;
// };

// -----------------------------------------------------------------------------------------

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// var longestCommonPrefix = function(strs) {
//     let firstWord = strs[0];
//     for (let i = 1; i < strs.length; i++) {
//         while (strs[i].indexOf(firstWord) !== 0) {
//             firstWord = firstWord.substring(0, firstWord.length - 1);
//             if (firstWord === "") return "";
//         }
//     }
//     return firstWord;
// };

// -----------------------------------------------------------------------------------------

// 20. Valid Parentheses
// Easy
// Topics
// Companies
// Hint
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:

// Input: s = "()"

// Output: true

// Example 2:

// Input: s = "()[]{}"

// Output: true

// var isValid = function(s) {
//     const stack = [];
//     const map = {
//         '(': ')',
//         '{': '}',
//         '[': ']'
//     };

//     for (let i = 0; i < s.length; i++) {
//         let char = s[i];

//         if (map[char]) {
//             stack.push(char);
//         } else {
//             let topElement = stack.pop();
//             if (map[topElement] !== char) {
//                 return false;
//             }
//         }
//     }

//     return stack.length === 0;
// };

// -----------------------------------------------------------------------------------------
