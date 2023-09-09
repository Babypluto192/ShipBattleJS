function player(name) {
    this.name = name;
    this.oneShip = 4;
    this.twoShip = 3;
    this.threeShip = 2;
    this.fourShip = 1;
  };
  
  // расположение кароблей
  let i =0;



let player1 = new player()
let player2 = new player()
// function start1(){
//     console.log("Игра щас начнется")
// }
// start1()
function delay(n) {
    setTimeout( () => (alert(n)), 2000)
  }

  delay()

async function start(){
    name1 = prompt('Введите имя 1 игрок')
    name2 = prompt('Введите имя 2 игрока')
}

start().then(players())
// setTimeout(start,1)

function players() {
    player1.name = name1;
    player2.name = name2;
}






//  создание 2 игроков



function ships (player){
    const d = new Set();
    let abc = "ABCDEFGHIJ";
            // var rs = ""
            let n = 0
            function generate(){
                let rs = ""
            while ( rs.length < 1) {
                rs += abc[Math.floor(Math.random() * abc.length)];
                let t = Math.floor(Math.random() * 10 + 1);
                rs += t
                n++;
            }
            return rs;
            }
            
            

    
    for (let i = 0; i < 4; i++){
        var rs = "";
        rs = generate()
        rs = proverka(rs,d)
        //console.log(rs = proverka(rs,d))
       
       
        d.add(rs)
    }
    
    const abd = ['A','B','C','D','E','F','G','H','I','J']
    //  d.push(rs)
    
    // console.log(u)
    
    function proverka2(rs){
        let g = rs[0]
        let u =(rs.split(g))
        u.splice(0,1)
        if(+u === 10 && rs[0] === 'J'){
            return proverka2(rs = generate())
        } else{
            return rs;
        }
    }
    function proverka4(rs){
        let g = rs[0]
        let u =(rs.split(g))
        u.splice(0,1)
        if(+u >= 8 && rs[0] === 'J'){
            return proverka4(rs = generate())
        } else if(+u >= 8 && rs[0] === 'H') {
            return proverka4(rs = generate())
        } else if (+u >= 8 && rs[0] === 'I'){
            return proverka4(rs = generate())
        } else{
            return rs;
        }
    }
    
     function proverka3(rs){
        let g = rs[0]
        let u =(rs.split(g))
        u.splice(0,1)
        if(rs[0] === "J" && +u >= 9){
            return proverka3(rs = generate())
        } else if (rs[0] === "H" && +u >= 9){
            return proverka3(rs = generate())
        } else{
            return rs;
        }
    }
    
    function proverka(rs,d){
        if(d.has(rs)){
            return proverka(rs = generate(),d)
        } else{
            return rs
        }
    }
    function proverka22(rs,d){
        let g = rs[0]
        let u =(rs.split(g))
        u.splice(0,1)
        let r  = abd.indexOf(rs[0])
        let c = Number(u)
        ds = rs[0] + (c + 1)
        bs = rs[0] + (u - 1)
        ts = abd[r+1] + u
        gs = abd[r-1] + u
        //console.log(ds,bs,ts,gs)
        if(d.has(ds) || d.has(bs) || d.has(ts) || d.has(gs)){
            return proverka22(rs = generate(),d)
        } else{
            return rs
        }
    }
    
    function proverka33(rs,d){
        let g = rs[0]
        let u =(rs.split(g))
        u.splice(0,1)
        let r  = abd.indexOf(rs[0])
        let c = Number(u)
        ds = rs[0] + (c + 1)
        ds1 = rs[0] + (c + 2)
        bs = rs[0] + (u - 1)
        bs1 = rs[0] + (u - 2)
        ts = abd[r+1] + u
        gs = abd[r-1] + u
        ts1 = abd[r+2] + u
        gs1 = abd[r-2] + u
        //console.log(ds,bs,ts,gs)
        if(d.has(ds) || d.has(bs) || d.has(ts) || d.has(gs) || d.has(ds1) || d.has(bs1) || d.has(ts1) || d.has(gs1)){
            return proverka33(rs = generate(),d)
        } else{
            return rs
        }
    }
    
    function proverka44(rs,d){
        let g = rs[0]
        let u =(rs.split(g))
        u.splice(0,1)
        let r  = abd.indexOf(rs[0])
        let c = Number(u)
        ds = rs[0] + (c + 1)
        ds1 = rs[0] + (c + 2)
        ds2 = rs[0] + (c + 3)
        bs = rs[0] + (u - 1)
        bs1 = rs[0] + (u - 2)
        bs2 = rs[0] + (u - 3)
        ts = abd[r+1] + u
        gs = abd[r-1] + u
        ts1 = abd[r+2] + u
        gs1 = abd[r-2] + u
        ts2 = abd[r+3] + u
        gs2 = abd[r-3] + u
        //console.log(ds,bs,ts,gs)
        if(d.has(ds) || d.has(bs) || d.has(ts) || d.has(gs) || d.has(ds1) || d.has(bs1) || d.has(ts1) || d.has(gs1) || d.has(ds2) || d.has(bs2) || d.has(ts2) || d.has(gs2)){
            return proverka44(rs = generate(),d)
        } else{
            return rs
        }
    }
    
    
    for(let i = 0; i < 3; i++){
        rs = ''
        rs = generate();
        let g = rs[0]
        let u =(rs.split(g))
        u.splice(0,1)
        rs = proverka2(rs)
        rs = proverka(rs,d)
        rs = proverka22(rs,d)
      // console.log(proverka22(rs,d))
      // console.log(proverka2(u,rs))
        g = rs[0]
        z =(rs.split(g))
        z.splice(0,1)
        
        d.add(rs)
    
        a = Math.floor(Math.random() * 2)
       
      
        if (rs[0] === 'J'){
          let p = Number(z)
          let o = +z + 1;
          d.add(rs[0] + o)
        } else if(+z === 10){
            let r  = abd.indexOf(rs[0])
            d.add(abd[r+1] + rs[1] + rs[2])
        } else if(a) {
          let p = Number(z)
          let o = +z + 1;
          d.add(rs[0] + o)
        }
        else{
            let r  = abd.indexOf(rs[0])
            d.add(abd[r+1] + rs[1])
        }
    }
    
    for(let i =0; i < 2; i++){
        rs = ''
        rs = generate()
        let g = rs[0]
        let u =(rs.split(g))
        u.splice(0,1)
        a = Math.floor(Math.random() * 2)
        rs = proverka3(rs)
        rs = proverka(rs,d)
        rs = proverka33(rs,d)
        d.add(rs)
        
       
        
        g = rs[0]
        z =(rs.split(g))
        z.splice(0,1)
      // console.log(z)
        
        if(rs[0] === 'J' || rs[0] === 'I'){
          let p = Number(z)
          let o = +z + 1;
          d.add(rs[0] + o)
          d.add(rs[0] +(o + 1))
        } else if( Number(z) === 10){
            let r  = abd.indexOf(rs[0])
            d.add(abd[r+1] + rs[1] + rs[2])
            d.add(abd[r+2] + rs[1] + rs[2])
        } else if( Number(z) === 9 ){
            let r  = abd.indexOf(rs[0])
            d.add(abd[r+1] + rs[1] )
            d.add(abd[r+2] + rs[1] )
        }
        else if(a) {
          let p = Number(z)
          let o = +z + 1;
          d.add(rs[0] + o)
          d.add(rs[0] +(o + 1))
        }
        else{
            let r  = abd.indexOf(rs[0])
            d.add(abd[r+1] + rs[1])
            d.add(abd[r+2] + rs[1])
        }
    }
    
        rs = "";
         rs = generate()
         rs = proverka(rs,d)
         rs = proverka4(rs,d)
        //console.log(proverka4(rs,d))
        rs = proverka44(rs,d)
        d.add(rs)
        a = Math.floor(Math.random() * 2)
        
        let g = rs[0]
        z =(rs.split(g))
        z.splice(0,1)
        //console.log(z)
      
       
       
        if(rs[0] === 'J' || rs[0] === 'H' || rs[0] === 'I'){
          let p = Number(z)
          let o = p + 1;
          d.add(rs[0] + o)
          d.add(rs[0] +(o + 1))
          d.add(rs[0] +(o + 2))
        } else if(+z === 10){
            let r  = abd.indexOf(rs[0])
            d.add(abd[r+1] + rs[1] + rs[2])
            d.add(abd[r+2] + rs[1] + rs[2])
            d.add(abd[r+3] + rs[1] + rs[2])
        } else if(+z === 8 || +z === 9){
            let r  = abd.indexOf(rs[0])
            d.add(abd[r+1] + rs[1] )
            d.add(abd[r+2] + rs[1] )
            d.add(abd[r+3] + rs[1] )
        }
        else if(a) {
          let p = Number(z)
          let o = p + 1;
          d.add(rs[0] + o)
          d.add(rs[0] +(o + 1))
          d.add(rs[0] +(o + 2))
        }
        else{
            let r  = abd.indexOf(rs[0])
            d.add(abd[r+1] + rs[1])
            d.add(abd[r+2] + rs[1])
            d.add(abd[r+3] + rs[1])
        }


let m = []
d.forEach((el) => m.push(el))
//console.log(m.length)
// console.log(m)


if(d.size != 20){
    
    ships(player)
} else {



        
    
    

 
  let p = [];
  
  for(let i = 0; i < 4; i++){
    p.push(m[i])
  }
  m.splice(0,4)
  player.oneShip = p;
  p = []
  
  for(let i = 0; i < 6; i++){
    p.push(m[i])
  }
  m.splice(0,6)
  player.twoShip = p;
  p = []
  
  for(let i = 0; i < 6; i++){
    p.push(m[i])
  }
  m.splice(0,6)
  player.threeShip = p;
  p = []
  for(let i = 0; i < 4; i++){
    p.push(m[i])
  }
  m.splice(0,4)
  player.fourShip = p;
  p = []
  console.log(player)
  
}
}

