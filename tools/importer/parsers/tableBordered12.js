/* global WebImporter */
export default function parse(element, { document }) {
  const headerRow = ['Table (bordered, tableBordered12)'];

  // Extract content from the element
  const introTextDiv = element.querySelector(':scope > div');

  // Construct the table rows
  const cells = [
    headerRow,
    [introTextDiv]
  ];

  // Create the table block
  const block = WebImporter.DOMUtils.createTable(cells, document);

  // Replace the original element with the new block table
  element.replaceWith(block);
}