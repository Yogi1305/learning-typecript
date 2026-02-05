// union means varible can be of multiple types
let union: string | number;
union = "hello";
console.log(union);
union = 123;
console.log(union);
// in backend development union types are very useful
let apiresponse:"pending" | "success" | "error";
apiresponse = "pending";
console.log(apiresponse);
apiresponse = "success";
console.log(apiresponse);
apiresponse = "error";
console.log(apiresponse);

// any means variable can be of any type ,avoid using any as much as possible
let any: any;
any = "hello";
console.log(any);
any = 123;
console.log(any);
any = true;
console.log(any);   
