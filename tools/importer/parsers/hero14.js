/* global WebImporter */
export default function parse(element, { document }) {
  const headerRow = ['Hero (hero14)'];

  // Extract the relevant content
  const content = [];

  // Extract heading
  const heading = element.querySelector('span, p');
  if (heading) {
    const headingElement = document.createElement('h1');
    headingElement.innerHTML = heading.innerHTML;
    content.push(headingElement);
  }

  // Extract call to action link
  const ctaLink = element.querySelector('a');
  if (ctaLink) {
    const linkElement = document.createElement('a');
    linkElement.href = ctaLink.href;
    linkElement.innerHTML = ctaLink.innerHTML;
    content.push(linkElement);
  }

  // Combine the extracted elements into rows
  const cells = [
    headerRow,
    [content]
  ];

  // Create the table using WebImporter.DOMUtils.createTable()
  const tableBlock = WebImporter.DOMUtils.createTable(cells, document);

  // Replace the original element
  element.replaceWith(tableBlock);
}