const newItemInput = document.querySelector('.new-item-input');
const itemList = document.querySelector('.item-list');
const itemExample = document.querySelector('.item-example');

document.querySelector('.new-item-add').addEventListener('click', () => {
  let label = newItemInput.value;
  if (label == '') return alert("Please enter value");
  newItemInput.value = '';

  let element = itemExample.cloneNode(true);
  element.classList.remove('item-example');
  element.classList.add('item');
  element.querySelector('.item-label').textContent = label;

  itemList.appendChild(element);
  element.classList.remove('hidden');

  element.querySelector('.item-delete').addEventListener('click', () => {
    itemList.removeChild(element);
  });
});

document.querySelector('.download-button').addEventListener('click', () => {
  const itemLabels = document.querySelectorAll('.item>.item-label');
  const data = [];
  itemLabels.forEach(itemLabel => data.push(itemLabel.textContent));    
  data.sort();

  let content = '';
  for (let i = 0; i < data.length; i++) {
    content += `${i + 1}. ${data[i]}\n`;
  }

  createFileAndDownload('LR7', content);
});

function createFileAndDownload(fileName, content){
  const element = document.createElement('a');
  element.setAttribute('href', `data:text/plain;charset=utf-8,${encodeURIComponent(content)}`);
  element.setAttribute('download', fileName);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}