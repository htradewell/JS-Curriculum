const name = process.argv[2];
if (name === undefined){
    console.log('Usage: node hello.js yourname');
}
else console.log(`hello ${name}`);