// CONTAINER WITH MOST WATER

// BRUTE FORCE SOLUTION

const heightsArray = [7, 1, 2, 3, 9];

const getMaxWaterContainer = function (heights) {
  let maxArea = 0;

  for (let p1 = 0; p1 < heights.length; p1++) {
    for (let p2 = p1 + 1; p2 < heights.length; p2++) {
      const height = Math.min(heights[p1], heights[p2]);
      const width = p2 - p1;
      const area = height * width;
      maxArea = Math.max(maxArea, area);
    }
  }

  return maxArea;
};

console.log(getMaxWaterContainer(heightsArray));
// T = O(N^2)
// S = O(1)

// OPTIMAL SOLUTION

const getMaxWaterContainer1 = function (heights) {
  let p1 = 0,
    p2 = heights.length - 1,
    maxArea = 0;

  while (p1 < p2) {
    const height = Math.min(heights[p1], heights[p2]);
    const width = p2 - p1;
    const area = height * width;
    maxArea = Math.max(maxArea, area);

    if (heights[p1] <= heights[p2]) {
      p1++;
    } else {
      p2--;
    }
  }

  return maxArea;
};
console.log(getMaxWaterContainer1(heightsArray));
// T = O(N)
// S = O(1)
