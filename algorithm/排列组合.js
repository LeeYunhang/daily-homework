// 1.

function perm(v, left, right) {
    if (left === right) {
        console.log(v[0])
    } else {
        for (let i = left; i < right; ++i) {
            swap(v, left, i)
            perm(v, left + 1, right)
            swap(v, left, i)
        }
    }
}

// 2.

function bitsring(n) {
    if (!n) {
        console.log(B)
    } else {
        B[n - 1] = 0
        bitstring(n-1)
        B[n-1] = 1
        bitstr
    }
}

// 3.
function tmp(arr, k) {
  if (k > arr.length) {
    let arrCopy = arr.slice()
    for (let i = 0; i < arr.length; ++i) {
      let arrCopy = arr.slice(i, arr.length)
      tmp(arrCopy, k)
    } else if (k == arr.length) {
      console.log(arr)
    }
  }
}