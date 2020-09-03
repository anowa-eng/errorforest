let formData = new FormData();           
formData.append("file", sortpicture.files[0]);
await fetch('/uploads', {method: "POST", body: formData});
