/* global WebImporter */
export default function parse(element, { document }) {
  // Step 1: Extract any relevant information dynamically from the element
  const iframe = element.querySelector('iframe');
  const link = document.createElement('a');

  if (iframe && iframe.src) {
    link.href = iframe.src;
    link.textContent = iframe.src;
  } else {
    throw new Error('Missing iframe or src attribute in element');
  }

  // Step 2: Construct the table structure based on the example
  const headerRow = ['Embed (embedSocial8)']; // Matches example header
  const tableData = [
    headerRow,
    [link],
  ];

  // Step 3: Create the block table using WebImporter.DOMUtils.createTable
  const blockTable = WebImporter.DOMUtils.createTable(tableData, document);

  // Step 4: Replace the original element with the newly created block table
  element.replaceWith(blockTable);
}