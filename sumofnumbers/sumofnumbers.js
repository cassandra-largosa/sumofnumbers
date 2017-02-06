/**
 * solving summing numbers with in different ways
 * Created by Adama on 2/5/2017.
 */

const testList = [1, 2, 3];

function sumFor(nums) {
  let sum = 0;
  for (let num of nums) {
    sum += num;
  }
  return sum;
}

console.log(`for-loop: ${sumFor(testList)}`);

function sumWhile(nums) {
  let sum = 0;
  let i = 0;
  while (i < nums.length) {
    sum += nums[i];
    i++;
  }
  return sum;
}

console.log(`while-loop: ${sumWhile(testList)}`);

function sumRecursive(nums) {
  if (nums.length === 0) {
    return 0;
  }
  return nums[0] + sumRecursive(nums.slice(1,nums.length));
}

console.log(`recursion: ${sumRecursive(testList, 0, testList.length)}`);

function sumTheSimpleWay(nums) {
  return _.reduce(nums, function(mem, num) {return mem + num;});
}

console.log(`underscore: ${sumTheSimpleWay(testList)}`);
