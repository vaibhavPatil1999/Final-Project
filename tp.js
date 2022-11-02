// let arr = [4,8,1,9,7]

// for(i=0;i<arr.length;i++){
//     for(j=0;j<arr.length;j++){
//         if(arr[j]>arr[j+1]){
//             arr[j+1] = arr[j]
//         }
//     }
// }

// console.log(arr)

const arr = ["a", "a", "b", "b", "c"]
let obj = {};


for (i = 0; i < arr.length; i++) {

    obj[arr[i]] = obj[arr[i]] ? obj[arr[i]] + 1 : 1;





}
console.log(obj)

