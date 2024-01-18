import { useState } from 'react'
import { Square } from './components/square';
import { TURNS, INITIALCHESSBOARD } from './js/constantes';
import { ShowMoves } from './js/movements';
import { checkWinner } from './js/checkWinner';
import './css/chess.css'

function App() {
  //Inicializo el estado del tablero
  const [board, setBoard] = useState(INITIALCHESSBOARD)

  //Inicializo el turno en las blancas
  const [turn, setTurn] = useState(TURNS.Blancas)

  //Inicializo el ganador en null
  const [winner, setWinner] = useState(null)

  const updateMoves = (newBoard) => {
    setBoard(newBoard)
  }

  //Actualiza con el movimiento de la pieza
  const updateBoard = (pieza, index, newIndex) => {  
    const newBoard = [...board]

    //Limpiamos las 'X'
    newBoard.forEach(square => {
      if (square.includes('X')){
        let indice = newBoard.indexOf(square)
        newBoard[indice] = square.replace('X', '')
      }
    });

    //Colocamos la ficha en su posición
    newBoard[newIndex] = pieza
    newBoard[index] = ""
    setBoard(newBoard)

    //Comprobamos si hay ganador
    const newWinner = checkWinner(board)
    if (newWinner !== null) {
      setWinner(newWinner)
    }

    //Cambiamos el turno del player
    const newTurn = turn === TURNS.Blancas ? TURNS.Negras : TURNS.Blancas
    setTurn(newTurn)
  }

  

  //Empezar de nuevo
  const resetGame = () => {
    setBoard(INITIALCHESSBOARD)
    setTurn(TURNS.Blancas)
    setWinner(null)
  }
  
  return (
    <main>
      <h1>Ajedrez</h1>
      <section>
        {
          board.map((_, index) => {
            let color = ''
            if (index >= 0 && index <= 7 ||
              index >= 16 && index <= 23 ||
              index >= 32 && index <= 39 ||
              index >= 48 && index <= 55) {
              if (index % 2 === 1) {
                color = 'black'
              } else {
                color = 'white'
              }
            } else {
              if (index % 2 === 1) {
                color = 'white'
              } else {
                color = 'black'
              }
            }
            let pieza = board[index]
            
            return(
              <Square
              key={index}
              index={index}
              color={color}
              pieza={pieza}
              updateBoard={updateBoard}
              ShowMoves={ShowMoves}
              board={board}
              updateMoves={updateMoves}
              turn={turn}>
                {board[index]}
              </Square>
            )
          })
        }
      </section>

      <section className='turn'>
        <Square isSelected={turn === TURNS.Blancas}>
          {TURNS.Blancas}
        </Square>
        <Square isSelected={turn === TURNS.Negras}>
          {TURNS.Negras}
        </Square>
      </section>

        {
          winner !== null && (
            <section className='winner'>
              <div className='text'>
                <h2>
                  Ganó
                </h2>

                <header className='win'>
                  {winner && <Square>{winner}</Square>}
                </header>

                <footer>
                  <button onClick={resetGame}>Empezar de Nuevo</button>
                </footer>
              </div>
            </section>
          )

        }

    </main>
  )
}

export default App
