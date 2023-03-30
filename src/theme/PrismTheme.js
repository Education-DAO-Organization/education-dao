import { lighten, transparentize } from 'polished'

import { NORD_PALETTE, PALETTE } from './Palette'

const { frost, aurora } = NORD_PALETTE

export const THEME = `
  pre[class*='language-'],
  code[class*='language-'] {
		color: ${PALETTE.warmGrey1};
    font-family: pt-mono, monospace;
    text-align: left;
    white-space: pre;
  	word-break: break-all;
  	word-wrap: break-word;
    tab-size: 2;
    -moz-tab-size: 2;
    -o-tab-size: 2;
    tab-size: 2;
  	word-wrap: break-word;
    hyphens: none;
    > span {
      white-space: pre-wrap;
      word-wrap: break-word;
    }
  }

  :not(pre) > code[class*="language-"] {
	padding: 0.1em; /* this is the default */
	border-radius: unset;
	white-space: normal; /* this is standard */
  }

	// https://github.com/ntkvu/ninja-ui-vibrant-syntax-vscode/blob/master/themes/Ninja%20Ui%20Vibrant-color-theme.json
  .token {
		&.comment,
		&.prolog,
		&.doctype,
		&.cdata {
			color: ${PALETTE.warmGrey2};
		}

		&.punctuation {
			color: ${PALETTE.warmGrey2};
		}

		&.property,
		&.tag,
		&.constant,
		&.symbol,
		&.deleted {
			// Should be a magenta?
			color: ${PALETTE.red};
		}

		&.boolean,
		&.number {
			color: ${PALETTE.purple1};
		}

		&.selector,
		&.attr-name,
		&.string,
		&.char,
		&.builtin,
		&.inserted {
			color: ${lighten(0.095, PALETTE.green)};
		}

		&.operator,
		&.entity,
		&.url,
		&.language-css &.string,
		&.style &.string,
		&.variable {
			color: ${PALETTE.warmGrey0};
		}

		&.atrule,
		&.attr-value,
		&.function {
			color: #E6DB74;
		}

		&.keyword {
			color: #F92672;
		}

		&.regex,
		&.important {
			color: ${lighten(0.09, PALETTE.orange)};
		}

		&.important,
		.token.bold {
			font-weight: bold;
		}
		&.italic {
			font-style: italic;
		}

		&.entity {
			cursor: help;
		}

		&.namespace {
			opacity: .7;
		}

    // &.boolean,
    // &.deleted,
    // &.tag,
    // &.url,
    // .language-css &.string,
    // .style &.string,
    // &.keyword {
    //   color: ${frost.nord9};
    // }
		//
    // &.namespace {
    //   opacity: 0.7;
    // }
		//
    // &.selector,
    // &.builtin,
    // &.inserted {
    // 	color: ${aurora.nord14};
    // }
		//
    // &.atrule,
    // &.attr-value,
    // &.function,
    // &.class-name {
    //   color: ${frost.nord8};
    // }
		//
    // &.regex,
    // &.important {
    //   color: ${aurora.nord13};
    // }
		//
    // &.comment,
    // &.prolog,
    // &.cdata {
	  //   color: #b362ff;
    // }
		//
    // &.attr-name,
    // &.operator {
    //   color: rgb(255, 180, 84);
    // }
		//
    // &.punctuation {
    //   color: #CDCDCD;
    // }
		//
    // &.boolean {
    //   color: rgb(255, 98, 140);
    // }
		//
    // &.tag,
    // &.tag .punctuation,
    // &.doctype,
    // &.builtin {
    //   color: rgb(255, 157, 0);
    // }
		//
    // &.symbol,
    // &.entity {
    //   color: #6897bb;
    // }
		//
    // &.number {
    //   color: #D25A59;
    // }
		//
    // &.property,
    // &.constant,
    // &.variable {
    //   color: #ff628c;
    // }
		//
    // &.string,
    // &.char {
    //   color: #a5ff90;
    // }
		//
    // &.attr-value,
    // &.attr-value .punctuation {
    // 	color: #a5c261;
    // }


    // .token.comment,
    // .token.prolog,
    // .token.doctype,
    // .token.cdata {
	  //   color: #636f88;
    // }
    //
    // &.operator,
    // &.entity,
    // &.url,
    //
    // &.variable {
	  //   color: #f8f8f2;
    // }
    //
    // &.property,
    // &.tag,
    // &.constant,
    // &.symbol,
    // &.deleted {
    // 	color: #ff79c6;
    // }
    //
    // &.boolean {
    // 	color: #bd93f9;
    // }
    //
    // &.selector,
    // &.attr-name,
    // &.string,
    // &.char,
    // &.builtin,
    // &.inserted {
    // 	color: #50fa7b;
    // }
    //
    //
    // .language-css &.string,
    // .style &.string {
    // 	color: #f8f8f2;
    // }
    //
    // &.atrule,
    // &.attr-value,
    // &.function,
    // &.class-name {
    // 	color: #f1fa8c;
    // }
    //
    // &.keyword {
	  //   color: #8be9fd;
    // }
    //
    // &.regex,
    // &.important {
    // 	color: #ffb86c;
    // }
    //
    // &.important,
    // &.bold {
    // 	font-weight: bold;
    // }
    //
    // &.italic {
    // 	font-style: italic;
    // }
    //
    // &.entity {
    // 	cursor: help;
    // }
  	}
  }
`
