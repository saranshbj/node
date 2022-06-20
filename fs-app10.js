const {readFile,writeFile} = require('fs')

readFile('./content/new.txt', 'utf8',(err,result)=>{
    if (err) throw err
    
    const first = result
    readFile('./content/hello.txt','utf8',(err,result)=>{

        if (err) throw err
        const second = result
        writeFile('./content/new2.txt',`here is the result : ${first}, ${second}`,{flag :'a'},(err)=>{
            if(err)throw err
            console.log('File created')
        })
    })
})