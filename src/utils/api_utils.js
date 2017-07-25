// TODO: Make it not failing
// HTTP Get Request template
export default {
    methods: {
        httpGetAsync: function(theUrl) {
            var xmlHttp = new XMLHttpRequest();
            xmlHttp.onreadystatechange = function() {
                if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
                    return xmlHttp.responseText;
            }
            xmlHttp.open("GET", theUrl, true); // true for asynchronous
            x
            xmlHttp.send(null);
        }
    }
}
