// let a:string 
// a = 'hello'
// let b:number[] = [1,2,3]
// let arr:string[] = ['a','b','c']
// // 声明一个变量，类型为字符串数组
// let arr2:Array<string> = ['a','b','c']
// // 元组
// let x:[string,number]
// x = ['hello',10]
// let y:{name:string,age:number}
// y = {name:'hello',age:10}

// // 联合类型
// // 定义数组包含字符串和数字类型
// let arr3:(string|number)[]
// arr3 = [1,1,1,'a','b','c']
// // 类型别名
// type StrOrNum = string|number
// let arr4:StrOrNum[]
// arr4 = [1,1,1,'a','b','c']
// let str2 :StrOrNum = 'hello'

// type NumOrStr = number|string[]
// let arr5:NumOrStr
// arr5 = 1
// arr5 = ['a','b','c']

// type Translate = (a:(string|number)[],b:string)=>string
// let arr2str:Translate = (a,b)=>{
//     return a.join(b)
// }
// console.log(arr2str([1,2,3],'-'));

// // 对象类型用别名
// type A = {name:string;age:number}
// let a1:A = {name:'hello',age:10}

// // 接口声明
// interface B{
//     name:string;
//     age:number;
// }
// let b1:B = {name:'hello',age:10}
// // 接口还可以定义函数类型
// interface Func {
//     (a:string,b:string):string;
//     (a:number,b:number,c:number,d:number):number;
// }
// // 接口和类型别名最大的区别就是接口可以函数重载
// let func:Func =( (a,b,c,d)=>{
//     if(typeof a === 'string'){
//         return a+b
// } else {
//     return a*b*c*d
// }
// })  as any
// func ('hello','world')
// func (1,2,3,4)

// interface ResponseData {
//     code:number;
//     msg:string;
//     data:{
//         title:string;
//         content:string;
//     }
// }

interface Tree {
    name:string;
    leftChildren:Tree | null;
    rightChildren:Tree | null;
}

let tree:Tree = {
    name:'hello',
    leftChildren:{
        name:'world',
        leftChildren:null,
        rightChildren:null
    },
    rightChildren:null
}