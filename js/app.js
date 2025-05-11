document.querySelector('.gray-img').setAttribute('draggable','false')
document.querySelector('.white-img').setAttribute('draggable','false')


const videoPlayer = document.querySelector('.video-player')
const video = videoPlayer.querySelector('.video')
const playButton = videoPlayer.querySelector('.play-button')


playButton.addEventListener('click', () => {
    playButton.style.display = 'none';
    video.play();
})

video.addEventListener('ended', () => {
    playButton.style.display = 'block'; 
    video.currentTime = 0;
    video.load();
  });

const form = document.getElementById('validationForm');

        function validateName() {
            const nameInput = document.getElementById('first_name');
            const nameValue = nameInput.value.trim();
            const nameGroup = nameInput.parentElement;

            if (nameValue === '') {
                nameGroup.classList.add('error');
                return false;
            } else {
                nameGroup.classList.remove('error');
                return true;
            }
        }

        function validateLastName() {
            const nameInput = document.getElementById('last_name');
            const nameValue = nameInput.value.trim();
            const nameGroup = nameInput.parentElement;

            if (nameValue === '') {
                nameGroup.classList.add('error');
                return false;
            } else {
                nameGroup.classList.remove('error');
                return true;
            }
        }       

        

        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const isNameValid = validateName();
            const isLastNameValid = validateLastName();

            if (isNameValid  && isLastNameValid ) {
                window.location.href = "thank-you.html"; 
            }
        });

        document.getElementById('first_name').addEventListener('input', validateName);
        document.getElementById('last_name').addEventListener('input', validateLastName);