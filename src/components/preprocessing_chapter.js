exports.preprocess = function (original_md) {

        var final_md, control_obj = []

        return_arr = replace_music_embed(original_md)
        final_md = return_arr[0]; control_obj["sounds"] = return_arr[1]

        return [final_md, control_obj]
    }

// += "<br/> [music src=\"https://upload.wikimedia.org/wikipedia/commons/f/fe/Internationale.ogg\"]"

function replace_music_embed (text) {
    // match pattern like: [music src=""]

    const regex = /\[music\ src\=\"(.*)\"\]/g;
    let m, matches = [];
    var obj = [];

    while ((m = regex.exec(text)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }

        matches.push([m, m.index, m.index + m[0].length])
        text = text.substring(0, m.index) + "<div id='detector'></div>" + text.substring(m.index + m[0].length);

        //var urlPattern = /(([A-Za-z]{3,9}):\/\/)?([-;:&=\+\$,\w]+@{1})?(([-A-Za-z0-9]+\.)+[A-Za-z]{2,3})(:\d+)?((\/[-\+~%/\.\w]+)?\/?([&?][-\+=&;%@\.\w]+)?(#[\w]+)?)?/g
        //var soundUrl = urlPattern.exec(m)
        obj.push(m[1])
        console.log(m[1])

        //script += "console.log('Hello., From Preprocessing')"
    }


    return [text, obj]
}