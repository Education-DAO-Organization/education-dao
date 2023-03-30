// How go about giving them credit for this?
// https://github.com/solana-playground/solana-playground/blob/master/client/src/components/Panels/Main/Editor/Editor.tsx
import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react'

// Oh god these imports
// Make it stop
import { autocompletion, completionKeymap } from '@codemirror/autocomplete'
import { basicSetup } from '@codemirror/basic-setup'
import { closeBrackets, closeBracketsKeymap } from '@codemirror/closebrackets'
import { defaultKeymap , indentWithTab } from '@codemirror/commands'
import { commentKeymap } from '@codemirror/comment'
import { foldGutter, foldKeymap } from '@codemirror/fold'
import { lineNumbers, highlightActiveLineGutter } from '@codemirror/gutter'
import { HighlightStyle, tags , defaultHighlightStyle } from '@codemirror/highlight'
import { history, historyKeymap } from '@codemirror/history'
import { javascript } from '@codemirror/lang-javascript'
import { indentOnInput } from '@codemirror/language'
import { lintKeymap } from '@codemirror/lint'
import { bracketMatching } from '@codemirror/matchbrackets'
import { rectangularSelection } from '@codemirror/rectangular-selection'
import { EditorState } from '@codemirror/state'
import {
	EditorView,
	keymap,
  highlightSpecialChars,
  drawSelection,
  highlightActiveLine,
  dropCursor,
} from '@codemirror/view'
import { solidity } from '@replit/codemirror-lang-solidity'
import { lighten, transparentize, darken } from 'polished'
import styled, { useTheme } from 'styled-components'

import { SIMPLE_BANK } from '../../constants/Hashing'

const Wrap = styled.div`
	grid-area: editor;
`

const highlight = HighlightStyle.define([
{
	// const x: _bool_ = true;
	tag: tags.typeName,
	color: 'cyan',
	fontStyle: 'italic',
},
{
	// Comment with //
	tag: tags.lineComment,
	color: `${darken(0.1, '#a8a29e')}`,
},
{
	// _myFunction_()
	tag: tags.function(tags.variableName),
	color: 'green',
},
])

