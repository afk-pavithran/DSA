def two_sums(arr, sum):
    for i in range(len(arr)):
        for j in range(i+1, len(arr)):
            if arr[i] + arr[j] == sum:
                return [arr[i] , arr[j]]
                
    return None

listA = [1, 9, 2, 17, 5, 35, 4]
sumNumbers = 21

print(two_sums(listA, sumNumbers))