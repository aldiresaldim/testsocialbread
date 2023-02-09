function soal1(param1)
{

   while(param1 > 10)
   {
        var total = 0;
        for (var i = 0; i < param1.length; i++) {
            total+=parseInt(param1.charAt(i));
        }
        param1 = total + "";
   }
   return param1;
}

var result = soal1("453");
console.log(result);