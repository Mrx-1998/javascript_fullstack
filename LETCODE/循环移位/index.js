// Cyclic shift
// var arr = [-1, -100, 3, 99], k = 2
//O(n)
// function RShift (list, k) {
//     const copy = [...list]
//     const n = list.length
//     if(k % n == 0) return
//     for (let i = 0; i < n; i++) {
//         list[i] = copy[(k + i) % n] //[3,-1,-100,99] -> [3,99,-1,-100]
//     }
//     return list
// }
// console.log(RShift(arr,k))




// function RShift (list, k) {
//     const n = list.length
//     if(k % n == 0) return list
//     //[-1, -100, 3, 99]
//     let cnt = Math.abs(k > 0 ? k % n : n + (k % n))
//     let t = null
//     while (cnt--) {// O(n * k)
//         t = list[n - 1]//99
//         //右移一位
//         for (let i = n - 1; i > 0; i--) {
//             list[i] = list[i-1]
//             console.log(list)
//         }
//         list[0] = t
//     }
//     return list
// }
// console.log(RShift(arr,k))

//三次翻转
//[1,2,3,4,5,6,7]
var arr = [-1, -100, 3, 99], k = 2
function reverse (list, start, end) {
    let t = null
    while (start < end) {
        t = list[start]
        list[start] = list[end]
        list[end] = t
        start++
        end--
    }
}

function RShift (list, k) {
    const n =list.length
    if(k % n == 0) return list

    reverse(list, 0, n-k-1)
    reverse(list, n-k, n-1)
    reverse(list, 0, n-1)

    return list
}
console.log(RShift(arr, k))