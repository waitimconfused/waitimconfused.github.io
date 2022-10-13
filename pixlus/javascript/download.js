var download = document.getElementById("download");

var versionRequest = window.location.href;
console.log(versionRequest);
    var versionRequest = JSON.parse(
        versionRequest.replace(
            "https://"+window.location.hostname+"/pixlus/download?version=",
            ""
        )
    );
    //     7401711273
    console.log(versionRequest);
    var versionRequest = versionRequest / 1000;
    //     7401711.273
    console.log(versionRequest);
    var versionRequest = Math.floor(versionRequest);
    //     7401711
    console.log(versionRequest);
    var versionRequest = versionRequest / 100;
    //     74017.11
    console.log(versionRequest);
    var versionRequest = versionRequest - Math.floor(versionRequest);
    //     0.11
    console.log(versionRequest);
    var versionRequest = versionRequest *10;
    //     1.1
    console.log(versionRequest);
    var versionRequest = JSON.stringify(versionRequest);
    //     "1.1"
    console.log(versionRequest);

download.onclick = function(){
    fetchFile("../zipped_up_Pixlus/pixlus-"+versionRequest+".zip");
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

var orange = window.location.href;
orange.replace("https://"+window.location.hostname+"/pixlus/download?version=","");