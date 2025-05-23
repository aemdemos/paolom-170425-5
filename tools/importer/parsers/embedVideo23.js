/* global WebImporter */
export default function parse(element, { document }) {
    // Define the header for the new block table
    const headerRow = ['Embed (embedVideo23)'];

    // Extract potential images and external links from the element
    const images = element.querySelectorAll('img');
    const links = [...element.querySelectorAll('a')].filter(link => link.href.startsWith('http')); // Filter only external links

    // Construct the cells for the block table
    const contentCell = [];

    // Append images if they exist
    if (images.length > 0) {
        contentCell.push(...images);
    }

    // Append links if they exist
    links.forEach(link => {
        const anchor = document.createElement('a');
        anchor.href = link.href;
        anchor.textContent = link.href;
        contentCell.push(anchor);
    });

    const cells = [
        headerRow,
        [contentCell.length > 0 ? contentCell : ''], // Ensure at least an empty string if there's no content
    ];

    const block = WebImporter.DOMUtils.createTable(cells, document);

    element.replaceWith(block);
}