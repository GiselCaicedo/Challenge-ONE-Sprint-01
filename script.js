function copyToClipboard() {
  const outputText = document.getElementById('outputText');
  const textRange = document.createRange();
  textRange.selectNode(outputText);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(textRange);
  document.execCommand('copy');
  window.getSelection().removeAllRanges();
  alert('El contenido se ha copiado al portapapeles.');
}

function encryptText(text) {
  let encryptedText = '';
  for (let i = 0; i < text.length; i++) {
    let charCode = text.charCodeAt(i);
    charCode = charCode + 1;
    encryptedText += String.fromCharCode(charCode);
  }
  return encryptedText;
}

function decryptText(encryptedText) {
  let decryptedText = '';
  for (let i = 0; i < encryptedText.length; i++) {
    let charCode = encryptedText.charCodeAt(i);
    charCode = charCode - 1;
    decryptedText += String.fromCharCode(charCode);
  }
  return decryptedText;
}

function encrypt() {
  const inputText = document.getElementById('inputText').value;
  const encryptedText = encryptText(inputText);
  document.getElementById('outputText').textContent = encryptedText;
}

function decrypt() {
  const inputText = document.getElementById('inputText').value;
  const decryptedText = decryptText(inputText);
  document.getElementById('outputText').textContent = decryptedText;
}
