    function fizzBuzz() {
        var msg;
        var output = [];
        var count = prompt("daalo number");
        while(count>0){
            msg = count;
            if(count%15 == 0)
                msg = "fizzbuzz";
            else{
                if(count%3 == 0)
                    msg = "fizz"
                if(count%5 == 0)
                    msg = "buzz"
            }
        output.push(msg);
        count++;
        console.log(output);
        }
    }