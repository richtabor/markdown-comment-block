/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	BlockControls,
} from '@wordpress/block-editor';
import { ToolbarButton, SVG, Path } from '@wordpress/components';
import { createBlock } from '@wordpress/blocks';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
function MarkdownCommentEdit( {
	attributes,
	mergeBlocks,
	onReplace,
	onRemove,
	setAttributes,
	clientId,
} ) {
	const { content } = attributes;

	function onChange( attribute ) {
		return ( newValue ) => {
			setAttributes( { [ attribute ]: newValue } );
		};
	}

	return (
		<>
			<BlockControls group="other">
				<ToolbarButton
					className="wp-block-tabor-markdown-comment__resolve"
					icon={
						<SVG width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<Path fillRule="evenodd" clipRule="evenodd" d="M12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5C16.6944 20.5 20.5 16.6944 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM15.4749 8.91953C15.7955 9.18183 15.8428 9.65434 15.5805 9.97493L11.0805 15.4749C10.9463 15.6389 10.749 15.7385 10.5374 15.7491C10.3257 15.7596 10.1195 15.6802 9.96967 15.5303L7.96967 13.5303C7.67678 13.2374 7.67678 12.7626 7.96967 12.4697C8.26256 12.1768 8.73744 12.1768 9.03033 12.4697L10.4443 13.8837L14.4195 9.02507C14.6818 8.70449 15.1543 8.65724 15.4749 8.91953Z" fill="currentColor"/>
						</SVG>
					}
					label={ __(
						'Resolve this comment',
						'markdown-comment-block'
					) }
					onClick={ onRemove }
				>
					{ __( 'Resolve', 'markdown-comment-block' ) }
				</ToolbarButton>
			</BlockControls>
			<div { ...useBlockProps() }>
				<RichText
					identifier="content"
					tagName="span"
					value={ content }
					multiline={ false }
					onChange={ onChange( 'content' ) }
					onSplit={ ( value, isOriginal ) => {
						let block;

						if ( isOriginal || value ) {
							block = createBlock( 'tabor/markdown-comment', {
								...attributes,
								content: value,
							} );
						} else {
							block = createBlock( 'core/paragraph' );
						}

						if ( isOriginal ) {
							block.clientId = clientId;
						}

						return block;
					} }
					onMerge={ mergeBlocks }
					onReplace={ onReplace }
					onRemove={ () => onReplace( [] ) }
					aria-label={
						content
							? __(
									'Markdown comment block',
									'markdown-comment-block'
							  )
							: __(
									'Empty block; start writing to add a markdown comment',
									'markdown-comment-block'
							  )
					}
					data-empty={ content ? false : true }
					placeholder={ __(
						'Markdown comment text',
						'markdown-comment-block'
					) }
					allowedFormats={ [] }
					__unstableEmbedURLOnPaste
					__unstableAllowPrefixTransformations
				/>
			</div>
		</>
	);
}

export default MarkdownCommentEdit;
