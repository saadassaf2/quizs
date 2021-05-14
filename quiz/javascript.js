// const quizContainer = document.getElementById('quiz');
// const resultsContainer = document.getElementById('results');
// const submitButton = document.getElementById('submit');


// function buildQuiz(){}

// function showResults(){}


// buildQuiz();


// submitButton.addEventListener('click', showResults);

// const myQuestions = [
    // {
    //   question: "1. What does HTML stand for?",
    //   answers: {
    //     a: "Home Tool Markup Language",
    //     b: "Hyper Text Markup Language",
    //     c: "Hyperlinks and text Markup Language"
    //   },
    //   correctAnswer: "b"

    // },
    // {
    //   question: "2.how can you open a link in a new browser windows?",
    //   answers: {
    //     a: `<a href="#" target ="new">"`,
    //     b: `<a href= "#" new tap>`,
    //     c: `<a hef="url " target="blank">`
    //   },
    //   correctAnswer: "c"

    // },

    // {
    //   question: "3.how to comment in CSS?",
    //   answers: {
    //     a: `/* bla bla bla */`,
    //     b: `// bla bla bla`,
    //     c: `//bla bla bla //`,
    //     d: "`bla bla bla"
    //   },
    //   correctAnswer: "a"

    // }, {
    //     question: "4.how do you add a background color for all <h1> elements?",
    //     answers: {
    //       a: "all.h1 {background-color: red}",
    //       b: "h1 + h1 {background-color: red}",
    //       c: "h1 {background-color: red}"
    //     },
    //     correctAnswer: "c"
    // }, {
    //     question: `5. What is the correct JavaScript syntax to change the content of the HTML element below?
    //     <p id="demo">This is a demonstration.</p>`,
    //     answers: {
    //       a: `#demo.innerHTML = "hello world!"`,
    //       b: `document.getElementByName ("p").innerHTML = "hello world!";`,
    //       c: `document.getElement("p").innerHTML = "hello world!";`,
    //       d: `document.getElementById("demo").innerHTML = "hello world!";`
    //     },
    //     correctAnswer: "d"
    // }

//   ];
//   function buildQuiz(){
    
//     const output = [];
  
    
//     myQuestions.forEach(
//       (currentQuestion, questionNumber) => {
  
        
//         const answers = [];
  
        
//         for(letter in currentQuestion.answers){
  
         
//           answers.push(
//             `<label>
//               <input type="radio" name="question${questionNumber}" value="${letter}">
//               ${letter} :
//               ${currentQuestion.answers[letter]}
//             </label>`
//           );
//         }
  
       
//         output.push(
//           `<div class="question"> ${currentQuestion.question} </div>
//           <div class="answers"> ${answers.join('')} </div>`
//         );
//       }
//     );
  
    
//     quizContainer.innerHTML = output.join('');
//   }
//   myQuestions.forEach( (currentQuestion, questionNumber) => {
//     // the code we want to run for each question goes here
//   });
//   const answers = [];
//   for(letter in currentQuestion.answers){

//     // ...add an html radio button
//     answers.push(
//       `<label>
//         <input type="radio" name="question${questionNumber}" value="${letter}">
//         ${letter} :
//         ${currentQuestion.answers[letter]}
//       </label>`
//     );
//   }
  
//   // add this question and its answers to the output
//   output.push(
//     `<div class="question"> ${currentQuestion.question} </div>
//     <div class="answers"> ${answers.join('')} </div>`
//   );
//   quizContainer.innerHTML = output.join('');
//   function showResults(){

//     // gather answer containers from our quiz
//     const answerContainers = quizContainer.querySelectorAll('.answers');
  
//     // keep track of user's answers
//     let numCorrect = 0;
  
//     // for each question...
//     myQuestions.forEach( (currentQuestion, questionNumber) => {
  
//       // find selected answer
//       const answerContainer = answerContainers[questionNumber];
//       const selector = `input[name=question${questionNumber}]:checked`;
//       const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
//       // if answer is correct
//       if(userAnswer === currentQuestion.correctAnswer){
//         // add to the number of correct answers
//         numCorrect++;
  
