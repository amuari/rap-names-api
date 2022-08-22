const express= require('express')
const app=express()
const PORT=8000


const rappers={
    'kdot':{
        'age':'35',
        'birthName':'Kendrick Lamar Duckworth ',
        'birthLocation':'Compton,Carlifonia',
    
    
    },
    'frank ocean':{
        'age':34,
        'birthName':'Christopher Edwin Breaux',
        'birthLocation':'Long Beach, California, U.S'

    },
    'uknown':{
        'age':0,
        'birthName':'unknown',
        'birthLocation':'unknown'
    }
}
    

app.listen(PORT,()=>{
    console.log(`we're live on ${PORT}`);
})

app.get('/',(request,response)=>{
    response.sendFile(__dirname + '/index.html')

})

app.get('/api/:name',(request,response)=>{

    const rapperName=request.params.name
    if(rappers[rapperName]){
    response.json(rappers[rapperName])

    }
    else{
        response.json(rappers['uknown'])
    }
    
    
})