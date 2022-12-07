module.exports.Reverse = async function(string) {

    keyarray = []

    keyarray = string.split("")

    keyarray.reverse()
    str = ""
    for (i = 0; i < keyarray.length; i++) {
        str = str + keyarray[i]
    }
    console.log(str)
}