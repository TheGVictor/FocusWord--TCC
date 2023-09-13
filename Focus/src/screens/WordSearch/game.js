import { SafeAreaView, View, Image, Text, Alert } from "react-native";
import React, {Component} from 'react'


class WordSearchGame extends Component {
    constructor(props) {
      super(props);
      this.state = {
        gridLetras: this.gerarGridAleatorio(),
        listaPalavras: ['HISTORIA', 'CIENCIA', 'MATEMATICA', 'INGLES', 'PORTUGUES', 'VERBO', 'PREPOSICAO'],
        palavrasEncontradas: [],
          palavraEncontradaCells: [],
        
        
      };
    }
  
    gerarGridAleatorio = () => {
      const gridSizeX = 17; // Tamanho do grid horizontal
      const gridSizeY = 12; // Tamanho do grid vertical
      const grid = [];
  
      for (let i = 0; i < gridSizeX; i++) {
        const row = [];
        for (let j = 0; j < gridSizeY; j++) {
          row.push('');
        }
        grid.push(row);
      }
  
      return grid;
    };
  
    adicionarPalavraAoGrid = (palavra) => {
      const { gridLetras } = this.state;
      const gridSize = gridLetras.length;
  
      const directions = ['horizontal', 'vertical'];
      const selectedDirection = directions[Math.floor(Math.random() * directions.length)];
  
      if (selectedDirection === 'horizontal') {
        let x, y;
        do {
          x = Math.floor(Math.random() * (gridSize - palavra.length + 1));
          y = Math.floor(Math.random() * gridSize);
        } while (!this.ehPosicaoValida(gridLetras, palavra, x, y, 'horizontal'));
  
        for (let i = 0; i < palavra.length; i++) {
          gridLetras[y][x + i] = palavra[i];
        }
      } else {
        let x, y;
        do {
          x = Math.floor(Math.random() * gridSize);
          y = Math.floor(Math.random() * (gridSize - palavra.length + 1));
        } while (!this.ehPosicaoValida(gridLetras, palavra, x, y, 'vertical'));
  
        for (let i = 0; i < palavra.length; i++) {
          gridLetras[y + i][x] = palavra[i];
        }
      }
  
      this.setState({ gridLetras });
    };
  
    ehPosicaoValida = (grid, palavra, x, y, direcao) => {
      const gridSize = grid.length;
  
      if (direcao === 'horizontal') {
        for (let i = 0; i < palavra.length; i++) {
          if (grid[y][x + i] !== '' && grid[y][x + i] !== palavra[i]) {
            return false;
          }
        }
      } else {
        for (let i = 0; i < palavra.length; i++) {
          if (grid[y + i][x] !== '' && grid[y + i][x] !== palavra[i]) {
            return false;
          }
        }
      }
  
      return true;
    };
  
    componentDidMount() {
      this.state.listaPalavras.forEach((palavra) => {
        this.adicionarPalavraAoGrid(palavra);
      });
    }
  
    handleCellClick = (x, y) => {
      const letra = this.state.gridLetras[y][x];
      if (!letra) return; // Célula vazia
    
      const palavraEncontrada = this.state.listaPalavras.find((palavra) =>
        this.palavraContemCoordenada(palavra, x, y)
      );
    
      if (palavraEncontrada) {
        const cells = this.obterCelulasDaPalavra(palavraEncontrada, x, y);
    
        this.setState(
          (prevState) => ({
            palavrasEncontradas: [...prevState.palavrasEncontradas, palavraEncontrada],
            palavraEncontradaCells: [...prevState.palavraEncontradaCells, ...cells],
          }),
          () => {
            if (this.state.palavrasEncontradas.length === this.state.listaPalavras.length) {
              Alert.alert('Parabéns!', 'Você encontrou todas as palavras.');
            }
          }
        );
      }
    };
    
    
  
    obterCelulasDaPalavra = (palavra, x, y) => {
      const dx = [0, 1, 1, 1, 0, -1, -1, -1];
      const dy = [-1, -1, 0, 1, 1, 1, 0, -1];
      const cells = [];
    
      for (let i = 0; i < palavra.length; i++) {
        cells.push({ x: x + i * dx.every((val) => val === dx[0]), y: y + i * dy.every((val) => val === dy[0]) });
      }
      return cells;
    };
    
  
    coordenadasPalavra = (palavra, x, y) => {
      const dx = [0, 1, 1, 1, 0, -1, -1, -1];
      const dy = [-1, -1, 0, 1, 1, 1, 0, -1];
      const coordenadas = [];
    
      for (let i = 0; i < palavra.length; i++) {
        coordenadas.push({ x: x + i * dx.every((val) => val === dx[0]), y: y + i * dy.every((val) => val === dy[0]) });
      }
      return coordenadas;
    };

    render(){
        <View style={styles.grid}>
        {this.state.gridLetras.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((cell, columnIndex) => (
              <TouchableOpacity
              key={columnIndex}
              style={[
                styles.cell,
                this.state.palavraEncontradaCells.some((cellCoords) => cellCoords.x === columnIndex && cellCoords.y === rowIndex) &&
                styles.foundCell
              ]}
              onPress={() => this.handleCellClick(columnIndex, rowIndex)}
            >
              <Text>{cell}</Text>
            </TouchableOpacity>
            
            ))}
          </View>
        ))}
      </View>
    }

  }

  

  export default WordSearchGame
