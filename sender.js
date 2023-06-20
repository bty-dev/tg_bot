const time = document.getElementById("time");
const textContent = document.getElementById("text");
const sendBtn = document.getElementById("send");

export let resTime;
export let resText;

sendBtn.addEventListener("click", () => {
    resTime = time.value;
    resText = textContent.value;

    time.value = "";
    textContent.value = "";
})