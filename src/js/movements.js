import { PIEZASBLANCAS, PIEZASNEGRAS, LIMITEDERECHO, LIMITEIZQUIERDO, LIMITEABAJO, LIMITEARRIBA } from './constantes';

const ComprobarLimites = (index, lado) => {
  let limite = false
    if (lado === 'der'){
      for (const element of LIMITEDERECHO) {
        if (index === element) {
          //console.log('entra con index', index);
          limite = true
          break
        }
        //console.log('indice ', index, ' indice menos 17=', index -17);
      }
    } else {
      for (const element of LIMITEIZQUIERDO) {
        if (index === element) {
          limite = true
          break
        }
        //console.log('indice ', index, ' indice menos 17=', index -17);
      }
    }
    //console.log('el limite es ', limite);
    return limite
}

export const ShowMoves = (index, board) => {
    const newBoard = [...board]
    let newIndex = 0
    const POSICIONINICIAL = index

    //Movimientos del peón
    if (newBoard[index] === '♟') { //Negras
      if (!LIMITEABAJO.includes(index)) {
        if (PIEZASBLANCAS.includes(newBoard[index + 7]) && index + 7 < 64 && index + 7 > 15) {
          newBoard[index + 7] = `${newBoard[index + 7]}X`
        }
        if (PIEZASBLANCAS.includes(newBoard[index + 9]) && index + 9 < 64 && index + 9 > 15){
          newBoard[index + 9] = `${newBoard[index + 9]}X`
        }
        if (newBoard[index + 8] === ""){
          newIndex = index + 8
          newBoard[newIndex] = `${newBoard[newIndex]}X`
        }
      }
    } else if (newBoard[index] === '♙'){ //Blancas
      if (!LIMITEARRIBA.includes(index)) {
        if (PIEZASNEGRAS.includes(newBoard[index - 7]) && index - 7 >= 0) {
          newBoard[index - 7] = `${newBoard[index - 7]}X`
        }
        if (PIEZASNEGRAS.includes(newBoard[index - 9]) && index - 9 >= 0){
          newBoard[index - 9] = `${newBoard[index - 9]}X`
        }
        if (newBoard[index - 8] === ""){
          newIndex = index - 8
          newBoard[newIndex] = `${newBoard[newIndex]}X`
        }
      }
    }

    //Movimientos de la torre
    if (newBoard[index] === '♜'){ //Negras
      //Veo si la torre puede ir hacia adelante
      while (index < 64 && index >= 0){ 
        if ((newBoard[index  + 8] === '' || PIEZASBLANCAS.includes(newBoard[index + 8])) &&  index + 8 < 64) {
          index = index + 8
          newBoard[index] = `${newBoard[index]}X`
          if(PIEZASBLANCAS.includes(newBoard[index][0])){
            index = 70
          }
        } else {
          break
        }
      }

      //Reseteamos el index para la siguiente comprobación
      index = POSICIONINICIAL
      //Veo si la torre puede ir hacia atrás
      while (index < 64 && index >= 0){ 
        if ((newBoard[index  - 8] === '' || PIEZASBLANCAS.includes(newBoard[index - 8])) &&  index - 8 >= 0) {
          index = index - 8
          newBoard[index] = `${newBoard[index]}X`
          if(PIEZASBLANCAS.includes(newBoard[index][0])){
            index = 70
          }
        } else {
          break
        }
      }

      //Reseteamos el index para la siguiente comprobación
      index = POSICIONINICIAL
      //Veo si la torre puede ir hacia la derecha
      while (index < 64 && index >= 0){ 
        if ((newBoard[index  + 1] === '' || PIEZASBLANCAS.includes(newBoard[index + 1])) && !ComprobarLimites(index, 'der')) {
          index = index + 1
          newBoard[index] = `${newBoard[index]}X`
          if(PIEZASBLANCAS.includes(newBoard[index][0])){
            index = 70
          }
        } else {
          break
        }
      }

      //Reseteamos el index para la siguiente comprobación
      index = POSICIONINICIAL
      //Veo si la torre puede ir hacia la izquierda
      while (index < 64 && index >= 0){ 
        if ((newBoard[index  - 1] === '' || PIEZASBLANCAS.includes(newBoard[index - 1])) && !ComprobarLimites(index, 'izq')) {
          index = index - 1
          newBoard[index] = `${newBoard[index]}X`
          if(PIEZASBLANCAS.includes(newBoard[index][0])){
            index = 70
          }
        } else {
          break
        }
      }
    } else if (newBoard[index] === '♖'){ //Blancas
      const POSICIONINICIAL = index

      //Veo si la torre puede ir hacia atrás
      while (index < 64 && index >= 0){ 
        if ((newBoard[index  + 8] === '' || PIEZASNEGRAS.includes(newBoard[index + 8])) &&  index + 8 < 64) {
          index = index + 8
          newBoard[index] = `${newBoard[index]}X`
          if(PIEZASNEGRAS.includes(newBoard[index][0])){
            index = 70
          }
        } else {
          break
        }
      }

      //Reseteamos el index para la siguiente comprobación
      index = POSICIONINICIAL
      //Veo si la torre puede ir hacia adelante
      while (index < 64 && index >= 0){ 
        if ((newBoard[index  - 8] === '' || PIEZASNEGRAS.includes(newBoard[index - 8])) &&  index - 8 >= 0) {
          index = index - 8
          newBoard[index] = `${newBoard[index]}X`
          if(PIEZASNEGRAS.includes(newBoard[index][0])){
            index = 70
          }
        } else {
          break
        }
      }

      //Reseteamos el index para la siguiente comprobación
      index = POSICIONINICIAL
      //Veo si la torre puede ir hacia la derecha
      while (index < 64 && index >= 0){ 
        if ((newBoard[index  + 1] === '' || PIEZASNEGRAS.includes(newBoard[index + 1])) && !ComprobarLimites(index, 'der')) {
          index = index + 1
          newBoard[index] = `${newBoard[index]}X`
          if(PIEZASNEGRAS.includes(newBoard[index][0])){
            index = 70
          }
        } else {
          break
        }
      }

      //Reseteamos el index para la siguiente comprobación
      index = POSICIONINICIAL
      //Veo si la torre puede ir hacia la izquierda
      while (index < 64 && index >= 0){ 
        if ((newBoard[index  - 1] === '' || PIEZASNEGRAS.includes(newBoard[index - 1])) && !ComprobarLimites(index, 'izq')) {
          index = index - 1
          newBoard[index] = `${newBoard[index]}X`
          if(PIEZASNEGRAS.includes(newBoard[index][0])){
            index = 70
          }
        } else {
          break
        }
      }
    }

    //Movimientos del Alfil
    if (newBoard[index] === '♝') { //Negras
      //Comprobamos la diagonal hacia la derecha adelante
      while (index < 64 && index >= 0){ 
        if ((newBoard[index  + 7] === '' || PIEZASBLANCAS.includes(newBoard[index + 7])) && !ComprobarLimites(index, 'izq')) {
          index = index + 7
          newBoard[index] = `${newBoard[index]}X`
          if(PIEZASBLANCAS.includes(newBoard[index][0])){
            index = 70
          }
        } else {
          break
        }
      }
      
      //Reseteamos el index para la siguiente comprobación
      index = POSICIONINICIAL
      //Comprobamos la diagonal hacia la derecha atrás
      while (index < 64 && index >= 0){ 
        if ((newBoard[index  - 9] === '' || PIEZASBLANCAS.includes(newBoard[index - 9])) && !ComprobarLimites(index, 'izq')) {
          index = index - 9
          newBoard[index] = `${newBoard[index]}X`
          if(PIEZASBLANCAS.includes(newBoard[index][0])){
            index = 70
          }
        } else {
          break
        }
      }

      //Reseteamos el index para la siguiente comprobación
      index = POSICIONINICIAL
      //Comprobamos la diagonal hacia la adelante izquierda
      while (index < 64 && index >= 0){ 
        if ((newBoard[index  + 9] === '' || PIEZASBLANCAS.includes(newBoard[index + 9])) && !ComprobarLimites(index, 'der')) {
          index = index + 9
          newBoard[index] = `${newBoard[index]}X`
          if(PIEZASBLANCAS.includes(newBoard[index][0])){
            index = 70
          }
        } else {
          break
        }
      }

      //Reseteamos el index para la siguiente comprobación
      index = POSICIONINICIAL
      //Comprobamos la diagonal hacia la atrás izquierda
      while (index < 64 && index >= 0){ 
        if ((newBoard[index  - 7] === '' || PIEZASBLANCAS.includes(newBoard[index - 7])) && !ComprobarLimites(index, 'der')) {
          index = index - 7
          newBoard[index] = `${newBoard[index]}X`
          if(PIEZASBLANCAS.includes(newBoard[index][0])){
            index = 70
          }
        } else {
          break
        }
      }
    } else if (newBoard[index] === '♗'){ //Blancas
      //Comprobamos la diagonal hacia la izquierda abajo
      while (index < 64 && index >= 0){ 
        if ((newBoard[index  + 7] === '' || PIEZASNEGRAS.includes(newBoard[index + 7])) && !ComprobarLimites(index, 'izq')) {
          index = index + 7
          newBoard[index] = `${newBoard[index]}X`
          if(PIEZASNEGRAS.includes(newBoard[index][0])){
            index = 70
          }
        } else {
          break
        }
      }
      
      //Reseteamos el index para la siguiente comprobación
      index = POSICIONINICIAL
      //Comprobamos la diagonal hacia la arriba izquierda
      while (index < 64 && index >= 0){ 
        if ((newBoard[index  - 9] === '' || PIEZASNEGRAS.includes(newBoard[index - 9])) && !ComprobarLimites(index, 'izq')) {
          index = index - 9
          newBoard[index] = `${newBoard[index]}X`
          if(PIEZASNEGRAS.includes(newBoard[index][0])){
            index = 70
          }
        } else {
          break
        }
      }

      //Reseteamos el index para la siguiente comprobación
      index = POSICIONINICIAL
      //Comprobamos la diagonal hacia la derecha abajo
      while (index < 64 && index >= 0){ 
        if ((newBoard[index  + 9] === '' || PIEZASNEGRAS.includes(newBoard[index + 9])) && !ComprobarLimites(index, 'der')) {
          index = index + 9
          newBoard[index] = `${newBoard[index]}X`
          if(PIEZASNEGRAS.includes(newBoard[index][0])){
            index = 70
          }
        } else {
          break
        }
      }

      //Reseteamos el index para la siguiente comprobación
      index = POSICIONINICIAL
      //Comprobamos la diagonal hacia la derecha adelante
      while (index < 64 && index >= 0){ 
        if ((newBoard[index  - 7] === '' || PIEZASNEGRAS.includes(newBoard[index - 7])) && !ComprobarLimites(index, 'der')) {
          index = index - 7
          newBoard[index] = `${newBoard[index]}X`
          if(PIEZASNEGRAS.includes(newBoard[index][0])){
            index = 70
          }
        } else {
          break
        }
      }
    } 

    //Movimientos del caballo
    if (newBoard[index] === '♞'){ //Negras
      //Comprobamos adelante derecha
      //console.log('estoy en ', index, ' me tengo que mover a ', index + 15, ' y compruebo si delante tengo un limite ', index + 16);
      if ((newBoard[index  + 15] === '' || PIEZASBLANCAS.includes(newBoard[index + 15])) && !ComprobarLimites(index + 16, 'izq')) {
        index = index + 15
        newBoard[index] = `${newBoard[index]}X`
      } 

      //Reseteamos el index para la siguiente comprobación
      index = POSICIONINICIAL
      //Comprobamos adelante izquierda
      if ((newBoard[index  + 17] === '' || PIEZASBLANCAS.includes(newBoard[index + 17])) && !ComprobarLimites(index + 16, 'der')) {
        index = index + 17
        newBoard[index] = `${newBoard[index]}X`  
      }

      //Reseteamos el index para la siguiente comprobación
      index = POSICIONINICIAL
      //Comprobamos atrás derecha
      if ((newBoard[index  - 17] === '' || PIEZASBLANCAS.includes(newBoard[index - 17])) && !ComprobarLimites(index - 16, 'izq')) {
        index = index - 17
        newBoard[index] = `${newBoard[index]}X` 
      }  

      //Reseteamos el index para la siguiente comprobación
      index = POSICIONINICIAL
      //Comprobamos atrás izquierda
      
      if ((newBoard[index  - 15] === '' || PIEZASBLANCAS.includes(newBoard[index - 15])) && !ComprobarLimites(index - 16, 'der')) {
        index = index - 15
        newBoard[index] = `${newBoard[index]}X`
      } 

      //Reseteamos el index para la siguiente comprobación
      index = POSICIONINICIAL
      //Comprobamos derecha atrás
      if ((newBoard[index  - 10] === '' || PIEZASBLANCAS.includes(newBoard[index - 10])) && !ComprobarLimites(index - 2, 'izq') && !ComprobarLimites(index - 1, 'izq') && !ComprobarLimites(index, 'izq')) {
        index = index - 10
        newBoard[index] = `${newBoard[index]}X`
      } 

      //Reseteamos el index para la siguiente comprobación
      index = POSICIONINICIAL
      //Comprobamos derecha abajo
      if ((newBoard[index  + 6] === '' || PIEZASBLANCAS.includes(newBoard[index + 6])) && !ComprobarLimites(index - 2, 'izq') && !ComprobarLimites(index - 1, 'izq') && !ComprobarLimites(index, 'izq')) {
        index = index + 6
        newBoard[index] = `${newBoard[index]}X`
      } 

      //Reseteamos el index para la siguiente comprobación
      index = POSICIONINICIAL
      //Comprobamos izquierda abajo
      if ((newBoard[index  - 6] === '' || PIEZASBLANCAS.includes(newBoard[index - 6])) && !ComprobarLimites(index + 2, 'der') && !ComprobarLimites(index + 1, 'der') && !ComprobarLimites(index, 'der')) {
        index = index - 6
        newBoard[index] = `${newBoard[index]}X`
      }

      //Reseteamos el index para la siguiente comprobación
      index = POSICIONINICIAL
      //Comprobamos izquierda adelante
      if ((newBoard[index  + 10] === '' || PIEZASBLANCAS.includes(newBoard[index + 10])) && !ComprobarLimites(index + 2, 'der') && !ComprobarLimites(index + 1, 'der') && !ComprobarLimites(index, 'der')) {
        index = index + 10
        newBoard[index] = `${newBoard[index]}X`
      } 
    } else if (newBoard[index] === '♘'){ //Blancas
      //Comprobamos adelante derecha
      //console.log('estoy en ', index, ' me tengo que mover a ', index + 15, ' y compruebo si delante tengo un limite ', index + 16);
      if ((newBoard[index  + 15] === '' || PIEZASNEGRAS.includes(newBoard[index + 15])) && !ComprobarLimites(index + 16, 'izq')) {
        index = index + 15
        newBoard[index] = `${newBoard[index]}X`
      } 

      //Reseteamos el index para la siguiente comprobación
      index = POSICIONINICIAL
      //Comprobamos adelante izquierda
      if ((newBoard[index  + 17] === '' || PIEZASNEGRAS.includes(newBoard[index + 17])) && !ComprobarLimites(index + 16, 'der')) {
        index = index + 17
        newBoard[index] = `${newBoard[index]}X`  
      }

      //Reseteamos el index para la siguiente comprobación
      index = POSICIONINICIAL
      //Comprobamos atrás derecha
      if ((newBoard[index  - 17] === '' || PIEZASNEGRAS.includes(newBoard[index - 17])) && !ComprobarLimites(index - 16, 'izq')) {
        index = index - 17
        newBoard[index] = `${newBoard[index]}X` 
      }  

      //Reseteamos el index para la siguiente comprobación
      index = POSICIONINICIAL
      //Comprobamos atrás izquierda
      
      if ((newBoard[index  - 15] === '' || PIEZASNEGRAS.includes(newBoard[index - 15])) && !ComprobarLimites(index - 16, 'der')) {
        index = index - 15
        newBoard[index] = `${newBoard[index]}X`
      } 

      //Reseteamos el index para la siguiente comprobación
      index = POSICIONINICIAL
      //Comprobamos derecha atrás
      if ((newBoard[index  - 10] === '' || PIEZASNEGRAS.includes(newBoard[index - 10])) && !ComprobarLimites(index - 2, 'izq') && !ComprobarLimites(index - 1, 'izq') && !ComprobarLimites(index, 'izq')) {
        index = index - 10
        newBoard[index] = `${newBoard[index]}X`
      } 

      //Reseteamos el index para la siguiente comprobación
      index = POSICIONINICIAL
      //Comprobamos derecha abajo
      if ((newBoard[index  + 6] === '' || PIEZASNEGRAS.includes(newBoard[index + 6])) && !ComprobarLimites(index - 2, 'izq') && !ComprobarLimites(index - 1, 'izq') && !ComprobarLimites(index, 'izq')) {
        index = index + 6
        newBoard[index] = `${newBoard[index]}X`
      } 

      //Reseteamos el index para la siguiente comprobación
      index = POSICIONINICIAL
      //Comprobamos izquierda abajo
      if ((newBoard[index  - 6] === '' || PIEZASNEGRAS.includes(newBoard[index - 6])) && !ComprobarLimites(index + 2, 'der') && !ComprobarLimites(index + 1, 'der') && !ComprobarLimites(index, 'der')) {
        index = index - 6
        newBoard[index] = `${newBoard[index]}X`
      }

      //Reseteamos el index para la siguiente comprobación
      index = POSICIONINICIAL
      //Comprobamos izquierda adelante
      if ((newBoard[index  + 10] === '' || PIEZASNEGRAS.includes(newBoard[index + 10])) && !ComprobarLimites(index + 2, 'der') && !ComprobarLimites(index + 1, 'der') && !ComprobarLimites(index, 'der')) {
        index = index + 10
        newBoard[index] = `${newBoard[index]}X`
      } 
    }

    //Movimientos de la reina
    if (newBoard[index] === '♛') { //Negras
      //Comprobamos la diagonal hacia la derecha adelante
      while (index < 64 && index >= 0){ 
        if ((newBoard[index  + 7] === '' || PIEZASBLANCAS.includes(newBoard[index + 7])) && !ComprobarLimites(index, 'izq')) {
          index = index + 7
          newBoard[index] = `${newBoard[index]}X`
          if(PIEZASBLANCAS.includes(newBoard[index][0])){
            index = 70
          }
        } else {
          break
        }
      }
      
      //Reseteamos el index para la siguiente comprobación
      index = POSICIONINICIAL
      //Comprobamos la diagonal hacia la derecha atrás
      while (index < 64 && index >= 0){ 
        if ((newBoard[index  - 9] === '' || PIEZASBLANCAS.includes(newBoard[index - 9])) && !ComprobarLimites(index, 'izq', '♝')) {
          index = index - 9
          newBoard[index] = `${newBoard[index]}X`
          if(PIEZASBLANCAS.includes(newBoard[index][0])){
            index = 70
          }
        } else {
          break
        }
      }

      //Reseteamos el index para la siguiente comprobación
      index = POSICIONINICIAL
      //Comprobamos la diagonal hacia la adelante izquierda
      while (index < 64 && index >= 0){ 
        if ((newBoard[index  + 9] === '' || PIEZASBLANCAS.includes(newBoard[index + 9])) && !ComprobarLimites(index, 'der', '♝')) {
          index = index + 9
          newBoard[index] = `${newBoard[index]}X`
          if(PIEZASBLANCAS.includes(newBoard[index][0])){
            index = 70
          }
        } else {
          break
        }
      }

      //Reseteamos el index para la siguiente comprobación
      index = POSICIONINICIAL
      //Comprobamos la diagonal hacia la atrás izquierda
      while (index < 64 && index >= 0){ 
        if ((newBoard[index  - 7] === '' || PIEZASBLANCAS.includes(newBoard[index - 7])) && !ComprobarLimites(index, 'der', '♝')) {
          index = index - 7
          newBoard[index] = `${newBoard[index]}X`
          if(PIEZASBLANCAS.includes(newBoard[index][0])){
            index = 70
          }
        } else {
          break
        }
      }

      //Reseteamos el index para la siguiente comprobación
      index = POSICIONINICIAL
      //Veo si puede ir hacia adelante
      while (index < 64 && index >= 0){ 
        if ((newBoard[index  + 8] === '' || PIEZASBLANCAS.includes(newBoard[index + 8])) &&  index + 8 < 64) {
          index = index + 8
          newBoard[index] = `${newBoard[index]}X`
          if(PIEZASBLANCAS.includes(newBoard[index][0])){
            index = 70
          }
        } else {
          break
        }
      }

      //Reseteamos el index para la siguiente comprobación
      index = POSICIONINICIAL
      //Veo si puede ir hacia atrás
      while (index < 64 && index >= 0){ 
        if ((newBoard[index  - 8] === '' || PIEZASBLANCAS.includes(newBoard[index - 8])) &&  index - 8 >= 0) {
          index = index - 8
          newBoard[index] = `${newBoard[index]}X`
          if(PIEZASBLANCAS.includes(newBoard[index][0])){
            index = 70
          }
        } else {
          break
        }
      }

      //Reseteamos el index para la siguiente comprobación
      index = POSICIONINICIAL
      //Veo si puede ir hacia la derecha
      while (index < 64 && index >= 0){ 
        if ((newBoard[index  + 1] === '' || PIEZASBLANCAS.includes(newBoard[index + 1])) && !ComprobarLimites(index, 'der')) {
          index = index + 1
          newBoard[index] = `${newBoard[index]}X`
          if(PIEZASBLANCAS.includes(newBoard[index][0])){
            index = 70
          }
        } else {
          break
        }
      }

      //Reseteamos el index para la siguiente comprobación
      index = POSICIONINICIAL
      //Veo si puede ir hacia la izquierda
      while (index < 64 && index >= 0){ 
        if ((newBoard[index  - 1] === '' || PIEZASBLANCAS.includes(newBoard[index - 1])) && !ComprobarLimites(index, 'izq')) {
          index = index - 1
          newBoard[index] = `${newBoard[index]}X`
          if(PIEZASBLANCAS.includes(newBoard[index][0])){
            index = 70
          }
        } else {
          break
        }
      }

    }else if (newBoard[index] === '♕'){ //Blancas
      //Comprobamos la diagonal hacia la derecha adelante
      while (index < 64 && index >= 0){ 
        if ((newBoard[index  + 7] === '' || PIEZASNEGRAS.includes(newBoard[index + 7])) && !ComprobarLimites(index, 'izq')) {
          index = index + 7
          newBoard[index] = `${newBoard[index]}X`
          if(PIEZASNEGRAS.includes(newBoard[index][0])){
            index = 70
          }
        } else {
          break
        }
      }
      
      //Reseteamos el index para la siguiente comprobación
      index = POSICIONINICIAL
      //Comprobamos la diagonal hacia la derecha atrás
      while (index < 64 && index >= 0){ 
        if ((newBoard[index  - 9] === '' || PIEZASNEGRAS.includes(newBoard[index - 9])) && !ComprobarLimites(index, 'izq')) {
          index = index - 9
          newBoard[index] = `${newBoard[index]}X`
          if(PIEZASNEGRAS.includes(newBoard[index][0])){
            index = 70
          }
        } else {
          break
        }
      }

      //Reseteamos el index para la siguiente comprobación
      index = POSICIONINICIAL
      //Comprobamos la diagonal hacia la adelante izquierda
      while (index < 64 && index >= 0){ 
        if ((newBoard[index  + 9] === '' || PIEZASNEGRAS.includes(newBoard[index + 9])) && !ComprobarLimites(index, 'der')) {
          index = index + 9
          newBoard[index] = `${newBoard[index]}X`
          if(PIEZASNEGRAS.includes(newBoard[index][0])){
            index = 70
          }
        } else {
          break
        }
      }

      //Reseteamos el index para la siguiente comprobación
      index = POSICIONINICIAL
      //Comprobamos la diagonal hacia la atrás izquierda
      while (index < 64 && index >= 0){ 
        if ((newBoard[index  - 7] === '' || PIEZASNEGRAS.includes(newBoard[index - 7])) && !ComprobarLimites(index, 'der')) {
          index = index - 7
          newBoard[index] = `${newBoard[index]}X`
          if(PIEZASNEGRAS.includes(newBoard[index][0])){
            index = 70
          }
        } else {
          break
        }
      }

      //Reseteamos el index para la siguiente comprobación
      index = POSICIONINICIAL
      //Veo si puede ir hacia adelante
      while (index < 64 && index >= 0){ 
        if ((newBoard[index  + 8] === '' || PIEZASNEGRAS.includes(newBoard[index + 8])) &&  index + 8 < 64) {
          index = index + 8
          newBoard[index] = `${newBoard[index]}X`
          if(PIEZASNEGRAS.includes(newBoard[index][0])){
            index = 70
          }
        } else {
          break
        }
      }

      //Reseteamos el index para la siguiente comprobación
      index = POSICIONINICIAL
      //Veo si puede ir hacia atrás
      while (index < 64 && index >= 0){ 
        if ((newBoard[index  - 8] === '' || PIEZASNEGRAS.includes(newBoard[index - 8])) &&  index - 8 >= 0) {
          index = index - 8
          newBoard[index] = `${newBoard[index]}X`
          if(PIEZASNEGRAS.includes(newBoard[index][0])){
            index = 70
          }
        } else {
          break
        }
      }

      //Reseteamos el index para la siguiente comprobación
      index = POSICIONINICIAL
      //Veo si puede ir hacia la derecha
      while (index < 64 && index >= 0){ 
        if ((newBoard[index  + 1] === '' || PIEZASNEGRAS.includes(newBoard[index + 1])) && !ComprobarLimites(index, 'der')) {
          index = index + 1
          newBoard[index] = `${newBoard[index]}X`
          if(PIEZASNEGRAS.includes(newBoard[index][0])){
            index = 70
          }
        } else {
          break
        }
      }

      //Reseteamos el index para la siguiente comprobación
      index = POSICIONINICIAL
      //Veo si puede ir hacia la izquierda
      while (index < 64 && index >= 0){ 
        if ((newBoard[index  - 1] === '' || PIEZASNEGRAS.includes(newBoard[index - 1])) && !ComprobarLimites(index, 'izq')) {
          index = index - 1
          newBoard[index] = `${newBoard[index]}X`
          if(PIEZASNEGRAS.includes(newBoard[index][0])){
            index = 70
          }
        } else {
          break
        }
      }
    }

    //Movimientos del rey
    if (newBoard[index] === '♚') {
      //Veo si puede ir hacia adelante
        if ((newBoard[index  + 8] === '' || PIEZASBLANCAS.includes(newBoard[index + 8])) &&  index + 8 < 64) {
          index = index + 8
          newBoard[index] = `${newBoard[index]}X`
          if(PIEZASBLANCAS.includes(newBoard[index][0])){
            index = 70
          }
        }

      //Reseteamos el index para la siguiente comprobación
      index = POSICIONINICIAL
      //Veo si la torre puede ir hacia atrás
      
        if ((newBoard[index  - 8] === '' || PIEZASBLANCAS.includes(newBoard[index - 8])) &&  index - 8 >= 0) {
          index = index - 8
          newBoard[index] = `${newBoard[index]}X`
          if(PIEZASBLANCAS.includes(newBoard[index][0])){
            index = 70
          }
        }

      //Reseteamos el index para la siguiente comprobación
      index = POSICIONINICIAL
      //Veo si la torre puede ir hacia la derecha
      
        if ((newBoard[index  + 1] === '' || PIEZASBLANCAS.includes(newBoard[index + 1])) && !ComprobarLimites(index, 'der')) {
          index = index + 1
          newBoard[index] = `${newBoard[index]}X`
          if(PIEZASBLANCAS.includes(newBoard[index][0])){
            index = 70
          }
        } 
      

      //Reseteamos el index para la siguiente comprobación
      index = POSICIONINICIAL
      //Veo si la torre puede ir hacia la izquierda
        if ((newBoard[index  - 1] === '' || PIEZASBLANCAS.includes(newBoard[index - 1])) && !ComprobarLimites(index, 'izq')) {
          index = index - 1
          newBoard[index] = `${newBoard[index]}X`
          if(PIEZASBLANCAS.includes(newBoard[index][0])){
            index = 70
          }
        } 

        index = POSICIONINICIAL
        //Comprobamos la diagonal hacia la derecha adelante
      
        if ((newBoard[index  + 7] === '' || PIEZASBLANCAS.includes(newBoard[index + 7])) && !ComprobarLimites(index, 'izq')) {
          index = index + 7
          console.log('dibujo X en', index);
          newBoard[index] = `${newBoard[index]}X`
          if(PIEZASBLANCAS.includes(newBoard[index][0])){
            index = 70
          }
        }       
      
      //Reseteamos el index para la siguiente comprobación
      index = POSICIONINICIAL
      //Comprobamos la diagonal hacia la derecha atrás
      
        if ((newBoard[index  - 9] === '' || PIEZASBLANCAS.includes(newBoard[index - 9])) && !ComprobarLimites(index, 'izq')) {
          index = index - 9
          newBoard[index] = `${newBoard[index]}X`
          if(PIEZASBLANCAS.includes(newBoard[index][0])){
            index = 70
          }
        }      

      //Reseteamos el index para la siguiente comprobación
      index = POSICIONINICIAL
      //Comprobamos la diagonal hacia la adelante izquierda
      
        if ((newBoard[index  + 9] === '' || PIEZASBLANCAS.includes(newBoard[index + 9])) && !ComprobarLimites(index, 'der')) {
          index = index + 9
          newBoard[index] = `${newBoard[index]}X`
          if(PIEZASBLANCAS.includes(newBoard[index][0])){
            index = 70
          }
        } 

      //Reseteamos el index para la siguiente comprobación
      index = POSICIONINICIAL
      //Comprobamos la diagonal hacia la atrás izquierda
     
        if ((newBoard[index  - 7] === '' || PIEZASBLANCAS.includes(newBoard[index - 7])) && !ComprobarLimites(index, 'der')) {
          index = index - 7
          newBoard[index] = `${newBoard[index]}X`
          if(PIEZASBLANCAS.includes(newBoard[index][0])){
            index = 70
          }
        }
      
    } else if (newBoard[index] === '♔'){
      //Veo si puede ir hacia adelante
      if ((newBoard[index  + 8] === '' || PIEZASNEGRAS.includes(newBoard[index + 8])) &&  index + 8 < 64) {
        index = index + 8
        newBoard[index] = `${newBoard[index]}X`
        if(PIEZASNEGRAS.includes(newBoard[index][0])){
          index = 70
        }
      }

      //Reseteamos el index para la siguiente comprobación
      index = POSICIONINICIAL
      //Veo si la torre puede ir hacia atrás
    
      if ((newBoard[index  - 8] === '' || PIEZASNEGRAS.includes(newBoard[index - 8])) &&  index - 8 >= 0) {
        index = index - 8
        newBoard[index] = `${newBoard[index]}X`
        if(PIEZASNEGRAS.includes(newBoard[index][0])){
          index = 70
        }
      }

      //Reseteamos el index para la siguiente comprobación
      index = POSICIONINICIAL
      //Veo si la torre puede ir hacia la derecha
    
      if ((newBoard[index  + 1] === '' || PIEZASNEGRAS.includes(newBoard[index + 1])) && !ComprobarLimites(index, 'der')) {
        index = index + 1
        newBoard[index] = `${newBoard[index]}X`
        if(PIEZASNEGRAS.includes(newBoard[index][0])){
          index = 70
        }
      } 
    

      //Reseteamos el index para la siguiente comprobación
      index = POSICIONINICIAL
      //Veo si la torre puede ir hacia la izquierda
    
      if ((newBoard[index  - 1] === '' || PIEZASNEGRAS.includes(newBoard[index - 1])) && !ComprobarLimites(index, 'izq')) {
        index = index - 1
        newBoard[index] = `${newBoard[index]}X`
        if(PIEZASNEGRAS.includes(newBoard[index][0])){
          index = 70
        }
      } 

      //Comprobamos la diagonal hacia la derecha adelante
      index = POSICIONINICIAL
      if ((newBoard[index  + 7] === '' || PIEZASNEGRAS.includes(newBoard[index + 7])) && !ComprobarLimites(index, 'izq')) {
        index = index + 7
        newBoard[index] = `${newBoard[index]}X`
        if(PIEZASNEGRAS.includes(newBoard[index][0])){
          index = 70
        }
      }       
    
      //Reseteamos el index para la siguiente comprobación
      index = POSICIONINICIAL
      //Comprobamos la diagonal hacia la derecha atrás
    
      if ((newBoard[index  - 9] === '' || PIEZASNEGRAS.includes(newBoard[index - 9])) && !ComprobarLimites(index, 'izq')) {
        index = index - 9
        newBoard[index] = `${newBoard[index]}X`
        if(PIEZASNEGRAS.includes(newBoard[index][0])){
          index = 70
        }
      }      

    //Reseteamos el index para la siguiente comprobación
    index = POSICIONINICIAL
    //Comprobamos la diagonal hacia la adelante izquierda
    
      if ((newBoard[index  + 9] === '' || PIEZASNEGRAS.includes(newBoard[index + 9])) && !ComprobarLimites(index, 'der')) {
        index = index + 9
        newBoard[index] = `${newBoard[index]}X`
        if(PIEZASNEGRAS.includes(newBoard[index][0])){
          index = 70
        }
      } 

    //Reseteamos el index para la siguiente comprobación
    index = POSICIONINICIAL
    //Comprobamos la diagonal hacia la atrás izquierda
   
      if ((newBoard[index  - 7] === '' || PIEZASNEGRAS.includes(newBoard[index - 7])) && !ComprobarLimites(index, 'der')) {
        index = index - 7
        newBoard[index] = `${newBoard[index]}X`
        if(PIEZASNEGRAS.includes(newBoard[index][0])){
          index = 70
        }
      }
    }

    return newBoard
}