export type Theme =
  | 'dracula'
  | 'nord'
  | 'github_light'
  | 'gruvbox_light'
  | 'custom_dark'

export type TypeTheme = {
  background: string,
  currentLine: string,
  foreground: string,
  comment: string,
  blue: string,
  green: string,
  orange: string,
  pink: string,
  purple: string,
  red: string,
  yellow: string,
}

export const dracula: TypeTheme = {
  background:  '#282a36',
  currentLine: '#44475a',
  foreground:  '#f8f8f2',
  comment:     '#6272a4',
  blue:        '#8be9fd',
  green:       '#50fa7b',
  orange:      '#ffb86c',
  pink:        '#ff79c6',
  purple:      '#bd93f9',
  red:         '#ff5555',
  yellow:      '#f1fa8c'
};


export const nord: TypeTheme = {
  background:  '#1e3440',
  currentLine: '#2b4252',
  foreground:  '#eceff3',
  comment:     '#3c566a',
  blue:        '#7fbcbb',
  green:       '#a2be8c',
  orange:      '#d08769',
  pink:        '#b48ead',
  purple:      '#bd93f9',
  red:         '#bf615a',
  yellow:      '#ebcb7b'
}

export const github_light: TypeTheme = {
  background:  '#f5f9fa',
  currentLine: '#fffbdf',
  foreground:  '#000000',
  comment:     '#586069',
  blue:        '#005cc5',
  green:       '#22863a',
  orange:      '#e36209',
  pink:        '#ff79c6',
  purple:      '#6f42c1',
  red:         '#d73a49',
  yellow:      '#fed442',
};

export const gruvbox_light: TypeTheme = {
  background:  '#fbf1c7',
  currentLine: '#bdae98',
  foreground:  '#1d2021',
  comment:     '#282828',
  blue:        '#458588',
  green:       '#b8bb26',
  orange:      '#d65d0e',
  pink:        '#d3869b',
  purple:      '#8f3f71',
  red:         '#cc241d',
  yellow:      '#d79921',
}

export const custom_dark: TypeTheme = {
  ...dracula,
  background:  '#0e0d11',
}
