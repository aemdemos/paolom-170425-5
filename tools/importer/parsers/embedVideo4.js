/* global WebImporter */
export default function parse(element, { document }) {
  // Create the header row for the block table
  const headerRow = ['Embed (embedVideo4)'];

  // Extract relevant elements from the provided HTML
  const footerMenu = element.querySelector(':scope > div.footer_menu');
  const links = footerMenu?.querySelectorAll('a[href]');

  // Handle edge case: If no links are found, return without processing
  if (!links || links.length === 0) {
    console.warn('No links found in footer menu.');
    return;
  }

  // Create a content row for each link, ensuring semantic clarity and proper structuring
  const contentRows = Array.from(links).map(link => {
    const linkElement = document.createElement('a');
    linkElement.href = link.href;
    linkElement.textContent = link.href;
    return [linkElement];
  });

  // Combine header and content rows into a single table
  const cells = [headerRow, ...contentRows];

  // Generate the block table
  const blockTable = WebImporter.DOMUtils.createTable(cells, document);

  // Replace the original element with the new block table
  element.replaceWith(blockTable);
}