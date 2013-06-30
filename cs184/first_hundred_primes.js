#!usr/bin/env node

var is_prime = function(x)
{
    for (var i = 2; i <= Math.sqrt(x); i++)
    {
        if(x % i == 0)
        {
            return false;
        }
    }

    return true;
}

var first_n_primes = function(n)
{
    var arr = [];
    var i = 2;
    while (arr.length < n)
    {
        if(is_prime(i))
        {
            arr.push(i);
        }

        i++;
    }

    return arr;

};

var fmt = function(arr)
{
    return arr.join(",");
};

var k = 100;
console.log("First 100 primes: ");
console.log(fmt(first_n_primes(k)));

var fs = require('fs');
var outfile = "hundred_primes.txt";
var out = fmt(first_n_primes(k)) + "\n";
fs.writeFileSync(outfile, out);
