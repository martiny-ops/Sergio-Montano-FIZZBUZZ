const ventas=[120000,95000,150000,80000,200000];
let mayor=0
for(let recorrido=0;recorrido<5;recorrido+=1){
    if(ventas[recorrido]>mayor){
        mayor=ventas[recorrido]
    }
}
console.log("la venta mas alta es de", mayor);

