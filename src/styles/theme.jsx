export const theme = Object.freeze({
  colors: {
    accent: '#D1913C',
    green: '#0fd20f',
    red: '#FF002B',
    gray: '#9e9e9e',
    light: '#f2f2f2',
    dark: '#0f0c29',
    cardBackground: ['linear-gradient(to right, #0f0c29, #302b63, #24243e)'],
  },
  fontSizes: {
    small: '16px',
    medium: '18px',
    large: '25px',
  },
  spacing: value => `${4 * value}px`,
  shadows: {
    small: '0 5px 7px -1px rgba(237, 226, 226, 0.50)',
    regular: '0px 4px 10px 4px #9e9e9e',
    medium: '0 9px 47px 11px rgba(51, 51, 51, 0.18);',
    textShadow:
      '2px 0 0px #800040, 3px 2px 0px rgba(77,0,38,0.5), 3px 0 3px #FF002B, 5px 0 3px #800015, 6px 2px 3px rgba(77,0,13,0.5), 6px 0 9px #FF5500, 8px 0 9px #802A00, 9px 2px 9px rgba(77,25,0,0.5), 9px 0 18px #FFD500, 11px 0 18px #806A00, 12px 2px 18px rgba(77,66,0,0.5), 12px 0 30px #D4FF00, 14px 0 30px #6A8000, 15px 2px 30px rgba(64,77,0,0.5), 15px 0 45px #80FF00, 17px 0 45px #408000, 17px 2px 45px rgba(38,77,0,0.5);',
  },
  animation: value => `${value} 0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98)`,
});
