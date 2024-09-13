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

// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
// Return k.
// Custom Judge:

// The judge will test your solution with the following code:

// int[] nums = [...]; // Input array
// int val = ...; // Value to remove
// int[] expectedNums = [...]; // The expected answer with correct length.
//                             // It is sorted with no values equaling val.

// int k = removeElement(nums, val); // Calls your implementation

// assert k == expectedNums.length;
// sort(nums, 0, k); // Sort the first k elements of nums
// for (int i = 0; i < actualLength; i++) {
//     assert nums[i] == expectedNums[i];
// }
// If all assertions pass, then your solution will be accepted.

// Example 1:

// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 2.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Example 2:

// Input: nums = [0,1,2,2,3,0,4,2], val = 2
// Output: 5, nums = [0,1,4,0,3,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
// Note that the five elements can be returned in any order.
// It does not matter what you leave beyond the returned k (hence they are underscores).

// SOLUTION:

// var removeElement = function(arr, val) {
//     let i,c=0;
//     for(i=0;i<arr.length;i++){
//         if(arr[i]!=val){
//             arr[c]=arr[i];
//             c++;
//         }
//     }
//     return c;
// };

// -----------------------------------------------------------------------------------------

// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Example 1:

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.
// Example 2:

// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.

//SOLUTION:

// var strStr = function(haystack, needle) {
//     if (haystack.length < needle.length) {
//         return -1;
//     }

//     for (let i = 0; i <= haystack.length - needle.length; i++) {
//         if (haystack.substring(i, i + needle.length) === needle) {
//             return i;
//         }
//     }

//     return -1;
// };

// -----------------------------------------------------------------------------------------

// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1

//SOLUTION:

// var searchInsert = function(nums, target) {
//     let left = 0;
//     let right = nums.length - 1;

//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);

//         if (nums[mid] === target) {
//             return mid;
//         } else if (nums[mid] > target) {
//             right = mid - 1;
//         } else {
//             left = mid + 1;
//         }
//     }

//     return left;
// };

// -----------------------------------------------------------------------------------------

// 58. Length of Last Word
// Easy
// Topics
// Companies
// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal
// substring
//  consisting of non-space characters only.

// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.
// Example 2:

// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.

//SOLUTION:

//var lengthOfLastWord = function(s) {
//     let str = s.trim();
//     let n = str.length;
//     let count=0;
//     for(let i=n-1;i>=0;i--){
//         if(str.charAt(i) == ' '){
//             return count;
//         }
//         count++;
//     }
//     return count;
// };

// -----------------------------------------------------------------------------------------

// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

 

// Example 1:

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].
// Example 2:

// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
// Incrementing by one gives 4321 + 1 = 4322.
// Thus, the result should be [4,3,2,2].

//SOLUTION:

// * @param {number[]} digits
// * @return {number[]}
// */
// var plusOne = function(digits) {
//    return (BigInt(digits.join("")) + BigInt(1)).toString().split("");
// };