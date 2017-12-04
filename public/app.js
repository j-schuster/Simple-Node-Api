/* global $ */
$(document).ready(function(){
    $.getJSON('https://javascript-api-jschuster.c9users.io/api/questions')
    .then(displayQuestions)
})

function displayQuestions(questions){
   // questions.forEach(function(question){
   //    let quest = $('<li class="question">' + 'Category: ' + question.category + '<br/>' + ' Question: ' + question.title + '</li>')
   //     $('.list').append(quest)
   // })
}

// function makePost(data){
//    $.ajax({
//       type: "POST",
//       url: "https://javascript-api-jschuster.c9users.io/api/questions",
//       data: data,
//       success: console.log("success!"),
//       dataType: "json"
//    });
// }

// const question = {
//    category: "ECMAScript6",
//    title: "What is a promise?",
//    correctAnswer: "something you make to a friend",
//    answers: ["not a joke", "something a friend does", "hope in great form", "a lie"]
// }

// makePost(question)