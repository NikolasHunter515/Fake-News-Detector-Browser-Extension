export function getPageContent() {
  // This function is executed within the context of the web page.
  // It returns the text content of the entire body of the document.
  return document.body.innerText;
}