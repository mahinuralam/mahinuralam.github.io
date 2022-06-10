document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.form__submit').addEventListener('click', function (e) {

        const email = document.querySelector('#email')
        const nickname = document.querySelector('#nickname')
        const job = document.querySelector('#job')
        const experience = document.querySelector('#experience')
        const othercomments = document.querySelector('#othercomments')

        // 檢查使用者是否有輸入內容，如果沒有填入內容就將底色改成紅色，並提示使用者"這是必填問題"
        function show_warming(class_name) {
            if (class_name.value === '') {
                class_name.parentNode.style.background = 'rgb(255, 235, 238)'
                class_name.parentNode.children[3].innerHTML = '這是必填問題'
                e.preventDefault()
            }
        }

        show_warming(email)
        show_warming(nickname)
        show_warming(job)
        show_warming(experience)

        // 檢查使用者是否有圈選 radio 選項
        const radiocheck = document.getElementById('radioSet')
        const radio__input = radiocheck.querySelectorAll('.radio__input')
        let type = ''

        for (var i = 0; i < radio__input.length; i++) {
            if (radio__input[i].checked) {
                type = radio__input[i].value
            }
        }

        if (type === '') {
            radiocheck.parentNode.style.background = 'rgb(255, 235, 238)'
            radiocheck.parentNode.children[3].innerHTML = '這是必填問題'
            e.preventDefault()
        }
       
        // 在字串尾端加上 '\n' 就可以讓 alert 的訊息換行
        alert(
            '電子郵件地址 : '+ email.value + '\n' + 
            '暱稱 : '+ nickname.value+'\n' +
            '報名類型 : '+ type+'\n' +
            '現在的職業 : '+ job.value+'\n' +
            '是否有程式相關背景: '+ experience.value+'\n' +
            '其他 : '+ othercomments.value
        )

    })
})


// 以 function show_warming() 改寫之前
// 檢查使用者是否有輸入內容，如果沒有填入內容就將底色改成紅色，並提示使用者"這是必填問題"
    // if (email.value === ''){
    //     email.parentNode.style.background = 'rgb(255, 235, 238)'
    //     email.parentNode.children[3].innerHTML = '這是必填問題'
    //     e.preventDefault()
    // }
    // if (nickname.value === ''){
    //     nickname.parentNode.style.background = 'rgb(255, 235, 238)'
    //     nickname.parentNode.children[3].innerHTML = '這是必填問題'
    //     e.preventDefault()
    // }
    // if (job.value === ''){
    //     job.parentNode.style.background = 'rgb(255, 235, 238)'
    //     job.parentNode.children[3].innerHTML = '這是必填問題'
    //     e.preventDefault()
    // }
    // if (experience.value === ''){
    //     experience.parentNode.style.background = 'rgb(255, 235, 238)'
    //     experience.parentNode.children[3].innerHTML = '這是必填問題'
    //     e.preventDefault()
    // }