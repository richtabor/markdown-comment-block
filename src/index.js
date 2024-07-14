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
registerBlockType( metadata.name, {
	...metadata,
	icon: (
		<SVG fill="none" viewBox="0 0 24 24">
			<Path d="m11.9937 19.5387c-.0356 0-.071-.002-.1066-.0068-.188-.0272-.3572-.1206-.478-.262l-2.95265-3.2002h-2.91585c-1.07185 0-1.5406-.5228-1.5406-1.5406v-8.527c0-1.03335.5-1.5408 1.5406-1.5408h12.9188c.9156 0 1.5408.5387 1.5408 1.5408v8.527c0 1.0021-.7346 1.5406-1.5408 1.5406h-2.9282l-2.9707 3.2204c-.147.1594-.3532.2486-.5668.2486zm-6.4531-5.5096c0 .2761.22386.5.5.5h2.75325c.215 0 .4202.0904.5662.2478l2.63485 2.8564 2.6326-2.8564c.1458-.1574.3512-.2478.5662-.2478h2.7657c.2761 0 .5-.2239.5-.5v-7.527c0-.27614-.2239-.5-.5-.5h-11.9188c-.27614 0-.5.22386-.5.5z" />
		</SVG>
	),
	example: {
		attributes: {
			content: __(
				'This is an example of markdown comment that shows in the editor, but does not render on the front-end.',
				'markdown-comment-block'
			),
		},
	},
	transforms,
	edit,
} );
