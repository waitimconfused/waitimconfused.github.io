var download = document.getElementById("download");

let latestVersion = 1.1;

var versionRequest = window.location.hostname;
var versionRequest = JSON.parse(
    versionRequest.replace(
        "https://"+versionRequest+"pixlus/download?version=",
        ""
    )
);
if(versionRequest === 'auto'){
    var versionRequest = latestVersion;
}
//     "1.1"
console.log(versionRequest);

fetchFile("../zipped_up_Pixlus/pixlus-"+versionRequest+".zip");

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