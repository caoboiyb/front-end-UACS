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
    var htmlResult = `<select name="nangkhieu[]">`;
    for (let i = 0; i < response.nangkhieu.length; i++){
        htmlResult += `<option value=${response.nangkhieu[i].msMH}>${response.nangkhieu[i].tenMH}</option>`
    }
    htmlResult += `</select>
                   <input type="text" name="diemNK[]">
                   <br>`
    $(htmlResult).appendTo(".nangkhieu")
}

const _showResult = response => {
    var htmlResult = `<table id="result" class="display" cellspacing="0" width="100%">
                         <thead>
                                <tr>
                                    <th>Khối xét tuyển</th>
                                    <th>Điểm</th>
                                 </tr>
                         </thead>
                         <tbody>`
    for (let i = 0; i < response.result.length; i++){
        htmlResult += `<tr>
                            <td>${response.result[i].khoi}</td>
                            <td>${response.result[i].diemXetTuyen}</td>
                       </tr>`
    }
    htmlResult += `</tbody></table>`

    $(".modal-content").html(htmlResult)
    $("#result").DataTable();
}

$(document).ready(
    $.ajax({
        url: "../json-mock/tinh.json",
        type: "GET",
        success: (response) => {
            _getTinh(response)
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

$("#themNK").on("click", () => {
    $.ajax({
    url: "../json-mock/nang-khieu.json",
    type: "GET",
    dataType: "JSON",
    success: response => {
            _getNangKhieu(response)
        }
    })
})

$('#formTinhDiem').ajaxForm({
        url: "../json-mock/result.json",
        type: "POST",
        beforeSubmit: showRequest,
        success: response => {
            _showResult(response)
        }
    })

function showRequest(formData, jqForm, options) {
    var queryString = $.param(formData);

    alert(queryString);

    return true;
}