// nums = [3,3], target = 6

nums = [2,7,11,15], target = 9
// nums = [3,2,4], target = 6;


// here we got an asignment, we are expected to have created alternative function. 
// Here we have an array with numbers and target. Eihter we put given numbers nor another numbers. Function 
// should give a result no matter which numbers. But target is expected to be exact as an assignment.

const twoSum = (nums, target ) => {
    // let numbers = [... nums ]

    // here we are using {for} iteration to summ numbers to find target
    // first iteration, we  are adding 1 to numbers if it is proper, If it is not
    // we try to add t variables value (2) to numbers 
    // and here, we finally come to target
    for(let i = 0; i <= nums.length; i ++) {
        for (let t = 2; t <= nums.length; t ++) {


            // if numbers summary equally to aiming target 
            //  we return our variables 
            if(nums [i] + nums [t] === target)
            return(i, t)
        }
        
    }
    console.log(target);
}


// here we write numbers and target to get result
console.log(twoSum(nums, 6));
console.log(twoSum(nums, 9));
console.log(twoSum(nums, 6));