interface CalculatingFunction{
    calculate(x:number):number; //calculate method takes a number(x) as input and return as a number
    //the input (e.g inches) 
    inputUnit():string;
    //the output returns the result (e.g cm)
    outputUnit():string;
}

class InchesToCm implements CalculatingFunction{
    calculate(inches: number): number { //the calculate method is implementhing to convert
        return inches*2.54;
    }
    inputUnit(): string { //this returns the unit for the input which is inches
        return "inches";
    }
    outputUnit(): string { //this returns the unit for the output which is cm
        return "cm";
    }
}

class cmToInches implements CalculatingFunction{
    calculate(cm: number): number { //the calculate method is implementhing to convert
        return cm/2.54;
    }
    inputUnit(): string { //this returns the unit for the input which is inches
        return "cm";
    }
    outputUnit(): string { //this returns the unit for the output which is cm
        return "inches";
    }
}