const number = document.querySelector<HTMLInputElement>("#Number")
const random = document.querySelector<HTMLButtonElement>("#Random")
const prime = document.querySelector<HTMLButtonElement>("#Prime")

document.documentElement.classList.add('darkered')

function isPrime(numumber:number)
{
    let value = true
    let num = 1
    while(num < numumber/2)
    {
        num++
        if (numumber % n == 0){
            value = false
            break
        }
    }
    return value
}

function primeCount(numumber:number)
 {
    let i=1
    let listofprime : Array<Number> = []
    while (i < numumber){
        if(isPrime(i)){
            listofprime.push(i)
        }
        i++
    }
    return listofprime

}
random?.addEventListener("click", () => {
    number!.value = (Math.floor(Math.random()*50000) + 10001).toString()
})
prime?.addEventListener("click", () => {
    if (number!.value){console.log(primeCount(+number!.value))}
    else {console.log("Error")}
})