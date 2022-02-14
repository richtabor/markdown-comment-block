/**
 * WordPress dependencies
 */
import { createBlock } from '@wordpress/blocks';

const transforms = {
	to: [
		{
			type: 'block',
			blocks: [ 'core/paragraph' ],
			transform: ( { content } ) => {
				return createBlock( 'core/paragraph', {
					content: `<p>${ content }</p>`,
				} );
			},
		},
		{
			type: 'block',
			blocks: [ 'core/heading' ],
			transform: ( { content } ) => {
				return createBlock( 'core/heading', {
					content,
				} );
			},
		},
	],
	from: [
		{
			type: 'enter',
			regExp: /^%%$/,
			transform: () => createBlock( 'tabor/markdown-comment' ),
		},
		{
			type: 'prefix',
			prefix: '%%',
			transform: ( content ) => {
				return createBlock( 'tabor/markdown-comment', {
					content: `<p>${ content }</p>`,
				} );
			},
		},
		{
			type: 'block',
			blocks: [ 'core/paragraph' ],
			transform: ( { content } ) => {
				return createBlock( 'tabor/markdown-comment', {
					content: `<p>${ content }</p>`,
				} );
			},
		},
		{
			type: 'block',
			blocks: [ 'core/heading' ],
			transform: ( { content } ) => {
				return createBlock( 'tabor/markdown-comment', {
					content: `<p>${ content }</p>`,
				} );
			},
		},
	],
};

export default transforms;
