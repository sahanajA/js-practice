const laptops = [{
    name: "dell",
    model: "inspiron",
    processor: "core i-3",
    ram: "8gb",
    hdd: "1tb",
    ssd: "120gb"
}, {
    name: "lenovo",
    model: "ideapad",
    processor: ["core i-3", "core i -5"],
    ram: "8gb",
    storage: { ssd: "120gb", hdd: "1tb" }
}]


// [{},{},{}]
// [2].processor[0]
console.log(laptops[1].name)
// [] = square bracket
// () = parenthesis
// {} = curly barasis

// const string = ["1", "2", "3", "4", "5"]


// console.log(string[4])

// const len = string.length
// console.log(len)
// let sum = 0;

// for (let i = 0; i < len; i++) {


    // if (parseInt(string[i]) % 2 === 0) {
        // console.log(string[i]);
    // }

    // console.log(i)
    // sum = sum + parseInt(string[i]);
    // console.log("index of ", i, string[i])
// }

// console.log(sum)

// console.log(string.length)

// console.log(typeof string(string));

