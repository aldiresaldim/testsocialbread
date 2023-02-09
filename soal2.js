function soal2(param1, param2)
{
    var total = 0;
    for (var i = 0; i < param1.length; i++) { 
        if(param1.charAt(i) == param2) total++; 

    }

    return total;
}

var result = soal2("4533", "5");
console.log(result); 