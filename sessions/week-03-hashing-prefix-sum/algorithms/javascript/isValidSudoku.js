function isValidSudoku(board) {
    const seen = new Set();
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const val = board[i][j];
            if (val !== '.') {
                const rowKey = `${val} in row ${i}`;
                const colKey = `${val} in col ${j}`;
                const boxKey = `${val} in box ${Math.floor(i / 3)}-${Math.floor(j / 3)}`;
                if (seen.has(rowKey) || seen.has(colKey) || seen.has(boxKey)) {
                    return false;
                }
                seen.add(rowKey);
                seen.add(colKey);
                seen.add(boxKey);
            }
        }
    }
    return true;
}
