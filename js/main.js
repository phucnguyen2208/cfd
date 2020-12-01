
$(document).ready(function () {
    // back to top
    $(".backtop").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 1000);
    });

    // Accordion
    $('.accordion .title').click(function () {
        $('.accordion .title').removeClass('active');
        $(this).addClass('active');
    });


    // show menu
    $('.btmenu').on('click', function (e) {
        if ($('.nav-menu').hasClass('show')) {
            $('.nav-menu').removeClass('show');
            $('.overlay').removeClass('showmhd');
        } else {
            $('.nav-menu').addClass('show');
            $('.overlay').addClass('showmhd');
        }
        e.stopPropagation();
    });
});


// Menu
document.querySelector('.btmenu').addEventListener('click', function () {
    this.classList.toggle('clicked');
});


//tab 

let tabTitle = document.querySelectorAll('.tab-title a');
tabTitle.forEach((ele, index) => {
    ele.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('.tab-title .active').classList.remove('active');
        ele.classList.add('active');

        let content = document.querySelectorAll('.tab-content > *')[index];
        let c = document.querySelector('.tab-content .active');
        c.classList.remove('active');
        c.style.display = 'none';
        content.classList.add('active');
        content.style.display = 'block';
    })
});



// Select
let select_styled = document.querySelector('.head');
let select_p = document.querySelector('.text-p');
let select_option = document.querySelector('.sub-a');
if (select_styled) {
    select_styled.addEventListener('click', function (e) {
        e.stopPropagation();
        select_option.classList.toggle('show');
    });
}
if (select_option) {
    select_option.querySelectorAll('a').forEach(e => {
        e.addEventListener('click', function (e) {
            e.preventDefault();
            let text = this.innerHTML;
            select_p.innerHTML = text;
        });
    });
}
let body = document.body;
body.addEventListener('click', function () {
    if (select_option) {
        select_option.classList.remove('show');
    }
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
        method: "POST",
        headers: {
            'Content-type': 'application/json'
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
        headers: {
            'Content-Type': 'application/json'
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

function register() {
    let name = "phuc"
    let phone = "0912345678"
    let email = "abc@gmail"
    let facebook = "url:"

    fetch('https://www.cfdtraining.vn/api/dang-ky-khoa-hoc', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
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

register();



// https://www.cfdtraining.vn/api/dang-nhap : POST - username, password
function dangnhap() {
    let username = 'Nguyen Dinh Phuc'
    let password = '11111111'

    fetch('https://www.cfdtraining.vn/api/dang-nhap', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            password
        })
    })
        .then(res => res.json())
        .then(res = {

        })
}

dangnhap();

