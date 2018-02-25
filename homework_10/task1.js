var timeDeb;

function debounce(fnct, time) {
    timeDeb = null;

    if (timeDeb !== null) {
        window.clearTimeout(timeDeb);
        timeDeb = null;

    } else {
        timeDeb = setTimeout(fnct, time);
    }
}
