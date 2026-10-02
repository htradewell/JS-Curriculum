function waitThenSay(message, delay){
    return new Promise((resolve)=>{
        setTimeout(()=>{
        resolve(message)
        }, Number(delay))
    })
}
async function test(){
    const thingy = await waitThenSay('hello bobward', 1000);
    console.log(thingy);
}
test();