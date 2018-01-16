const _getTinh = (response) => {
    var htmlResult = `<option>unselected</option>`;
    for (let i = 0; i < response.tinh.length; i++) {
        htmlResult += ` <option value=${response.tinh[i].msTinh}>${response.tinh[i].tenTinh}</option>`
    }
    $("#tinh").html(htmlResult)
}

const _getQuanHuyen = (response) => {
    var htmlResult = `<option>unselected</option>`;
    for (let i = 0; i < response.quanHuyen.length; i++) {
        htmlResult += `<option value=${response.quanHuyen[i].msHuyen}>${response.quanHuyen[i].tenHuyen}</option>`
    }
    $("#quan-huyen").html(htmlResult)
}

const _getSchool = (response) => {
    var htmlResult = `<option>unselected</option>`;
    for (let i = 0; i < response.truong.length; i++){
        htmlResult += `<option value=${response.truong[i].msTruong}>${response.truong[i].tenTruong}</option>`
    }
    $("#truong").html(htmlResult)
}

$(document).ready(
    $.ajax({
        url: "./json-mock/tinh.json",
        type: "GET",
        success: (response) => {
            _getTinh(response)
        }
    })
)

$("#tinh").on("change", () => {
    $.ajax({
        url: "./json-mock/quan-huyen.json",
        type: "GET",
        data: {
            msTinh: document.getElementById("tinh").value
        },
        success: (response) => {
            _getQuanHuyen(response)
        }
    })
})

$("#quan-huyen").on("change", () => {
    $.ajax({
        type: "GET",
        url: "./json-mock/truong.json",
        data: {
            msTinh: document.getElementById("tinh").value,
            msHuyen: document.getElementById("quan-huyen").value
        },
        dataType: "JSON",
        success: (response) => {
            var htmlResult = "";
            for (let i = 0; i < response.truong.length; i++){
                htmlResult += `<option value=${response.truong[i].msTruong}>${response.truong[i].tenTruong}</option>`
            }
            $("#truong").html(htmlResult)
        }
    });
})

