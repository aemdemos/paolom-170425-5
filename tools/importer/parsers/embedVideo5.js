/* global WebImporter */
export default function parse(element, { document }) {
  // Extract relevant URL from the footer element
  const linkElement = element.querySelector('.social_link_linkedin');
  const url = linkElement ? linkElement.href : '';

  // Ensure we dynamically extract relevant text content
  const copyrightText = element.querySelector('.copyright')?.textContent.trim() || '';

  // Create the header row
  const headerRow = ['Embed (embedVideo5)'];

  // Create the content row with dynamic content
  const contentRow = [
    url ? document.createTextNode(url) : document.createTextNode('No URL Found')
  ];

  // Create the table
  const cells = [
    headerRow,
    contentRow
  ];

  const blockTable = WebImporter.DOMUtils.createTable(cells, document);

  // Replace the original element
  element.replaceWith(blockTable);
}