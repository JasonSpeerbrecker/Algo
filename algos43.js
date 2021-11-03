// describe("Tests", () => {
//     it("test", () => {
//   Test.assertEquals( digital_root(16), 7 )
//   Test.assertEquals( digital_root(456), 6 )
//     });
//   });
  
  function digital_root(num){
    var total = 0;
    if(num.toString().length == 1){
        var iNum = parseInt(num);
        return iNum;
    }else{
        num.toString().split("").forEach( function(value){
            var iValue = parseInt(value);
            return total += iValue;
        });
        return digital_root(total);
    }
}