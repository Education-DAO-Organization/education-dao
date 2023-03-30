import { lighten, transparentize } from 'polished'

// App Palette
// #1D1C1C
// #826FD8
// #E9AC65

export const PALETTE = {
	base0: '#292524',
	base1: '#191917',
	warmGrey0: '#f5f5f4',
	warmGrey1: '#e7e5e4',
	warmGrey2: '#a8a29e',
	purple0: '#9684e3',
	purple1: '#ae9ff4',
	green: '#10b981',
	red: '#f87171',
	orange: '#fb923c',


}

export const SYNTAX_PALETTE = {
  base0: '#9aa1b2',
  base1: transparentize(0.4, '#9aa1b2'),
  yellow: '#fff206',
  orange: '#FF9B42',
  red: '#CC0041',
  magenta: '#CE4760',
  violet: '#8f5eb0',
  blue: '#02a6c2',
  cyan: '#3edfc5',
  green: '#2EDC68',
}

export const NORD_PALETTE = {
  polar_night: {
    nord0: '#2E3440',
    nord1: '#3B4252',
    nord2: '#434C5E',
    nord3: '#4C566A',
  },
  snow_storm: {
    nord4: '#D8DEE9',
    nord5: '#E5E9F0',
    nord6: '#ECEFF4',
  },
  frost: {
    nord7: '#8FBCBB',
    nord8: '#88C0D0',
    nord9: '#81A1C1',
    nord10: '#5E81AC',
  },
  aurora: {
    nord11: '#BF616A',
    nord12: '#D08770',
    nord13: '#EBCB8B',
    nord14: '#A3BE8C',
    nord15: '#B48EAD',
  },
}
