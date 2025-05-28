def isValidSudoku(board):
    seen = set()
    for i in range(9):
        for j in range(9):
            num = board[i][j]
            if num != '.':
                if (num, i) in seen or (num, j + 9) in seen or (num, i // 3, j // 3) in seen:
                    return False
                seen.add((num, i))
                seen.add((num, j + 9))
                seen.add((num, i // 3, j // 3))
    return True
