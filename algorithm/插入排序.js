// 插入排序
function insertSort (arr) {
  for (let i = 1; i < arr.length; ++i) {
    for (let j = i; j > 0; --j) {
      if (arr[j - 1] >= arr[j]) {
        let tmp = arr[j - 1]
        arr[j - 1] = arr[j]
        arr[j] = tmp
      }
    }
  }

}

// 插入排序的递归版本
function insertSortRec(arr, index = arr.length - 1) {
  if (!index) { return }

  insertSortRec(arr, index - 1)
  for (let i = index; i > 0; --i) {
    if (arr[i] < arr[i-1]) {
      let tmp = arr[i]
      arr[i] = arr[i-1]
      arr[i-1] = tmp
    }
  }
}

// 选择第k小的元素
function quickSelect(arr, k) {
  let l = 0, r = arr.length
  let pivot = arr[l]
  let s = l

  while (true) {


    pivot = arr[l]
    for (let i = l + 1; i < r; ++i) {
      if (arr[i] < pivot) {
        ++s
        let tmp = arr[i]
        arr[i] = arr[s]
        arr[s] = tmp
      }
    }

    let tmp = arr[l]
    arr[l] = arr[s]
    arr[s] = tmp

    if (s === k) { return arr[s] }
    else if (s > k) { r = s }
    else { l = s + 1 }
    s = l
  }
}

// 选择第ｋ小元素递归版本
function quickSelectRec(arr, k, l = 0, r = arr.length) {
  let pivot = arr[l]
  let s = l

  for (let i = l; i < r; ++i) {
    if (arr[i] < pivot) {
      ++s
      let tmp = arr[i]
      arr[i] = arr[s]
      arr[s] = tmp
    }
  }

  let tmp = arr[l]
  arr[l] = arr[s]
  arr[s] = tmpd

  if (s === k) {
    return arr[s]
  } else if (s < k) {
    return quickSelectRec(arr, k, s + 1, r)
  } else {
    return quickSelectRec(arr, k, l, s)
  }
}

