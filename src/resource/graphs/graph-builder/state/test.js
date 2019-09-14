const x = { source: "Harry", target: "a" };

// const a = Object.values(x).every((v) => {
//     console.log(v);
//     // if (v === ""){
//     //     return false;
//     // }
//
// });


let items = Object.values(x);
items.map(item => {
    if (item === "")
        console.log(false);
});
// console.log(a);

const a = ["shirish"];

console.log(a.includes("shirish"));

// console.log({"a": "b"}.suffixKey('x'));




