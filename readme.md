![badge](https://img.shields.io/badge/Izidev-documentations-informational)

# Simulador integrado Izidev

### Chamada do Script

#### Exemplo básico
```html
<script
      id="simulation-script"
      src="https://storage.googleapis.com/simulador-fgts/scripts/script-izidev-modal-simulator.js"
      emp="izidev"
></script>
```


#### Utilizando parâmetros opcionais
```html
<script
      id="simulation-script"
      src="https://storage.googleapis.com/simulador-fgts/scripts/script-izidev-modal-simulator.js"
      simulate-icon="true"
      simulate-icon-styles="background:#010101;font-weight:bold;"
      emp="izidev"
></script>
```

#### Parâmetros
| Parâmetro | Descrição |
| ------ | ------ |
| src (obrigatório) | Caminho do script. |
| emp (obrigatório) | Nome da empresa. |
| id (obrigatório) | Id do script, não deve ser alterado. |
| simulate-icon (opcional) | Adiciona no canto direito inferior da tela um botão que abre o modal de simulação. |
| simulate-icon-styles (opcional) | Adicionar novos estilos ao botão de que abre o modal de simulação. |


### Chamando o modal de simulação a partir de um botão na página
```html
<button onclick="openSimulation()">Abrir Simulador</button>
```
