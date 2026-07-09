type myParameters=string 
function getRandomIndex(arr:string[]):number{
        const randomIndex = Math.floor(Math.random() * arr.length);
        return randomIndex;
}
function getFarwellText(language:myParameters):myParameters {
    const options:string[] =[
        `Farewell ${language}`,
        `Adios ${language}`,
        `R.I.P ${language}`,
        `We will miss you ${language}`
    ];
   
    return options[ getRandomIndex(options)]?? "hello";
}
console.log(getFarwellText("Meer"))