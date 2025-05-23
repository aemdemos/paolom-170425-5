/* global WebImporter */
export default function parse(element, { document }) {
  // Define the header row exactly matching the example.
  const headerRow = ['Embed (embedVideo17)'];

  // Extract the paragraph content dynamically.
  const contentParagraph = element.querySelector(':scope > div > div > div > div.col_right > p');

  if (!contentParagraph) {
    console.error('Missing paragraph content in the provided element.');
    return;
  }

  // Ensure all variable references are consistent and references existing elements.
  const rows = [headerRow, [contentParagraph]];

  // Create the block table using WebImporter.DOMUtils.createTable.
  const block = WebImporter.DOMUtils.createTable(rows, document);

  // Replace the original element with the new block table.
  element.replaceWith(block);
}