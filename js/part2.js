(function(target){

  // Q001
  target.addEventListener('load', onPageLoaded);

  function onPageLoaded() {
      console.log('The page is fully loaded');

      const btnAdd = document.getElementById('btnAdd');
      btnAdd.addEventListener('click', onClickBtnAdd);

      const btnDownload = document.getElementById('btnDownload');
      btnDownload.addEventListener('click', onClickBtnDownload);
  }

  function onClickBtnAdd(){
      let newItem = document.querySelector('#txtNewItem');
      let newValue = newItem.value;
      if(newValue == ''){
          alert("Please enter value");
          return;
      }
      newItem.value = '';
      addNewBoxItem(newValue);
  }

  function onClickBtnRemove(event) {
      const boxItem = event.srcElement.closest('.item-box');
      boxItem.remove();
  }

  function addNewBoxItem(value) {
      let container = document.querySelector("#addedItems");
      
      let protoInnerElem = document.querySelector("#addedItems .proto .item-box")
          .cloneNode(true);
      
      protoInnerElem.setAttribute('data-value', value);
  
      let titleElem = protoInnerElem.querySelector('.lblText');
      titleElem.append(value);
  
      let btnRemoveElem = protoInnerElem.querySelector('.btnRemove');
      btnRemoveElem.addEventListener('click', onClickBtnRemove)
  
      container.append(protoInnerElem);
  }    
  function createFileAndDownload(fileName, content){
      var element = document.createElement('a');
      element.setAttribute('href', `data:text/plain;charset=utf-8,${encodeURIComponent(content)}`);
      element.setAttribute('download', fileName);
      element.style.display = 'none';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
  } 

  function onClickBtnDownload() {
    const itemLabels = document.querySelectorAll('.content-container>.item-box>.lblText');
    const data = [];
    itemLabels.forEach(itemLabel => data.push(itemLabel.textContent));    
    data.sort();

    let content = '';
    for (let i = 0; i < data.length; i++) {
      content += `${i + 1}. ${data[i]}\n`;
    }

    createFileAndDownload('LR7', content);
  }

})(this);