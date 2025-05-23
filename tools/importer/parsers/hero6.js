/* global WebImporter */
export default function parse(element, { document }) {
  // Ensure dynamic content extraction and reference existing elements
  const contentContainer = element.querySelector(':scope > div.inside > div.container_col');
  const heading = contentContainer.querySelector('.col.col12 > h2');
  const paragraph = contentContainer.querySelector('.col.col12.col_right > p');

  // Handle edge cases for missing elements
  const headingContent = heading ? heading : document.createElement('div');
  const paragraphContent = paragraph ? paragraph : document.createElement('div');

  // Create the table structure
  const headerRow = ['Hero (hero6)']; // Block name matches example
  const contentRow = [
    [headingContent, paragraphContent] // Combine heading and paragraph content into a single cell
  ];

  // Create the table
  const table = WebImporter.DOMUtils.createTable([headerRow, contentRow], document);

  // Replace the original element with the new table block
  element.replaceWith(table);
}