const {readFile, writeFile, read} = require('fs')

readFile('./content/first.txt','utf8',(err, data)=>{
    if(err){
        console.log(err)
        return
    }
    const dataFirst = data;
    readFile('./content/second.txt','utf8',(err,data)=>{
        if(err){
            console.log(err)
            return
        }
        const dataSecond = data;
        writeFile('./content/result-asynch.txt',`Final result is combined: ${dataFirst} and ${dataSecond}.`, 'utf8',(err, resp)=>{
            if(err){
                console.log(err)
                return
            }
            return resp
        })
    })
})