ships(player1)
ships(player2)
 
// заполнение клеток



countOfSteps = prompt('Количество ходов')

const player3 ={
    oneShip : [],
    twoShip: [],
    threeShip: [],
    fourShip: [],
}



// функция ход
function step(player){
    
    
    let {oneShip,twoShip,threeShip,fourShip} = player

    //let oneShipClone = oneShip.slice(0)
    let twoShipClone = twoShip.slice(0)
    let threeShipClone = threeShip.slice(0)
    let fourShipClone = fourShip.slice(0)
    const abd = ['A','B','C','D','E','F','G','H','I','J']
    let o = prompt(`Ваш ход ${player.name}`)
    
    if(oneShip.includes(o)){
        console.log("Вы сбили вражеский однопалубник")
        let k = oneShip.indexOf(o)
        oneShip.splice(k,1)
        player.oneShip = oneShip
        return player
        
    } else if(twoShip.includes(o)){
        let temp = o
        let k = twoShip.indexOf(o)
        if(k != -1){
            twoShipClone.splice(k,1)
           // console.log(twoShipClone)
        } 
        // twoShipClone.splice(k,1)
        console.log("Вы подбили вражеский двупалубник")
        second(temp)
        function second( temp) {
            o = prompt("ваш ход")
            let g = temp[0]
            let u =(temp.split(g))
            u.splice(0,1)
            let r  = abd.indexOf(temp[0])
            
            let z = o[0]
            let x =(o.split(g))
            x.splice(0,1)
            console.log()
            if( +x === (+u + 1) || abd[r+1]  === o[0] ||+x === (+u - 1) || abd[r-1]  === o[0]  ){
                if( twoShip.includes(o)){
                    console.log("Вы сбили вражеский двупалубник")
                    // console.log(twoShipClone)
                    // k = twoShipClone.indexOf(o)
                    // twoShipClone.splice(k,1)
                    // console.log(twoShipClone)
                    player.twoShip = twoShipClone;
                    return player
                } else{
                    console.log("Вам не повезло")
                    twoShipClone = twoShip.slice(0)
                    
                }
            } else{
                    console.log("Вы не правильно ввели переменуую")
                    second(temp)                
                }
        }
    } else if(threeShip.includes(o)){
        
        let k = threeShipClone.indexOf(o) 
        if(k != -1){
        threeShipClone.splice(k,1)
        } 
        if(threeShipClone != 1){
            console.log("Вы подбили вражеский трипалубник"  )
        }
        let temp = o
        third(temp)
        function third( temp) {
           // console.log(threeShip.length)
            if(threeShipClone.length === 3 || threeShipClone.length === 0){
                console.log("Вы сбибили вражеский трипалубник"  )
                player.threeShip = threeShipClone
                return player
                
            } else{
            o = prompt("ваш ход")
            let g = temp[0]
            let u =(temp.split(g))
            u.splice(0,1)
            let r  = abd.indexOf(temp[0])
            
            let z = o[0]
            let x =(o.split(g))
            x.splice(0,1)
            console.log()
            if( +x === (+u + 1) || abd[r+1]  === o[0] || +x === (+u - 1)|| abd[r-1]  === o[0] || +x === (+u + 2) || abd[r+2]  === o[0]  || +x === (+u - 2) || abd[r-2]  === o[0]){
                if( threeShip.includes(o)){
                    console.log("Вы подбили вражеский трипалубник")
                    temp = o;
                    k = threeShipClone.indexOf(o)
                    threeShipClone.splice(k,1)
                    third(temp)
                } else{
                    console.log("Вам не повезло")
                    threeShipClone = threeShip.slice(0)
                    
                }
            } else{
                    console.log("Вы не правильно ввели переменуую")
                    third(temp)                
                }
            }
        }
    }else if(fourShip.includes(o)){
        
        let k = fourShipClone.indexOf(o)
        if(k != -1){
            fourShipClone.splice(k,1)
        } 
        if(fourShipClone.length === 0){
            console.log()
        } else{
            console.log("Вы подбили вражеский линкор"  )
        }
        // fourShipClone.splice(k,1)
        let temp = o
        fourd(temp)
        function fourd( temp) {
           // console.log(fourShip.length)
            if(fourShipClone.length === 0){
                console.log("Вы сбибили вражеский линкор"  )
                player.fourShip = fourShipClone
                return player
            } else{
            
            o = prompt("ваш ход")
            let g = temp[0]
            let u =(temp.split(g))
            u.splice(0,1)
            let r  = abd.indexOf(temp[0])
            
            let z = o[0]
            let x =(o.split(g))
            x.splice(0,1)
            console.log()
            if(+x === (+u + 1) || abd[r+1]  === o[0] || +x === (+u - 1)|| abd[r-1]  === o[0] || +x === (+u + 2) || abd[r+2]  === o[0]  || +x === (+u - 2) || abd[r-2]  === o[0] || +x === (+u + 3) ||  abd[r+3]  === o[0] || +x === (+u - 3) ||  abd[r-3]  === o[0]){
                if( fourShip.includes(o)){
                    console.log("Вы подбили вражеский линкор")
                    temp = o;
                    k = fourShipClone.indexOf(o)
                    fourShipClone.splice(k,1)
                    fourd(temp)
                } else{
                    console.log("Вам не повезло")
                    fourShipClone = fourShip.slice(0)
                }
            } else{
                    console.log("Вы не правильно ввели переменуую")
                    fourd(temp)                
                }
            }
        }
    } else {
        console.log("Следующий ход ")
    }
}

//console.log(player1)
//alert('Подготовтесь к игре')

// // console.log(player2)
// function sayHi() {
//     alert('Игра щас начнется');
//   }
  
//   setTimeout(sayHi, 5000);

async function game() {
    
     while( g < countOfSteps){
        step(player2)
        console.log(player1.name + ' '+"Вы ходите");
        step(player1)
        console.log(player2.name + ' ' + "Вы ходите")
        g++;
        
     }
}
 
let g = 0;



 
game().then(win())

function win() {
let j = JSON.stringify(player2).split(',')
j = j.flat();
let k = JSON.stringify(player1).split(',')
k = k.flat();
if (j.length > k.length){
    console.log("Победил" + " " + player1.name)
} else if (j.length === k.length){
    console.log("Ничья")
} else{
    console.log("Победил" + " " + player2.name)
}

}
 

    
