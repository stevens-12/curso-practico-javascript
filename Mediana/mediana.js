function calcularMediana(lista) {
    function calcularMediaAritmetica(lista) {
        const sumaLista = lista.reduce(
            function (valorAcumulado = 0, nuevoElemento) {
                return valorAcumulado + nuevoElemento;
            }
        );
    
        const promedioLista = sumaLista / lista.length;
        return promedioLista;
    }

    const listaOrdenada = lista.sort(function(primerElemento, segundoElemento){
        return primerElemento - segundoElemento
    })
    
    const mitadLista = parseInt(lista.length / 2);
    
    function esPar (numero) {
        if (numero % 2 === 0) {
            return true
        } else {
            return false
        }
    }
    
    let mediana; 
    
    if (esPar(listaOrdenada.length)) {
        const elemento1 = listaOrdenada[mitadLista - 1 ];
        const elemento2 = listaOrdenada[mitadLista];
    
        const promedioElemento1y2 = calcularMediaAritmetica([
            elemento1,
            elemento2
        ]);
    
        mediana = promedioElemento1y2;
    } else {
        mediana = listaOrdenada[mitadLista];
    }

    return mediana;
}

