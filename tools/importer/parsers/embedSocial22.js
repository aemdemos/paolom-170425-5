/* global WebImporter */
export default function parse(element, { document }) {
  // Extract links from the provided HTML structure
  const menuLinks = Array.from(element.querySelectorAll('a.menu_link[href]'));

  if (menuLinks.length === 0) {
    console.error('No links found within the element.');
    return;
  }

  // Deduplicate URLs
  const uniqueUrls = [...new Set(menuLinks.map(link => link.href))];

  // Primary table structure
  const cells = [
    ['Embed (embedSocial22)'],         // Header row
    [uniqueUrls.map(url => {          // Content row with individual elements per URL
      const linkWrapper = document.createElement('div'); // Wrap each link in a separate container
      const link = document.createElement('a');
      link.href = url;
      link.textContent = url;
      linkWrapper.appendChild(link);
      return linkWrapper;
    })]
  ];

  // Create the block table
  const block = WebImporter.DOMUtils.createTable(cells, document);

  // Replace the original element with the block table
  element.replaceWith(block);
}