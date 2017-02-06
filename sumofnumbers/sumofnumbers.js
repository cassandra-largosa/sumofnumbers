/**
 * solving summing numbers with in different ways
 * Created by Cassandra Largosa on 2/5/2017.
 */

const testList = [1, 2, 3];

function sumFor(nums) {
  let sum = 0;
  for (num of nums) {
    sum += num;
  }
  return sum;
}

console.log(`for: ${sumFor(testList)}`);

function sumWhile(nums) {
  let sum = 0;
  let i = 0;
  while (i < nums.length) {
    sum += nums[i];
  }
  return sum;
}

console.log(`while: ${sumWhile(testList)}`);

function sumRecursive(nums) {
  if (nums.length === 0) {
    return 0;
  }
  return nums.shift() + sumRecursive(nums);
}

console.log(`recursive: ${sumRecursive(testList)}`);

function sumTheSimpleWay(nums) {
  return _.redeuce(nums, function(mem, num) { return mem + num });
}

console.log(`underescore ${sumTheSimpleWay(testList)}`);
