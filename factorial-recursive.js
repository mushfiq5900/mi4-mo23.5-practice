function factorial(numfact){
    if (numfact==1){
        return 1;
    }
    return (numfact)*factorial(--numfact);
}
console.log(factorial(4));
