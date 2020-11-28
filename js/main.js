$(document).ready(function () {
    // back to top
    $(".backtop").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 1000);
    });
});

// Menu
document.querySelector('.btmenu').addEventListener('click', function () {
    document.querySelector('.nav-menu').classList.toggle('active');
    this.classList.toggle('clicked');
});






// https://www.cfdtraining.vn/api/danh-sach-khoa-hoc
// https://www.cfdtraining.vn/api/contact: POST - name, phone, email, title, content
// https://www.cfdtraining.vn/api/cap-nhat-thong-tin-ca-nhan: POST - name, phone, email, facebook
// https://www.cfdtraining.vn/api/dang-ky-khoa-hoc : POST - name, phone, email, facebook
// https://www.cfdtraining.vn/api/dang-nhap : POST - username, password
// https://www.cfdtraining.vn/api/hoc-vien-khoa-hoc: GET


// https://www.cfdtraining.vn/api/danh-sach-khoa-hoc
// Gửi request lấy danh sách khóa học, render ra giao diện

function khoahoc() {
    fetch('https://www.cfdtraining.vn/api/danh-sach-khoa-hoc')
        .then(res => res.json())
        .then(res => {
            let html_off = '';
            let html_on = '';

            for (let i in res) {
                let thubnail = JSON.parse((res[i].thubnail));
                let card = `<div class="col-md-4 item">
                <div class="wrap">
                    <a href="" class="cover">
                        <img src="https://www.cfdtraining.vn/${thubnail.link}" alt="">
                    </a>
                    <div class="info">
                        <a href="">${res[i].title}</a>
                        <p>${res[i].short_description}</p>
                    </div>
                    <div class="bottom">
                        <div class="teacher">
                            <div class="avt">
                                <img src="./img/avt.png" alt="">
                            </div>
                            <div class="name">Trần Nghĩa</div>
                        </div>
                        <a href="" class="more">Chi tiết</a>
                    </div>
                </div>
            </div>`;
               
                if (res[i].course_type == "offline") {
                    html_off += card;
                }
                else {
                    html_on += card;
                }
            }

            document.querySelector(".section-offline .list").innerHTML = html_off;
            document.querySelector(".section-online .list").innerHTML = html_on;
        })



}

khoahoc();

// https://www.cfdtraining.vn/api/contact: POST - name, phone, email, title, content
// Gửi contact lên server thông qua HTTP POST

function contact() {
    let name = 'phuc'
    let phone = '0912345678'
    let email = 'abc@gmail.com'
    let title = 'hop tac'
    let content = 'vdlaljbnjg'

    fetch('https://www.cfdtraining.vn/api/contact', {
        method : "POST",
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({
            name,
            phone,
            email,
            title,
            content
        })
    })
    .then(res => res.json())
    .then(res = {

    })
}

contact();


// https://www.cfdtraining.vn/api/cap-nhat-thong-tin-ca-nhan: POST - name, phone, email, facebook
// Cập nhật thông tin cá nhân (POST)

function update() {
    let name = "phuc"
    let phone = "0912345678"
    let email = "abc@gmail.com"
    let facebook = "vkmgbdlm"

    fetch('https://www.cfdtraining.vn/api/cap-nhat-thong-tin-ca-nhan', {
        method: "POST",
        headers : {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            name,
            phone,
            email,
            facebook
        })
    })

    .then(res => res.json())
    .then(res = {

    })
}

update();

// https://www.cfdtraining.vn/api/dang-ky-khoa-hoc : POST - name, phone, email, facebook
// Đăng ký khóa học (POST)

