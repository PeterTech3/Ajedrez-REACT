import { TURNS, PIEZASBLANCAS, PIEZASNEGRAS } from '../js/constantes';

const PLAYS = []

export const Square = ({ children, color, pieza, index, updateBoard, board, isSelected, ShowMoves, updateMoves, turn }) => {
    const className = `${color} ${isSelected ? 'is-selected' : ''}`
  
    const handleClick = () => {
      if ((PIEZASBLANCAS.includes(pieza) || pieza.includes('X')) && turn === TURNS.Blancas) { //Turno de las blancas, se bloquean las negras
        let newIndex = 0
        if (!pieza.includes('X')) PLAYS.push(pieza, index) //Añado la pieza y su nueva posición a una lista
    
        if (pieza.includes('X')) newIndex = index


        if (board[index].includes('X')) {

          index = PLAYS[PLAYS.length - 1]
          pieza = PLAYS[PLAYS.length - 2]
          updateBoard(pieza, index, newIndex)
    
        } else if (board[index] != '') { //Si clicko una casilla con una pieza
          let newBoard = ShowMoves(index, board)    
          updateMoves(newBoard)
        }    
      } else if ((PIEZASNEGRAS.includes(pieza) || pieza.includes('X')) && turn === TURNS.Negras) { //Turno de las nergas, se bloquean las blancas
        let newIndex = 0
        if (!pieza.includes('X')) PLAYS.push(pieza, index)
    
        if (pieza.includes('X')) newIndex = index
    
        if (board[index].includes('X')) {
          index = PLAYS[PLAYS.length - 1]
          pieza = PLAYS[PLAYS.length - 2]
          updateBoard(pieza, index, newIndex)
    
        } else if (board[index] != '') {
          let newBoard = ShowMoves(index, board)    
          updateMoves(newBoard)
        }   
      } 
    }
    return (
      <div className={className} onClick={handleClick}>
        {children}
      </div>
    )
}