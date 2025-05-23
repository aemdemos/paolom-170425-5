/* global WebImporter */
export default function parse(element, { document }) {
  // Step 1: Extract the header row matching the example
  const headerRow = ['Columns (columns15)'];

  // Step 2: Extract footer links dynamically
  const footerLinks = Array.from(
    element.querySelectorAll(':scope .footer_nav_container .menu_link a')
  );
  const footerLinksCell = footerLinks.map(link => {
    const a = document.createElement('a');
    a.href = link.href;
    a.textContent = link.textContent;
    return a;
  });

  // Step 3: Extract social icons dynamically
  const socialLinks = Array.from(
    element.querySelectorAll(':scope .social_link')
  );
  const socialLinkCell = socialLinks.map(link => {
    const a = document.createElement('a');
    a.href = link.href;
    a.textContent = link.className;
    return a;
  });

  // Step 4: Extract copyright dynamically
  const rightsElement = element.querySelector(':scope .copyright');

  // Step 5: Extract extra links dynamically
  const extraLinks = Array.from(
    element.querySelectorAll(':scope .footer_menu a')
  );
  const extraLinksCell = extraLinks.map(link => {
    const a = document.createElement('a');
    a.href = link.href;
    a.textContent = link.textContent;
    return a;
  });

  // Step 6: Construct the table cells array using extracted elements
  const cells = [
    headerRow, // Header Row
    [footerLinksCell, socialLinkCell], // First content row
    [rightsElement, extraLinksCell] // Second content row
  ];

  // Step 7: Create the table using WebImporter.DOMUtils.createTable()
  const blockTable = WebImporter.DOMUtils.createTable(cells, document);

  // Step 8: Replace the original element with the new block table
  element.replaceWith(blockTable);
}