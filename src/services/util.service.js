export const utilService = {
    getCurrentDayStatus,
    debounce
}

function getCurrentDayStatus() {
    const currentTime = new Date().getHours();
    let title = ""
    if (currentTime < 12) {
        title = "Good Morning";
    } else if(currentTime < 22) {
        title = "Good Evening";
    } else {
        title = "Good Night";
    }
    return title
}

function debounce(func, timeout = 300) {
	let timer
	return (...args) => {
		clearTimeout(timer)
		timer = setTimeout(() => {
			func.apply(this, args)
		}, timeout)
	}
}