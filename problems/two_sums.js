const twoSums = (arr, sum)  => {
    for (i=0; i<=arr.length; i++) {
        for (j=i+1; j<=arr.length - 1; j++) {
            if (arr[i] + arr[j] === sum) {
                return [arr[i], arr[j]]
            }
        } 
    }
    return null
}


const listA = [1, 9, 2, 17, 5, 35, 4]
sumNumbers = 21

console.log(twoSums(listA, sumNumbers))