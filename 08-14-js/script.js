function random(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); 
}
console.log('pirma uzduotis');

    let vardas='algimantas';
    let pavarde='petrauskas';
    let gimimoMetai='1993';
    let sieMetai='2024';

    console.log(`amzius: ${sieMetai - gimimoMetai}`);
    console.log('amzius:'+(sieMetai - gimimoMetai));
    
    console.log(`Aš esu ${vardas} ${pavarde}. Man yra ${sieMetai-gimimoMetai} metai(ų).`);
    
    console.log('antra uzduotis');
    
    let a = random(0, 4);
    let b = random(0, 4);
    console.log(a, b)

    if (a < b) {
        console.log(b / a);
    } else {
        console.log(a / b);
    } if (a * b === 0) {
        console.log('dalyba iš nulio negalima'); 
    } if (a === b) {
        console.log('skaičiai yra vienodi');
    } 

console.log('trečia užduotis');

    let d = random(0, 25);
    let e = random(0, 25);
    let f = random(0, 25);

    console.log(d, e, f);
    
    if (d < e & d > f) {
        console.log(d);
    }
    if (d > e & d < f) {
        console.log(d);
    }
    if (e < d & e > f) {
        console.log(e);  
    }
    if (e > d & e < f) {
        console.log(e);  
    }
    if (f < e & f > d) {
        console.log(f);
    }
    if (f > e & f < d ) {
        console.log(f);
    }

    console.log('ketvirta užduotis');

    let a1 = random(0, 2);
    let a2 = random(0, 2);
    let a3 = random(0, 2);
    let a4 = random(0, 2);
    
    console.log(a1, a2, a3, a4);

    console.log('nuliai');
    
    let e1 = (a1 === 0);
    console.log(e1)
    let e2 = (a2 === 0);
    console.log(e2)
    let e3 = (a3 === 0);
    console.log(e3)
    let e4 = (a4 === 0);
    console.log(e4)
    console.log(e1 + e2 + e3 + e4 + ' nuliai');

    console.log('vienetai');
    
    let f1 = (a1 === 1);
    console.log(f1)
    let f2 = (a2 === 1);
    console.log(f2)
    let f3 = (a3 === 1);
    console.log(f3)
    let f4 = (a4 === 1);
    console.log(f4)
    console.log(f1 + f2 + f3 + f4 + ' vienetai');

    console.log('dvejetai');
    
    let g1 = (a1 === 2);
    console.log(g1)
    let g2 = (a2 === 2);
    console.log(g2)
    let g3 = (a3 === 2);
    console.log(g3)
    let g4 = (a4 === 2);
    console.log(g4)
    console.log(g1 + g2 + g3 + g4 + ' dvejetai');


    console.log('penkta užduotis');

    let b1 = random(-10, 10);
    let b2 = random(-10, 10);
    let b3 = random(-10, 10);
    console.log(b1, b2, b3);

    if (b1 > 0) {
        console.log('{'+b1+'}');
        
    }
    if (b1 === 0) {
        console.log('('+b1+')');
        
    }
    if (b1 < 0) {
        console.log('['+b1+']');
        
    }
    if (b2 > 0) {
        console.log('{'+b2+'}');
        
    }
    if (b2 === 0) {
        console.log('('+b2+')');
        
    }
    if (b2 < 0) {
        console.log('['+b2+']');
        
    }
    if (b3 > 0) {
        console.log('{'+b3+'}');
        
    }
    if (b3 === 0) {
        console.log('('+b3+')');
        
    }
    if (b3 < 0) {
        console.log('['+b3+']');
        
    }
    
    console.log('šešta užduotis');

    let zvakes = random(1, 5000);
    console.log(zvakes);
    
    if (zvakes < 1000) {
        console.log(zvakes + " Žvakių ")
        console.log(zvakes + " EUR");
        
    }
    else if (zvakes > 1000) {
        console.log(zvakes + " Žvakių ")
        console.log(zvakes - (zvakes * 0.03) + " EUR");
        
    }
    else if (zvakes > 2000) {
        console.log(zvakes + " Žvakių ")
        console.log(zvakes - (zvakes * 0.04) + " EUR");
    }

    console.log('septinta užduotis');
    
    let c1 = random(0, 100);
    let c2 = random(0, 100);
    let c3 = random(0, 100);
    let suma = c1 + c2 + c3;
    let vidurkis = suma / 3;

    console.log(c1, c2, c3);
    console.log(suma + ' suma');
    console.log(vidurkis + ' vidurkis');
    
    
    let d1 = random(0, 100);
    let d2 = random(0, 100);
    let d3 = random(0, 100);
   

    h1 = d1 > 10 , d1 < 90;
    console.log(h1);
    h2 = (d2 > 10 && d2 < 90);
    console.log(h2);
    h3 = (d3 > 10 && d3 < 90);
    console.log(h3);
    let sumaH = h1 + h2 + h3;
    let vidurkisH = sumaH / 3;
    console.log(sumaH);
    