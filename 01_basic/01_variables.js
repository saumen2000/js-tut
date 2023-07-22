const accountId = 19036   
// const keyword variable accountId mai value fixed hoo gaya hai

let accountEmail = "saumenj19036@gmail.com"


var accountPassword = 123456
var accountState

console.table([accountId,accountEmail,accountPassword]);

accountEmail = "john12@gmail.com"
accountPassword = 785452
accountCity = "Mumbai"

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);


// Note:
// Prefer not to use var
// because of issue in block scope and functional scope.