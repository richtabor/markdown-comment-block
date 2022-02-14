<?php
/**
 * Plugin Name:       Markdown Comment Block
 * Description:       Add markdown inspired comments to posts that render only within the block editor.
 * Plugin URI:        https://richtabor.com/markdown-comments?utm_source=wp-plugins&utm_medium=markdown-comment-block&utm_campaign=plugin-uri
 * Requires at least: 5.7
 * Requires PHP:      7.0
 * Version:           0.1.8
 * Author:            RichTabor.com
 * Author URI:        https://richtabor.com/?utm_source=wp-plugins&utm_medium=markdown-comment-block&utm_campaign=author-uri
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       markdown-comment-block
 *
 * @package           tabor/markdown-comment-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/writing-your-first-block-type/
 */
function tabor_markdown_comment_block_init() {
	register_block_type_from_metadata( __DIR__ );
}
add_action( 'init', 'tabor_markdown_comment_block_init' );
