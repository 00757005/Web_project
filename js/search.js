var songs = [
    { 
        "name": "平凡之路", 
        "singer": "朴樹",
        "progression": [6,4,1,5],
        "url": "https://www.youtube.com/embed/NjTT5_RSkw4"
    },
    {
        "name": "光年之外", 
        "singer": "鄧紫棋",
        "progression": [6,4,1,5],
        "url": "https://www.youtube.com/embed/T4SimnaiktU"
    },
    {
        "name": "接不接受", 
        "singer": "河仁傑",
        "progression": [4,5,6,6],
        "url": "https://www.youtube.com/embed/C9Nfp4pnXmQ"
    },
    {
        "name": "Payphone", 
        "singer": "Maroon 5",
        "progression": [4,1,6,5],
        "url": "https://www.youtube.com/embed/KRaWnd3LJfs"
    },
    {
        "name": "Galway girl", 
        "singer": "Ed Sheeran",
        "progression": [4,1,5,6],
        "url": "https://www.youtube.com/embed/87gWaABqGYs"
    },
    {
        "name": "擁抱", 
        "singer": "五月天",
        "progression": [4,3,2,1],
        "url": "https://www.youtube.com/embed/lvDa3r1pNuE"
    },
    {
        "name": "說好的幸福呢", 
        "singer": "周杰倫",
        "progression": [4,5,3,6],
        "url":"https://www.youtube.com/embed/mLFhTFiX0uM"
    },
    {
        "name": "最長的電影", 
        "singer": "周杰倫",
        "progression": [4,5,3,6],
        "url": "https://www.youtube.com/embed/2zxc27bvrO8"
    },
    {
        "name": "Closer", 
        "singer": "The Chainsmokers",
        "progression": [4,5,6,5],
        "url": "https://www.youtube.com/embed/PT2_F-1esPk"
    },
    {
        "name": "Something just like this", 
        "singer": "The Chainsmokers & Coldplay",
        "progression": [4,5,6,5],
        "url": "https://www.youtube.com/embed/FM7MFYoylVs"
    },
    {
        "name": "燈光", 
        "singer": "謝震廷",
        "progression": [2,5,1,6],
        "url": "https://www.youtube.com/embed/upUjlErMmO4"
    },
    {
        "name": "crush on", 
        "singer": "李浩瑋",
        "progression": [6,4,1,5],
        "url": "https://www.youtube.com/embed/YGzrowrKkw4"
    },
    {
        "name": "紅色高跟鞋", 
        "singer": "蔡健雅",
        "progression": [4,5,6,6],
        "url": "https://www.youtube.com/embed/SaNqXIFS99k"
    },
    {
        "name": "越來越不懂", 
        "singer": "蔡健雅",
        "progression": [4,5,6,6],
        "url": "https://www.youtube.com/embed/1eKt13i6ZC4"
    },
    {
        "name": "一路向北", 
        "singer": "周杰倫",
        "progression": [4,5,3,6],
        "url": "https://www.youtube.com/embed/L229QDxDakU"
    },
    {
        "name": "煙幕", 
        "singer": "陳忻玥",
        "progression": [6,4,1,5],
        "url": "https://www.youtube.com/embed/P8uJ4gFjJGE"
    },
    {
        "name": "帶我去找夜生活", 
        "singer": "告五人",
        "progression": [4,1,5,6],
        "url": "https://www.youtube.com/embed/W9Fq1HC_5hg"
    },
    {
        "name": "練習一個人生活", 
        "singer": "南西肯恩",
        "progression": [4,5,3,6],
        "url": "https://www.youtube.com/embed/1T4nt8JfNzU"
    },
    {
        "name": "大海", 
        "singer": "南西肯恩",
        "progression": [4,5,6,6],
        "url": "https://www.youtube.com/embed/0blzND81LS8"
    },
    {
        "name": "留給你的我從未", 
        "singer": "甜約翰",
        "progression": [4,5,3,6],
        "url": "https://www.youtube.com/embed/Q0Nn4TUXH5Y"
    }
]

document.getElementById("button").onclick = function findProgression() {
    var choose = document.getElementById("choose").value;
    var result = document.getElementById("result");
    var output = "";
    var theSinger = "";
    var theUrl = "";

    for (var i = 0; i < songs.length; i++) {
        if(songs[i].name == choose) {
            theSinger = songs[i].singer;
            theUrl = songs[i].url;

            for(var j = 0; j < 4; j++){
                output +=  "<img src = images/"+songs[i].progression[j]+".jpg  >";
            }
        }
    }
    result.innerHTML = "<span style = 'font-size: 30px; font-weight: bold; color: navy;'>歌名："+choose+"<br>演唱者："+theSinger+"</span><br><br><span style = 'font-size: 20px'>此曲的<span style = 'font-weight: bold;'>副歌</span>和弦進行為：<span><br><br>"+output+"<iframe width='560' height='315' src="+theUrl+" frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
}