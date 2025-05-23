/* global WebImporter */
export default function parse(element, { document }) {
  // Extract relevant content
  const footerNavContainer = element.querySelector(":scope > .social_container > .footer_nav_container");
  const linksContainer = element.querySelector(":scope > .footer_menu > p");

  // Create the header row
  const headerRow = ["Hero (hero7)"];

  // Create the content row
  const contentRow = [];

  if (footerNavContainer) {
    contentRow.push(footerNavContainer);
  }

  if (linksContainer) {
    contentRow.push(linksContainer);
  }

  // Create the table structure
  const cells = [
    headerRow,
    [contentRow],
  ];

  // Create the block table
  const block = WebImporter.DOMUtils.createTable(cells, document);

  // Replace the original element with the new block table
  element.replaceWith(block);
}