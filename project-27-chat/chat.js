const messageInput = document.querySelector('#messageInput');
const sendBtn = document.querySelector('#sendBtn');
const displayArea = document.querySelector('#messages');
function getBotReply(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('This is a mock reply');
        },1000);
    })
}
sendBtn.addEventListener('click', async()=>{
    if (messageInput.value.trim() === '') return;
    const messageSpan = document.createElement('div');
    messageSpan.textContent = (`User: ${messageInput.value}`);
    displayArea.appendChild(messageSpan);
    messageInput.value = '';
    const loadingSpan = document.createElement('div');
    loadingSpan.textContent = 'typing...';
    displayArea.appendChild(loadingSpan);
    const botReply = await getBotReply();
    const replySpan = document.createElement('div');
    replySpan.textContent = (`Bot: ${botReply}`);
    displayArea.appendChild(replySpan);
    displayArea.removeChild(loadingSpan);
})