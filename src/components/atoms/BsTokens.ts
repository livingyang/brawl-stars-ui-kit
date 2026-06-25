// Brawl Stars UI Design Tokens
export const BsColors = {
  // Primary colors
  yellow: '#F5CD30',
  yellowDark: '#D4AB20',
  yellowLight: '#FFF06A',

  // Victory/Defeat colors
  victoryBlue: '#3D8BFF',
  victoryBlueDark: '#2A6AD9',
  defeatRed: '#FF4949',
  defeatRedDark: '#D63A3A',

  // Neutral colors
  white: '#FFFFFF',
  black: '#000000',
  gray100: '#F5F5F5',
  gray200: '#E0E0E0',
  gray300: '#BDBDBD',
  gray400: '#9E9E9E',
  gray500: '#757575',
  gray600: '#424242',
  gray700: '#212121',

  // Special colors
  gold: '#FFD700',
  diamond: '#B9F2FF',
  green: '#4CAF50',
  purple: '#9C27B0',
  orange: '#FF9800',

  // Background
  darkBg: '#1A1A2E',
  darkBgLight: '#2D2D44',
} as const;

export const BsSpacing = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '40px',
} as const;

export const BsBorder = {
  width: '3px',
  radius: {
    sm: '8px',
    md: '12px',
    lg: '16px',
    round: '50%',
  },
} as const;

export const BsFont = {
  family: 'system-ui, -apple-system, sans-serif',
  sizes: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '20px',
    xl: '24px',
    xxl: '28px',
    title: '72px',
  },
  weights: {
    regular: 400,
    medium: 500,
    bold: 700,
  },
} as const;

// Animation durations
export const BsAnimation = {
  fast: '150ms',
  normal: '250ms',
  slow: '400ms',
} as const;

// Hover/Active scale transforms
export const BsTransform = {
  hover: 'scale(1.05)',
  active: 'scale(0.97)',
} as const;
