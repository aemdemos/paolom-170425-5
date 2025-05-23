/* global WebImporter */
export default function parse(element, { document }) {
  // Extract all links from the element
  const links = Array.from(element.querySelectorAll('a[href]'));

  // Create the header row dynamically
  const headerRow = ['Embed (embedSocial18)'];

  // Collect URLs in the content row
  const contentRow = links.map(link => {
    const url = link.getAttribute('href');
    const anchor = document.createElement('a');
    anchor.setAttribute('href', url);
    anchor.textContent = url;
    return anchor;
  });

  // Handle edge case: If no links are present, content row should contain a placeholder
  const finalContentRow = contentRow.length > 0 ? contentRow : ['No links available'];

  // Create table structure
  const cells = [
    headerRow, // Header row
    [finalContentRow] // Content row
  ];

  // Create the block table
  const block = WebImporter.DOMUtils.createTable(cells, document);

  // Replace the element with the new block table
  element.replaceWith(block);
}