var download = document.getElementById("download");

download.onclick = function(){
    var versionRequest = window.location;
    versionRequest = versionRequest.replace("https://dev-384.github.io/pixlus/download?version=","");
    console.log(versionRequest);
    fetchFile("../pixlus"+".zip");
}

function fetchFile(url) {
    fetch(url).then(res => res.blob()).then(file => {
        let tempUrl = URL.createObjectURL(file);
        const aTag = document.createElement("a");
        aTag.href = tempUrl;
        aTag.download = url.replace(/^.*[\\\/]/, '');
        document.body.appendChild(aTag);
        aTag.click();
        URL.revokeObjectURL(tempUrl);
        aTag.remove();
    }).catch(() => {
        alert("Failed to download file!");
    });
}