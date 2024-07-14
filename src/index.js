/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { SVG, Path } from '@wordpress/components';

/**
 * Internal dependencies
 */
import metadata from './block.json';
import edit from './edit';
import transforms from './transforms';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType( 'tabor/markdown-comment', {
	...metadata,
	icon: (
		<SVG width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<Path fillRule="evenodd" clipRule="evenodd" d="M2 6.75C2 5.23122 3.23122 4 4.75 4H19.25C20.7688 4 22 5.23122 22 6.75V17.25C22 18.7688 20.7688 20 19.25 20H4.75C3.23122 20 2 18.7688 2 17.25V6.75ZM4.75 5.5C4.05964 5.5 3.5 6.05964 3.5 6.75V17.25C3.5 17.9404 4.05964 18.5 4.75 18.5H19.25C19.9404 18.5 20.5 17.9404 20.5 17.25V6.75C20.5 6.05964 19.9404 5.5 19.25 5.5H4.75ZM6.46299 9.05709C6.74324 8.941 7.06583 9.00517 7.28033 9.21967L9 10.9393L10.7197 9.21967C10.9342 9.00517 11.2568 8.941 11.537 9.05709C11.8173 9.17318 12 9.44665 12 9.75V14.25C12 14.6642 11.6642 15 11.25 15C10.8358 15 10.5 14.6642 10.5 14.25V11.5607L9.53033 12.5303C9.23744 12.8232 8.76256 12.8232 8.46967 12.5303L7.5 11.5607V14.25C7.5 14.6642 7.16421 15 6.75 15C6.33579 15 6 14.6642 6 14.25V9.75C6 9.44665 6.18273 9.17318 6.46299 9.05709ZM15.75 9C16.1642 9 16.5 9.33579 16.5 9.75V12.4393L16.9697 11.9697C17.2626 11.6768 17.7374 11.6768 18.0303 11.9697C18.3232 12.2626 18.3232 12.7374 18.0303 13.0303L16.2803 14.7803C15.9874 15.0732 15.5126 15.0732 15.2197 14.7803L13.4697 13.0303C13.1768 12.7374 13.1768 12.2626 13.4697 11.9697C13.7626 11.6768 14.2374 11.6768 14.5303 11.9697L15 12.4393V9.75C15 9.33579 15.3358 9 15.75 9Z" fill="currentColor"/>
		</SVG>
	),
	example: {
		attributes: {
			content: __(
				'Add a call to action for the Shaping WordPress newsletter.',
				'markdown-comment-block'
			),
		},
	},
	transforms,
	edit,
} );
