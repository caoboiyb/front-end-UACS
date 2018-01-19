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

const _getNangKhieu = (response) => {
    var htmlResult = `<option>unselected</option>`;
    for (let i = 0; i < response.nangkhieu.length; i++){
        htmlResult += `<option value=${response.nangkhieu[i].msMH}>${response.nangkhieu[i].tenMH}</option>`
    }
    $(".nangkhieu").html(htmlResult)
}

$(document).ready(
    $.ajax({
        url: "../json-mock/tinh.json",
        type: "GET",
        success: (response) => {
            _getTinh(response)
        }
    }),
    $.ajax({
        url: "../json-mock/nang-khieu.json",
        type: "GET",
        dataType: "JSON",
        success: response => {
            _getNangKhieu(response)
        }
    })
)

$("#tinh").on("change", () => {
    $.ajax({
        url: "../json-mock/quan-huyen.json",
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
        url: "../json-mock/truong.json",
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

$('#target').ajaxForm({
    url: 'http://localhost:3000/auth/login',
    // dataType identifies the expected content type of the server response
    dataType: 'json',
    method: 'POST',
    // success identifies the function to invoke when the server response
    // has been received
    success: response => {
        console.log("Submit")
    }
  });