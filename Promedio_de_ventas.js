const ventas=[120000,95000,150000,80000,200000];
let cuenta=0;
for(let recorrido=0;recorrido<5;recorrido+=1){
    cuenta+=ventas[recorrido];
}
promedio=cuenta/5;
console.log("El promedio de ventas de la semana es",promedio);
