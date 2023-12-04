const eventBtn = document.getElementById('btn');
const eventText = document.getElementById('text');

eventBtn.addEventListener('click', () => {
    setTimeout(() => {
        eventText.innerText = 'ボタンをクリックしました'    
    }, 2000)
})
