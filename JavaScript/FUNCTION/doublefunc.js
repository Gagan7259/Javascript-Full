function outer() {
    console.log("I'm elder")
    function inner() {
console.log("Im small kid")
    }
    inner()
    inner()
    console.log("**********************")

}
outer()
outer()