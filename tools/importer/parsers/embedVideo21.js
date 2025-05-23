/* global WebImporter */
export default function parse(element, { document }) {
  // Define the header row for the table
  const headerRow = ['Embed (embedVideo21)'];

  // Extracting image and video URL from the element
  const image = element.querySelector('img');
  const videoLinkElement = element.querySelector('a[href]');

  // Validate and construct video link element
  const videoLink = videoLinkElement ? document.createElement('a') : null;
  if (videoLink && videoLinkElement) {
    videoLink.href = videoLinkElement.href;
    videoLink.textContent = videoLinkElement.href;
  }

  // Create the table rows dynamically based on content existence
  const rows = [
    headerRow,
    [
      image && videoLink ? [image, videoLink] : (image || videoLink) // Combine image and video link or handle single content
    ]
  ];

  // Generate the block table using WebImporter helper
  const block = WebImporter.DOMUtils.createTable(rows, document);

  // Replace the element with the generated block table
  element.replaceWith(block);
}