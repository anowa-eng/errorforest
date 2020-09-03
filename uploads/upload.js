let formData = new FormData();  
upload = [];
upload.push(document.querySelector('body > div > div.editor > table > tbody > tr:nth-child(3) > td > button > form > input:nth-child(1)'));
formData.append("file", upload[0].files[0]);
fetch('/uploads', {method: "GET", body: formData})
  .then((response) => {
    alert(JSON.parse(response))
  });
