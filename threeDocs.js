// Age of friend list
const schoolFriend = [14, 15, 18, 20, 15];
const elekarFriend = [20, 18, 19, 25];
const CPIFriend = [20, 22, 19, 23, 24];

const Age1 = schoolFriend.concat(elekarFriend).concat(CPIFriend);

const Age2 = [...schoolFriend, ...elekarFriend, ...CPIFriend];
console.log(Age2);