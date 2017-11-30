exports.preprocess = function (original_md) {

        var final_md, control_obj = []

        return_arr = replace_music_embed(original_md)
        final_md = return_arr[0]; control_obj["sounds"] = return_arr[1]

        return [final_md, control_obj]
    }

function replace_music_embed (text) {
    // match pattern like: [music src=""]

    const regex = /\[music\ src\=\"(.*)\"\]/g;
    let m, matches = [];
    var obj = [], sound_index = 0;

    while ((m = regex.exec(text)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }

        matches.push([m, m.index, m.index + m[0].length])
        text = text.substring(0, m.index) + "<div id='detector"+ sound_index++ +"' ></div>" + text.substring(m.index + m[0].length);

        obj.push(m[1])
        console.log(m[1])
    }


    return [text, obj]
}