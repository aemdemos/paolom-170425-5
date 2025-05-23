/* global WebImporter */
export default function parse(element, { document }) {
  // Step 1: Define the header row as specified
  const headerRow = ['Hero (hero16)'];

  // Step 2: Extract relevant content from the input element dynamically
  // Extracting the logo image
  const logoImg = element.querySelector('.menu_logo img');
  let logoElement = null;
  if (logoImg) {
    logoElement = document.createElement('img');
    logoElement.src = logoImg.src;
    logoElement.alt = logoImg.alt;
  }

  // Extracting the main heading
  const headingAnchor = element.querySelector('.menu_link.active.Selected a');
  let headingElement = null;
  if (headingAnchor) {
    headingElement = document.createElement('h1');
    headingElement.textContent = headingAnchor.textContent;
  }

  // Extracting the call-to-action (language link)
  const languageLink = element.querySelector('.menu_lan');
  let actionElement = null;
  if (languageLink) {
    actionElement = document.createElement('a');
    actionElement.href = languageLink.href;
    actionElement.textContent = languageLink.textContent;
  }

  // Step 3: Assemble the table cells dynamically
  const cells = [
    headerRow,
    [
      [logoElement, headingElement, actionElement].filter(Boolean) // Filter out null values
    ],
  ];

  // Step 4: Create the block table
  const block = WebImporter.DOMUtils.createTable(cells, document);

  // Step 5: Replace the original element with the new block table
  element.replaceWith(block);
}