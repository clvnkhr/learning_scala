object TicTacToe {
  val X = "X"
  val O = "O"
  val Empty = " "

  def main(args: Array[String]): Unit = {
    val board = Array.fill(3, 3)(Empty)
    var player = X
    var winner = Empty

    while (winner == Empty) {
      printBoard(board)
      val (row, col) = getPlayerMove(player)
      board(row)(col) = player
      winner = checkWinner(board)
      player = if (player == X) O else X
    }

    printBoard(board)
    println(s"Game over! $winner wins!")
  }

  def printBoard(board: Array[Array[String]]): Unit = {
    println("  0 1 2")
    for (i <- 0 until 3) {
      print(s"$i ")
      for (j <- 0 until 3) {
        print(s"${board(i)(j)} ")
      }
      println()
    }
  }

  def getPlayerMove(player: String): (Int, Int) = {
    println(s"$player's turn. Enter row and column (e.g. 0 1):")
    val input = scala.io.StdIn.readLine()
    val Array(row, col) = input.split(" ").map(_.toInt)
    (row, col)
  }

  def checkWinner(board: Array[Array[String]]): String = {
    for (i <- 0 until 3) {
      if (
        board(i)(0) != Empty && board(i)(0) == board(i)(1) && board(i)(
          1
        ) == board(i)(2)
      ) {
        return board(i)(0)
      }
      if (
        board(0)(i) != Empty && board(0)(i) == board(1)(i) && board(1)(
          i
        ) == board(2)(i)
      ) {
        return board(0)(i)
      }
    }
    if (
      board(0)(0) != Empty && board(0)(0) == board(1)(1) && board(1)(
        1
      ) == board(2)(2)
    ) {
      return board(0)(0)
    }
    if (
      board(0)(2) != Empty && board(0)(2) == board(1)(1) && board(1)(
        1
      ) == board(2)(0)
    ) {
      return board(0)(2)
    }
    if (board.flatten.contains(Empty)) {
      return Empty
    }
    "Tie"
  }
}
