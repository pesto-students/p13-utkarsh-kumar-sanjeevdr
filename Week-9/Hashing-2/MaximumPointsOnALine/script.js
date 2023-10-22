/**
 * @param {number[][]} points
 * @return {number}
 */
function maxPointsOnLine(points) {
    if (points.length <2|| points == null) return points.length;
   let max = 2;
   for (let i=0;i<points.length;i++) {
       let [p1x, p1y] = points[i];
       let samePoint = 1, map = {'base':0}; // to avoid when map = {}, the max value is -Infinity
       for (let j=i+1;j<points.length;j++) {
           if (points[i][0] == points[j][0] && points[i][1] == points[j][1]) {
               samePoint++;
           } else {
               let [p2x, p2y] = points[j];
               let slope = 1000000.0 * (p2y - p1y)/(p2x - p1x);
               if (!Number.isFinite(slope)) slope = "v";
               else if (Number.isNaN(slope)) slope = "h";
               map[slope] = map[slope]+1||1;
           }   
       }
       max = Math.max(Math.max(...Object.values(map))+samePoint, max);
   }
   return max;
}

let points1 = [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]];
let points2 = [[1,4],[3,5],[7,1],[5,4],[4,5],[9,2],[1,3],[2,8]];
console.log( maxPointsOnLine(points1));
console.log( maxPointsOnLine(points2));