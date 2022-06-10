document.addEventListener('DOMContentLoaded', function () {
    let client_id = '12qocm7wjlz52ow0qabcf3wa61elqm';  // developer id
    let game = "League%20of%20Legends";  // name of the game
    let limit = 20; // Maximum number of objects to return, sorted by number of viewers. Default: 25. Maximum: 100.

    let post = ""
    let resp = ""

    let request = new XMLHttpRequest();

    request.open('GET', 'https://api.twitch.tv/kraken/streams/?game=' + game + '&limit=' + limit, true);
    request.setRequestHeader('Client-ID', client_id)
    request.setRequestHeader('Accept', 'application/vnd.twitchtv.v5+json')

    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            resp = request.responseText;
        } else {
            alert("連線失敗!")
        }

        post = JSON.parse(resp)

        // 新創一個 tag
        function newTag(tag, class_name, text) {
            let div = document.createElement(tag)
            div.setAttribute('class', class_name)
            let content = document.createTextNode(text)
            div.appendChild(content)
            return div
        } 

        // 將新創的 tag 放到選擇的 tag 之下
        function append(selector, newTag) {
            let current = document.querySelectorAll(selector)[index]
            current.appendChild(newTag)
        } 


        for (index = 0; index < limit; index++) {
            let stremJson = post.streams[index]
            let liveLink = stremJson.channel.url
            let liveThumbLink = stremJson.preview.medium
            let viewers = stremJson.viewers
            
            let date = stremJson.channel.updated_at  //2018-10-08T14:50:40.170519Z
            let year = date.substring(0, 4)  //年
            let month = date.substring(5, 7)  //月
            let day = date.substring(8, 10)  //日
            date = year + '年 ' + month + '月 ' + day + '日'
            
            let logoLink = stremJson.channel.logo
            let status = stremJson.channel.status
            let displayname = stremJson.channel.display_name
            let gamename = stremJson.game

            let div_Wrapper = newTag('div', 'Wrapper', '')
            document.body.querySelector('.container').appendChild(div_Wrapper)

            let div_live = newTag('div', 'live', '')
            append('.Wrapper', div_live)

            let div_liveThumbWrapper = newTag('div', 'liveThumbWrapper', '')
            append('.live', div_liveThumbWrapper)

            let a_liveLink = newTag('a', 'liveLink', '')
            a_liveLink.setAttribute('href', liveLink)
            a_liveLink.setAttribute('target', '_blank')
            append('.liveThumbWrapper', a_liveLink)

            let img_liveThumb = newTag('img', 'liveThumb')
            img_liveThumb.setAttribute('src', liveThumbLink)
            img_liveThumb.setAttribute('alt', 'the live stream thumbnail')
            append('.liveLink', img_liveThumb)


            let div_viewerAndDate = newTag('div', 'viewerAndDate', '')
            append('.live', div_viewerAndDate)

            let div_views = newTag('div', 'viewers', viewers + ' 位觀眾')
            append('.viewerAndDate', div_views)

            let div_date = newTag('div', 'date', date)
            append('.viewerAndDate', div_date)

            let div_info = newTag('div', 'info', '')
            append('.Wrapper', div_info)

            let div_groupLogo = newTag('div', 'groupLogo', '')
            append('.info', div_groupLogo)

            let img_logo = newTag('img', 'logo', '')
            img_logo.setAttribute('src', logoLink)
            append('.groupLogo', img_logo)

            let div_info_right = newTag('div', 'info_right', '')
            append('.info', div_info_right)

            let div_status = newTag('div', 'status', status)
            append('.info_right', div_status)

            let div_displayname = newTag('div', 'displayname', displayname)
            append('.info_right', div_displayname)

            let div_gamename = newTag('div', 'gamename', gamename)
            append('.info_right', div_gamename)

        }

    }
    request.send()

})
