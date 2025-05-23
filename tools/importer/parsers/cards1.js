/* global WebImporter */
export default function parse(element, { document }) {
  const headerRow = ['Cards (cards1)'];

  const cards = Array.from(element.querySelectorAll(':scope > div')).map(card => {
    const image = card.querySelector('img');
    const title = card.querySelector('h2');
    const description = card.querySelector('p');

    const imageElement = image ? image : '';
    const contentElements = [];

    if (title) {
      const titleElement = document.createElement('strong');
      titleElement.textContent = title.textContent;
      contentElements.push(titleElement);
    }

    if (description) {
      contentElements.push(document.createTextNode(description.textContent));
    }

    return [imageElement, contentElements];
  });

  const cells = [headerRow, ...cards];

  const block = WebImporter.DOMUtils.createTable(cells, document);

  element.replaceWith(block);
}