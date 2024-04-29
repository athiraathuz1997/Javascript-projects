(function(){
    const colorField = document.querySelector(".color-field")
    const switcher = document.querySelector(".switcher")
    function newColor(){
        let red=Math.floor(Math.random()*256)
        let green=Math.floor(Math.random()*256)
        let blue=Math.floor(Math.random()*256)

        return `rgb(${red},${green},${blue})`
    }
    switcher.addEventListener("click",function(){
        let color=newColor()
        document.body.style.background=color;
        colorField.value=color;
    })
})()
