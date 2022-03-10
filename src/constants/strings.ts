export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!

export const WIN_MESSAGES = ['Aeee Caraiii!', 'Boooouuaaaa', 'Aí é desenrolado!']
export const GAME_COPIED_MESSAGE = 'Copiado'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'Faltando letras animal'
export const WORD_NOT_FOUND_MESSAGE = 'Essa palavra existe?'
export const HARD_MODE_ALERT_MESSAGE =
  'Só dá pra ativar o modo invocado no início do joguinho!'
export const HARD_MODE_DESCRIPTION =
  'Dica? Pra que?'
export const HIGH_CONTRAST_MODE_DESCRIPTION = 'Modo Cleysson de cores.'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `A palavra era ${solution}`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `Deve usar ${guess} na posição ${position}`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `Acho que deve tem ${letter}`
export const ENTER_TEXT = 'Enter'
export const DELETE_TEXT = 'Delete'
export const STATISTICS_TITLE = 'Estatísticas'
export const GUESS_DISTRIBUTION_TEXT = 'Palpites'
export const NEW_WORD_TEXT = 'Nova palavra em'
export const SHARE_TEXT = 'Se amostrar'
export const TOTAL_TRIES_TEXT = 'Tentativas'
export const SUCCESS_RATE_TEXT = 'Acertos'
export const CURRENT_STREAK_TEXT = 'Sequência Atual'
export const BEST_STREAK_TEXT = 'Melhor Sequência'
