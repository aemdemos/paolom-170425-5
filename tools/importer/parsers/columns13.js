/* global WebImporter */
export default function parse(element, { document }) {
  // Extract immediate children elements
  const children = Array.from(element.querySelectorAll(':scope > *'));

  // Combine content into a single cell to preserve semantic grouping
  const groupedContent = document.createElement('div');
  children.forEach(child => groupedContent.appendChild(child));

  // Define header row exactly as specified in the example
  const headerRow = ['Columns (columns13)'];

  // Create content row with combined content
  const contentRow = [groupedContent];

  // Create cells array
  const cells = [
    headerRow,
    contentRow,
  ];

  // Create the block table using the helper function
  const blockTable = WebImporter.DOMUtils.createTable(cells, document);

  // Replace original element with the new block table
  element.replaceWith(blockTable);
}