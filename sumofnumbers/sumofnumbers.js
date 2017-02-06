/**
 * Solve summing numbers
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
  let i =  0;
  while (i < nums.length) {
    sum += nums[i];
    i++;
  }
  return sum;
}

console.log(`while: ${sumWhile(testList)}`);

function sumRecursion(nums) {
  if (nums.length === 0) {
    return 0;
  }
  return nums[0] + sumRecursion(nums.slice(1,nums.length));
}

console.log(`recursion: ${sumRecursion(testList)}`);

function sumTheSimpleWay(nums) { // aka underscore
  return _.reduce(nums, function(mem, num){return mem + num;});
}

console.log(`underscore: ${sumTheSimpleWay(testList)}`);