//         // color the answers green
//         answerContainers[questionNumber].style.color = 'lightgreen';
//       }
//       // if answer is wrong or blank
//       else{
//         // color the answers red
//         answerContainers[questionNumber].style.color = 'red';
//       }
//     });
  
//     // show number of correct answers out of total
//     resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
//   }
//   // gather answer containers from our quiz
// const answerContainers = quizContainer.querySelectorAll('.answers');

// // keep track of user's answers
// let numCorrect = 0;
// // for each question...
// myQuestions.forEach( (currentQuestion, questionNumber) => {

//     // find selected answer
//     const answerContainer = answerContainers[questionNumber];
//     const selector = `input[name=question${questionNumber}]:checked`;
//     const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
//     // if answer is correct
//     if(userAnswer === currentQuestion.correctAnswer){
//       // add to the number of correct answers
//       numCorrect++;
  
//       // color the answers green
//       answerContainers[questionNumber].style.color = 'lightgreen';
//     }
//     // if answer is wrong or blank
//     else{
//       // color the answers red
//       answerContainers[questionNumber].style.color = 'red';
//     }
//   });
//   // find selected answer
// const answerContainer = answerContainers[questionNumber];
// const selector = `input[name=question${questionNumber}]:checked`;
// const userAnswer = (answerContainer.querySelector(selector) || {}).value;
// // if answer is correct
// if(userAnswer === currentQuestion.correctAnswer){
//     // add to the number of correct answers
//     numCorrect++;
  
//     // color the answers green
//     answerContainers[questionNumber].style.color = 'lightgreen';
//   }
//   // if answer is wrong or blank
//   else{
//     // color the answers red
//     answerContainers[questionNumber].style.color = 'red';
//   }
//   // show number of correct answers out of total
// resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
// (function(){
//     // put the rest of your code here
//   })();
  
(function(){
    function buildQuiz(){
     
      const output = [];
  
      
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
  
          
          const answers = [];
  
          
          for(letter in currentQuestion.answers){
  
            
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
  
          
          output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
          );
        }
      );
  
      
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
  
      
      const answerContainers = quizContainer.querySelectorAll('.answers');
  
      
      let numCorrect = 0;
  
      
      myQuestions.forEach( (currentQuestion, questionNumber) => {
  
        
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        
        if(userAnswer === currentQuestion.correctAnswer){
          
          numCorrect++;
  
          
          answerContainers[questionNumber].style.color = 'lightgreen';
        }
        
        else{
          
          answerContainers[questionNumber].style.color = 'red';
        }
      });
  
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
      
    }
  
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
        {
            question: "1. What does HTML stand for?",
            answers: {
              a: "Home Tool Markup Language",
              b: "Hyper Text Markup Language",
              c: "Hyperlinks and text Markup Language"
            },
            correctAnswer: "b"
      
          },
          {
            question: "2.how can you open a link in a new browser windows?",
            answers: {
              a: ` target = new `,
              b: `new tap`,
              c: `target="blank" `
            },
            correctAnswer: "c"
      
          },
      
          {
            question: "3.how to comment in CSS?",
            answers: {
              a: `/* bla bla bla */`,
              b: `// bla bla bla`,
              c: `//bla bla bla //`,
              d: "`bla bla bla"
            },
            correctAnswer: "a"
      
          }, {
              question: "4.how do you add a background color for all <h1> elements?",
              answers: {
                a: "all.h1 {background-color: red}",
                b: "h1 + h1 {background-color: red}",
                c: "h1 {background-color: red}"
              },
              correctAnswer: "c"
          }, {
              question: `5. What is the correct JavaScript syntax to change the content of the HTML element below?
              <p id="demo">This is a demonstration.</p>`,
              answers: {
                a: `#demo.innerHTML = "hello world!"`,
                b: `document.getElementByName ("p").innerHTML = "hello world!";`,
                c: `document.getElement("p").innerHTML = "hello world!";`,
                d: `document.getElementById("demo").innerHTML = "hello world!";`
              },
              correctAnswer: "d"
          }
          
    ];
  
    
    buildQuiz();
  
    
    submitButton.addEventListener('click', showResults);
  })();