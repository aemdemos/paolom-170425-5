/* global WebImporter */
export default function parse(element, { document }) {
  // Extract content dynamically from the element
  const headerRow = ['Columns (columns10)'];

  // Extract relevant content from the element dynamically
  const columns = Array.from(element.querySelectorAll(':scope > div.page_hero_image')).map((column) => {
    const imageStyle = column.querySelector(':scope > div.page_hero_image_middle')?.getAttribute('style');
    const imageUrlMatch = imageStyle?.match(/url\(['"]?(.*?)['"]?\)/);
    const imageUrl = imageUrlMatch ? imageUrlMatch[1] : null;

    if (imageUrl) {
      const imgElement = document.createElement('img');
      imgElement.src = imageUrl;
      return imgElement;
    }

    return document.createTextNode('');
  });

  // Build cells for the new table
  const cells = [
    headerRow,
    columns
  ];

  // Create table block
  const block = WebImporter.DOMUtils.createTable(cells, document);

  element.replaceWith(block);
}