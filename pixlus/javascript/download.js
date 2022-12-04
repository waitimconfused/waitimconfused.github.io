
var versionRequest = window.location.hostname;
var versionRequest = versionRequest.replace(
        "https://"+versionRequest+"pixlus/download?version=",
        ""
);
//     "7401711273"
var versionRequest = Math.floor(
    (
        (
            (
                Math.floor(
                    (
                        JSON.parse(
                            versionRequest
                        ) / 1000
                    )
                ) / 100
            ) - Math.floor(
                JSON.parse(
                    versionRequest
                ) / 100000
            )
        ) * 100
    )
) / 10;
//     "1.1"
console.log(versionRequest);
fetchFile('zipped_up_Pixlus/pixlus-1.1.zip');

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
        alert("Failed to download file.");
    });
}