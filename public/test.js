const md5 = require("md5")
fetch(`http://gateway.marvel.com/v1/public/characters/1011136?ts=${Date.now()}&apikey=14fa7fefb6aa5fc5383b31ee87548d2a&hash=${md5(Date.now() + "5aaacf716d519e0ce369eb806a2e46c5691e80b1" + "14fa7fefb6aa5fc5383b31ee87548d2a")}`).then(res => {
    return res.json()
}).then(data => {
    console.log(data.data)
})