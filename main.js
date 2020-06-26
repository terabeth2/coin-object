let coin = {
    state: 0,
    flip: function () {
        this.state = Math.floor(Math.random() * 2)

        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
    },
    toString: function () {
        return this.state === 0 ? "Heads" : "Tails"

    },
    toHTML: function () {
        let image = document.createElement('img');
        image.src = this.state === 0 ?
        "./images/heads.jpg":
        "./images/tails.jpg"


        image.style.width = "200px"
        image.style.height = "200px"
        return image;
    }
};
function display20Flips() {
    for (let i = 0; i < 20; i++) {
        let textBox = document.createElement('p')
        textBox.style.margin = "5px"
        coin.flip()
        textBox.append(coin.toString())
        document.body.append(textBox)
    }
    return console.log("We Are Done Flipping")
}
function display20Images() {
    for (let i = 0; i < 20; i++) {
        coin.flip()
        document.body.append(coin.toHTML())
    }
    return console.log("Done With Images")
}

