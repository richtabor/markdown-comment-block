=== Markdown Comment Block ===
Contributors:      richtabor
Tags:              gutenberg, block, blocks, markdown, comments
Tested up to:      6.0
Stable tag:        0.1.8
License:           GPL-2.0-or-later
License URI:       https://www.gnu.org/licenses/gpl-2.0.html

Add markdown inspired comments to posts that render only within the block editor.

== Description ==
### Comments that only render in the block editor

I honestly enjoy drafting articles either locally in Ulysses, or on [my blog](https://richtabor.com) using the [Iceberg Editor](https://useiceberg.com/?utm_source=wp-org&utm_medium=markdown-comment-block&utm_campaign=readme-description). While I do love Iceberg, once I publish an article I typically bring back the default Gutenberg experience — thus removing any comments I previously added.

Having the ability to add, and keep, any relevant editing comments within my posts, without rendering them on the front-end, means that I am freed up to mentally jot any idea down without thinking about it. It is simply natural and convenient.

[Learn more about Markdown Comment &rarr;](https://richtabor.com/markdown-comments/?utm_source=wp-org&utm_medium=markdown-comment-block&utm_campaign=readme-learnmore)

### What's interesting about Markdown Comment:

#### 1. Editor only
The block only renders within the editor. For developers reading this, that means there’s no save function. I don’t want my unfinished ideas, reminders, and notes rendered within my post - even if they’re hidden by CSS.

#### 2. Helpful block transforms
I added a couple transforms, to and from headings and paragraphs, and a raw shortcut when you type `%%` and hit the [space] key. This lets me quickly add comments, and even convert whole paragraphs or headings to a comment.

#### 3. Easily resolve comments
To support that path towards simplicity, I wanted a method to quickly resolve — i.e. banish — a comment entirely. So, I added a toolbar control to quickly resolve the comment, removing the block entirely.

#### 4. No rich text support
Comments need to have minimal impact on editing, and feel as natural as possible. That’s why there are no typical RichText controls (although you can still bold, italicize and add hyperlinks). And while you _can_ change the color of the comment — there are no other typographic controls.

#### 5. Entirely CSS Variable ready
Global styles and full site editing are opening the door for themes to be heavily powered by CSS variables. Blocks should be designed with that same mentality, which is exactly what I did here. I added simple CSS variables with fallbacks that are the default values. To further theme the comment, there’s no need to override any styles with classes, just write a few CSS variables.

== Installation ==
1. Upload the `markdown-comment-block` folder to your `/wp-content/plugins/` directory or alternatively upload the markdown-comment-block.zip file via the plugin page of WordPress by clicking 'Add New' and selecting the zip from your local computer.
2. Activate the plugin through the 'Plugins' menu in WordPress.
3. Search for the block within the Gutenberg block editor.

== Frequently Asked Questions ==
= Can the Markdown Comment block be used with my theme? =
Yes! If you're using Gutenberg (i.e. the block editor) on your site, you should have no issues with the block. It's relatively simple to modify the CSS variables to tweak the comment styling if you'd like — learn more [here](https://richtabor.com/markdown-comments/?utm_source=wp-org&utm_medium=markdown-comment-block&utm_campaign=readme-faq).

= Where can I send feedback or ideas? =
Please reach out via the official [plugin support forum](https://wordpress.org/support/plugin/markdown-comment-block).

= Who's Rich Tabor? =
As a WordPress entrepreneur, designer and developer all wrapped up in one, [@richard_tabor](http://twitter.com/richard_tabor) is recognized as one of the top leaders in this post-Gutenberg era of WordPress. His design chops have topped the 2018 Automattic Design Awards and led him to found CoBlocks – a top-notch set of page builder blocks and tools for Gutenberg, ThemeBeans – a premier WordPress theme shop and [Iceberg](https://useiceberg.com/?utm_source=wp-org&utm_medium=markdown-comment-block&utm_campaign=readme-faq) – a markdown editor for Gutenberg.

== Screenshots ==
1. Quickly resolve comments from the block toolbar.
1. Installable via the WordPress Block Directory.

== Changelog ==

= 0.1.9 =
* Set default control for text color

= 0.1.8 =
* Add block.json to registerBlockType

= 0.1.7 =
* WordPress 5.9 support
* Ensure text color is properly applied

= 0.1.6 =
* Resolve package error

= 0.1.5 =
* Improve styling to work with theme.json
* Add example theme.json file for themes to leverage

= 0.1.3 =
* Tweak block title
* Tweak styles

= 0.1.0 =
* Initial release
