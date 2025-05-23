/* global WebImporter */
export default function parse(element, { document }) {
  // Define the header row as specified in the example
  const headerRow = ['Hero (hero9)'];

  // Extract dynamic content from the provided element
  const title = element.querySelector(':scope > div.section_page > div > div.container_col > div.col6 > h2');
  const paragraph = element.querySelector(':scope > div.section_page > div > div.container_col > div.col9 > p');
  const image = element.querySelector(':scope > div.section_page > div > div.container_col > div.col12 > img');

  // Ensure that extracted elements exist
  const titleElement = title ? title : document.createElement('div');
  const paragraphElement = paragraph ? paragraph : document.createElement('div');
  const imageElement = image ? image : document.createElement('div');

  // Consolidate all content into a single cell
  const contentCell = document.createElement('div');
  contentCell.append(titleElement, paragraphElement, imageElement);

  // Create the block table using WebImporter.DOMUtils.createTable
  const block = WebImporter.DOMUtils.createTable([
    headerRow, // Header row with one column as specified
    [contentCell] // Content row with one column containing all content
  ], document);

  // Replace the original element with the new structure
  element.replaceWith(block);
}