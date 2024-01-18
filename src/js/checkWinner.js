//Comprobamos si ha caído algún rey
export const checkWinner = (newBoard) => {
    const reyesVivos = []
    newBoard.forEach(element => {
      if (element == '♚' || element == '♔') {
        reyesVivos.push(element)
      }
    });
    if (reyesVivos.length == 1) {
      if (reyesVivos[0] === '♚') {
        return '⚫'
      } else {
        return '⚪'
      }
    } else {
      return null
    }
}