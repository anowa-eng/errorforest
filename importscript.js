async function saveFile() {
    let formData = new FormData();           
    formData.append("file", file.files[0]);
    await fetch('addFile.do', {method: "POST", body: formData});    
    alert("Data Uploaded: ");
}
