function largerNumber(a,b) {
    if(a>=0 && b>=0)
    {
        if(a!=b)
        {
            document.write("The larger number is " + Math.max(a,b));
        }
        else
        {
            document.write("Both numbers are equal!")
        }
    } else {
        document.write("Please add an integer!");
    }
}

largerNumber(17,-27);