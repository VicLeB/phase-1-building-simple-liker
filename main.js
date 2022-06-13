// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const heartBtns = document.querySelectorAll('.like-glyph')
const errorModal = document.getElementById('modal')

heartBtns.forEach((heart) => {
  heart.addEventListener('click', () => {
    mimicServerCall()
      .then(() => {
        if (heart.className === 'like-glyph activated-heart'){
          heart.textContent = EMPTY_HEART
          heart.className = 'like-glyph'
        } else if (heart.className === 'like-glyph') {
          heart.textContent = FULL_HEART
          heart.classList.add('activated-heart')
        }

      }) 
      .catch(() => {
        errorModal.className = ''
        setTimeout(() => {
          errorModal.className = 'hidden'
        }, 3000)
      })
  })
})







//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
