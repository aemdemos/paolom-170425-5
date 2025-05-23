/* global WebImporter */
export default function parse(element, { document }) {
  const headerRow = ['Hero (hero20)'];

  // Extract heading
  const heading = element.querySelector(':scope > div.section_page div.container_col div.col6 h2');

  // Extract descriptive paragraph
  const paragraph = element.querySelector(':scope > div.section_page div.container_col div.col9 p');

  // Ensure elements are valid
  const contentRow = [];
  if (heading) contentRow.push(heading);
  if (paragraph) contentRow.push(paragraph);

  const cells = [
    headerRow, // Header row
    [contentRow], // Content row
  ];

  const blockTable = WebImporter.DOMUtils.createTable(cells, document);

  element.replaceWith(blockTable);
}