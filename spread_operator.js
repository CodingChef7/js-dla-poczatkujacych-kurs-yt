const nums = [1, 2, 3, 12, 45, 12]
console.log(nums)
console.log(...nums)

const nums2 = [-1, 0, -30]

const nums3 = [...nums, ...nums2]
console.log(nums3)

const admin = {
    permissions: [],
}


const user1 = {
    email: 'adadadad',
    name: 'adadad',
    ...admin
}

console.log(user1)


const letters = [..."hello"]
console.log(letters)