const Editor = () => {
	const [noOpenTabs, setNoOpenTabs] = useState(false)
	const { ethereum } = window
	const parent = useRef(null)

	// Why they useMemo here?
	const editorTheme = EditorView.theme(
		{
			'&': {
				height: '100%',
				backgroundColor: '#292524'
			},
			'& .cm-cursor': {
				borderLeft: '3px solid green',
			},
			'& .cm-gutters': {
				background: '#292524',
				color: 'pink'
			},
			'& .cm-scroller': {
        fontFamily: 'Fraktion Mono Regular',
				fontSize: 16,
				color: 'white',
      },
			// // Gutters
			'& .cm-activeLineGutter': {
				backgroundColor: 'red',
				color: 'black',
			},
			// '& .cm-gutterElement:nth-child(1)': {
			// 	padding: '0.125rem',
			// },
			// // Line
			// '& .cm-line': {
			// 	border: '1.5px solid transparent',
			// },
			// '& .cm-activeLine': {
			// 	backgroundColor: theme.colors.editor?.activeLine?.bg ?? 'inherit',
			// 	borderColor:
			// 		theme.colors.editor?.activeLine?.borderColor ?? 'transparent',
			// 	borderRightColor: 'transparent',
			// 	borderLeftColor: 'transparent',
			// },
			// // Selection
			// '& .cm-selectionBackground, &.cm-focused .cm-selectionBackground': {
			// 	backgroundColor:
			// 		theme.colors.editor?.selection?.bg ??
			// 		theme.colors.default.primary + theme.transparency?.medium,
			// 	color: theme.colors.editor?.selection?.color ?? 'inherit',
			// },
			// '& .cm-selectionMatch': {
			// 	backgroundColor:
			// 		theme.colors.editor?.selection?.bg ??
			// 		theme.colors.default.textPrimary + theme.transparency?.medium,
			// 	color: theme.colors.editor?.selection?.color ?? 'inherit',
			// },
			// // Tooltip
			// '.cm-tooltip': {
			// 	backgroundColor:
			// 		theme.colors.editor?.tooltip?.bg ?? theme.colors.default.bg,
			// 	color: theme.colors.default.textPrimary,
			// 	border: '1px solid ' + theme.colors.default.borderColor,
			// },
			// '.cm-tooltip-autocomplete': {
			// 	'& > ul > li[aria-selected]': {
			// 		backgroundColor:
			// 			theme.colors.default.primary + theme.transparency?.medium,
			// 	},
			// },
			// // Panels
			// '.cm-panels': {
			// 	backgroundColor: theme.colors?.right?.bg ?? 'inherit',
			// 	color: theme.colors.default.textPrimary,
			// 	width: 'fit-content',
			// 	height: 'fit-content',
			// 	position: 'fixed',
			// 	top: 0,
			// 	right: '10%',
			// 	left: 'auto',
			// },
			// // Search
			// '.cm-searchMatch': {
			// 	backgroundColor:
			// 		theme.colors.editor?.searchMatch?.bg ??
			// 		theme.colors.default.textSecondary + theme.transparency?.medium,
			// 	color: theme.colors?.editor?.searchMatch?.color ?? 'inherit',
			// },
			// '.cm-searchMatch-selected': {
			// 	backgroundColor:
			// 		theme.colors.editor?.searchMatch?.selectedBg ??
			// 		theme.colors.default.primary + theme.transparency?.medium,
			// 	color: theme.colors?.editor?.searchMatch?.color ?? 'inherit',
			// },
			// // Search popup
			// '.cm-panel.cm-search': {
			// 	backgroundColor: theme.colors?.right?.bg ?? 'inherit',
			//
			// 	'& input, & button, & label': {
			// 		margin: '.2em .6em .2em 0',
			// 	},
			// 	'& input[type=checkbox]': {
			// 		marginRight: '.2em',
			// 	},
			// 	'& label': {
			// 		fontSize: '80%',
			// 		whiteSpace: 'pre',
			// 	},
			//
			// 	'& label:nth-of-type(2)': {
			// 		marginRight: '1.5rem',
			// 	},
			//
			// 	'& button[name=close]': {
			// 		position: 'absolute',
			// 		top: '0.25rem',
			// 		right: '0.25rem',
			// 		margin: 0,
			// 		width: '1rem',
			// 		height: '1rem',
			// 		color: theme.colors.default.textPrimary,
			// 		backgroundColor: 'inherit',
			// 		borderRadius: '0.25rem',
			//
			// 		'&:hover': {
			// 			cursor: 'pointer',
			// 			backgroundColor: theme.colors.default.bg,
			// 		},
			// 	},
			// },
		})
//
// 	const removeEditor = useCallback(() => {
//     if (parent.current?.hasChildNodes()) {
//       const cm = document.getElementsByClassName('cm-editor')[0]
//       parent.current.removeChild(cm)
//     }
//   }, [])

	useEffect(() => {
		// Where is there a re-render coming form?
		// Look back on the logic used for the tvc to make sure this for sure doesn't re-render
		// Don't stick with this logic here, it might not be solid
		if (!parent.current?.hasChildNodes()) {
			new EditorView({
			state: EditorState.create({
			doc: SIMPLE_BANK['SimpleBank.sol'].content,
			extensions: [
				lineNumbers(),
				highlightActiveLineGutter(),
				highlightSpecialChars(),
				indentOnInput(),
				defaultHighlightStyle.fallback,
				bracketMatching(),
				closeBrackets(),
				autocompletion(),
				rectangularSelection(),
				highlightActiveLine(),
				foldGutter(),
				history(),
				javascript(),
				// Why is solidity not being recognized?
				// Even if you comment out the javascript, it just won't show up?
				// solidity,
				drawSelection(),
				foldGutter(),
				dropCursor(),
				keymap.of([
				...defaultKeymap,
				...closeBracketsKeymap,
				...historyKeymap,
				...foldKeymap,
				...commentKeymap,
				...completionKeymap,
				...lintKeymap,
				indentWithTab,
				]),
				editorTheme,
				highlight,
				],
			}),
			parent: parent.current,
			})
		}
	}, [])

  return noOpenTabs
			? <Wrap>Oh no, our dApp, it&apos;s broken</Wrap>
			: <Wrap ref={parent} />
}

export default Editor
