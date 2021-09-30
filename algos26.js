/**
 * @param {string[]} emails
 * @return {number}
 */

const emails1 = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]

const expected1 = 2

var numUniqueEmails = function(emails) {
    var data = new Set();
    emails.forEach(function(v) {
        var arr = v.split("@");
        arr[0] = arr[0].replace(/\./g, ''); // remove dot
        arr[0] = arr[0].replace(/(\+.*)/g, '');  // remove label
        data.add(arr.join("@"));
    });
    return data.size;
};

console.log(numUniqueEmails(emails1))