
// 1 - 3
const hompimpah=(masukanPlayer)=>{
    var musuhRandom = Math.ceil(Math.random()*3);

    if(musuhRandom===1){
        var masukanMusuh='gunting'
    }else if(musuhRandom===2){
        masukanMusuh='kertas'
    }else{
        masukanMusuh='batu'
    }

    if((masukanPlayer==='gunting'&&masukanMusuh==='gunting')||(masukanPlayer==='kertas'&&masukanMusuh==='kertas')||(masukanPlayer==='batu'&&masukanMusuh==='batu')){
        console.log(`anda mengeluarkan ${masukanPlayer}!`)
        console.log(`musuh mengeluarkan ${masukanMusuh}!`)
        console.log(`anda seri, keduanya sama sama ${masukanPlayer}`)
    }else if((masukanPlayer==='gunting'&&masukanMusuh==='kertas')||(masukanPlayer==='kertas'&&masukanMusuh==='batu')||(masukanPlayer==='batu'&&masukanMusuh==='gunting')){
        console.log(`anda mengeluarkan ${masukanPlayer}!`)
        console.log(`musuh mengeluarkan ${masukanMusuh}!`)
        console.log(`anda menang, ${masukanPlayer} menang lawan ${masukanMusuh}`)
    }else if((masukanPlayer==='gunting'&&masukanMusuh==='batu')||(masukanPlayer==='kertas'&&masukanMusuh==='gunting')||(masukanPlayer==='batu'&&masukanMusuh==='kertas')) {
        console.log(`anda mengeluarkan ${masukanPlayer}!`)
        console.log(`musuh mengeluarkan ${masukanMusuh}!`)
        console.log(`anda kalah, ${masukanPlayer} kalah lawan ${masukanMusuh}`)
    }else{
        console.log('input anda ngaco. harusnya input antara gunting, batu, atau kertas')
    }
}

hompimpah('kertas')
