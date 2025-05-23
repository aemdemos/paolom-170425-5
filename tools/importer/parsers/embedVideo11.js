/* global WebImporter */
export default function parse(element, { document }) {
  const headerRow = ['Embed (embedVideo11)'];

  // Extract the URL dynamically
  const linkElement = element.querySelector('.social_link_linkedin');
  const externalLink = linkElement && linkElement.href ? linkElement.href : '';

  // Validate extracted URL and ensure format matches requirements
  const cells = [
    headerRow,
    [externalLink ? document.createTextNode(externalLink) : '']
  ];

  // Create the block table
  const block = WebImporter.DOMUtils.createTable(cells, document);

  // Replace the original element with the new block
  element.replaceWith(block);
}