var install = document.getElementById("install");

fetchFile("../pixlus.zip");

function fetchFile(url) {
    alert("Running...")
    fetch(url).then(res => res.blob()).then(file => {
        let tempUrl = URL.createObjectURL(file);
        const aTag = document.createElement("a");
        aTag.href = tempUrl;
        aTag.download = url.replace(/^.*[\\\/]/, '');
        document.body.appendChild(aTag);
        aTag.click();
        URL.revokeObjectURL(tempUrl);
        aTag.remove();
        alert("Ran with no issues.")
    }).catch(() => {
        alert("Failed to download file!");
    });
}