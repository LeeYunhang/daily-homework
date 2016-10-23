var arr = [
[2],
[3,4],
[6,5,7],
[4,1,8,3],
[]
];

function minimumTotal() {
    for (let i = arr.length - 2; i >= 0; --i) {
        for (let j = 0; j < arr[i].length; ++j) {
            arr[i][j] += Math.min(arr[i+1][j]? arr[i+1][j]:0, arr[i+1][j+1]? arr[i+1][j+1]:0)
        }
    }
    return arr[0][0]
}


console.log(minimumTotal())
