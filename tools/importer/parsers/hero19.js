/* global WebImporter */
export default function parse(element, { document }) {
  // Extract main elements from the HTML structure
  const title = element.querySelector('.col6 h2');
  const paragraph = element.querySelector('.col9 p');
  const image = element.querySelector('.col12 img');

  // Ensure all extracted elements exist, handling edge cases
  const headerRow = ['Hero (hero19)'];

  const contentCells = [];
  if (title) contentCells.push(title);
  if (paragraph) contentCells.push(paragraph);
  if (image) contentCells.push(image);

  const tableData = [headerRow, [contentCells]];

  // Create the table structure using WebImporter.DOMUtils.createTable
  const table = WebImporter.DOMUtils.createTable(tableData, document);

  // Replace original element with the newly created block table
  element.replaceWith(table);
}