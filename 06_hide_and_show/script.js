document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.buttonwrapper').addEventListener('click', function (e) {
        let qt = q('.text')

        if (e.target.id === 'show') {
            // document.querySelector('.text').style.visibility = 'visible';
            // document.querySelector('.text').style.display= 'block';
            q('.text').show()
        }
        if (e.target.id === 'hide') {
            // document.querySelector('.text').style.visibility = 'hidden';
            // document.querySelector('.text').style.display= 'none';
            q('.text').hide()
        }

        // 寫法一：
        function q(selector) {
            let target = document.querySelector(selector)
            return {
                show: () => { target.style.visibility = 'visible' },
                hide: () => { target.style.visibility = 'hidden' }
            }
        }

        // 寫法二：
        // function q(selector) {
        //     let target = document.querySelector(selector)
        //     return {
        //         show: function () {
        //             target.style.visibility = 'visible'
        //         },
        //         hide: function () {
        //             target.style.visibility = 'hidden'
        //         }
        //     }
        // }
    })
})