fetch('https://api.gmit.vip/Api/UserInfo').then(data=>data.json()).then(data=>{
    let html = '<style>.visitor_location{color:#cb4c46;font-weight:bold;}.visitor_ip{color:#2d80c2;font-weight:bold;}</style>'
    html += '<div class="visitor">'
    html += '欢迎来自 ' + '<span class="visitor_location">' + data.data.location + '</span>' + ' 的小伙伴！'
    html += '</br>'
    html += '访问IP：' + '<span class="visitor_ip">' + data.data.ip + '</span>'
    html += '</br>'
    html += '浏览器版本：' + '<span class="visitor_browser">' + data.data.browser + '</span>'
    html += '</br>'
    html += '<a href="https://clustrmaps.com/site/1btb1"  title="Visit tracker"><img src="//www.clustrmaps.com/map_v2.png?d=N1VXDqTyLq0kp9__Z4KG76Eh0ZLjI-0Pgqt8Nk_r7AY&cl=ffffff" /></a>'
    html += '</div>'
    document.getElementById('visitor-container').innerHTML = html
}).catch(function(error) {
    console.log(error);
});