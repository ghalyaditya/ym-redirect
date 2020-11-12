setTimeout(() => {
    try {
        let doc = document.getElementById('ymIframe');
        doc = doc.contentDocument || doc.contentWindow;
        let r = doc.lastChild.getElementsByClassName('title');
        if (r.length) {
            r = r[0];
            r.innerText = window.ymConfig.payload.university;
            r.outerText = window.ymConfig.payload.university;
            r.textContent = window.ymConfig.payload.university;
        }
    } catch (error) {
        console.log(error, "error")
    }
}, 2000);

window.addEventListener('message', function (eventData) {
    try {
        if (JSON.parse(eventData.data)) {
            let event = JSON.parse(eventData.data);

            if (event.event_code === "custom-event" && event.data && event.data.code === "thank_you_page") {
                var newWindow = window.open(event.data.data, "_self");
                return;
            } else {
                return;
            }
        }
        return;
    } catch (error) {
        console.log(error, "error")
    }
}, false);