export function captitalize(str){
    return str.charAt(0).toUpperCase()+str.slice(1,);
}

export function reverseString(str){
    return str.split('').reverse().join('');
}

export const calculator={
    add:(a,b)=>(a+b),
    subtract:(a,b)=>(a-b),
    divide:(a,b)=>(a/b),
    multiply:(a,b)=>(a*b)
}


function ceaserInitializer(){
    let ceaserObj={};
    let alpha="abcdefghijklmnopqrstuvwxyz";
    let i=0;
    for(let char of alpha){
        ceaserObj[char]=i;
        i++;
    }
    return ceaserObj;
}

export function ceaserCipher(txt,key){
    txt=txt.toLowerCase();
    let Txtobj=ceaserInitializer();
    let numArr="abcdefghijklmnopqrstuvwxyz".split("");
    function encrypt(){
        let ceaserText="";
        for(let char of txt){
            if(Txtobj[char]===undefined){
                ceaserText+=char;
                continue;
            }
            let num=(Txtobj[char]+key)%26;
            ceaserText+=numArr[num];
        }
        return ceaserText;
    }
    function decrypt(){
        let plaintxt="";
        for(let char of txt){
            if(Txtobj[char]===undefined){
                plaintxt+=char;
                continue;
            }
            let num=(Txtobj[char]-key)%26;
            num=(num<0)?26+num:num;
            plaintxt+=numArr[num];
        }
        return plaintxt;
    }
    return {encrypt,decrypt}
}

export function analyzeArray(arr){
    arr.forEach(d=>{
        if(typeof(d)!=="number"){
            throw new Error("Wrong data")
        }
    })
    let average=arr.reduce((a,b)=>(a+b));
    average=average/arr.length;
    arr=arr.sort((a,b)=>{
        if(a>b) return 1;
        if(a<b) return -1;
        if(a==b) return 0;
    });
    let min=arr[0];
    let max=arr[arr.length-1];
    let length=arr.length;
    let obj={average,min,max,length};
    return obj;
}