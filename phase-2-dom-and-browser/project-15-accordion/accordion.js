const questions = document.querySelectorAll('.question');
questions.forEach(question =>{
    question.addEventListener('click', ()=>{
        const answer = question.nextElementSibling;
        const isOpen = answer.classList.contains('open');
        questions.forEach(q =>{
            const ans = q.nextElementSibling;
            ans.classList.remove('open');
        })
        if (!isOpen){
            const answer = question.nextElementSibling;
            answer.classList.toggle('open');
        }
    })
})