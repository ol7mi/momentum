const img = ["back01.jpg","back02.jpg","back03.jpg","back04.jpg"]
const randomImg = img[Math.floor(Math.random() * img.length)]
const bgImg = document.createElement("img")
bgImg.src = `img/${randomImg}`
document.body.appendChild(bgImg)
// console.log(bgImg);