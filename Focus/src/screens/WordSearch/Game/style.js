import React from "react";


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    grid: {
      flexDirection: 'column',
    },
    row: {
      flexDirection: 'row',
    },
    cell: {
      width: 30,
      height: 30,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
    },
    foundCell: {
      backgroundColor: 'green',
    },
    wordList: {
      marginTop: 20,
    },
    foundWord: {
      textDecorationLine: 'line-through',
      color: 'green',
    },
  });

  export default styles;