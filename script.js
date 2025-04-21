function removeActiveClass() {
  const activeBtn = document.getElementsByClassName('active');
  for (let btn of activeBtn) {
      btn.classList.remove('active')
  }
}

function showLoader() {
  document.getElementById('loader').classList.remove("hidden")
  document.getElementById('lesson-container').classList.add("hidden");
}
function removeLoader() {
  document.getElementById('lesson-container').classList.remove("hidden");
  document.getElementById('loader').classList.add("hidden")
}

const loadbtn = () => {
  showLoader()
  fetch('https://openapi.programming-hero.com/api/levels/all')
      .then(res => res.json())
      .then(data => showbtn(data.data))
}


const showbtn = (showLevels) => {
  const learncontainer = document.getElementById('learn-container');

  showLevels.forEach((level) => {
      const newDiv = document.createElement('div');
      newDiv.innerHTML = `
     <button id=btn-${level.level_no} onclick="loadAllLesson(${level.level_no})" class="btn btn-outline btn-primary hover:bg-[#422AD5] hover:text-white">
     <img src="assets/fa-book-open.png" alt="">${level.lessonName}</button>

      `
      learncontainer.append(newDiv)
  })
  removeLoader()
}

const loadAllLesson = (id) => {
  showLoader()
  fetch(`https://openapi.programming-hero.com/api/level/${id}`)
      .then(res => res.json())
      .then(lesson => {
          removeActiveClass()
          const clickedBtn = document.getElementById(`btn-${id}`);
          if (clickedBtn) {
              clickedBtn.classList.add('active')
          }
          showLessons(lesson.data);
      })


}

const showLessons = (lessons) => {
  const lessonContainer = document.getElementById('lesson-container');
  lessonContainer.innerHTML = '';
  if (lessons.length == 0) {
      lessonContainer.innerHTML = `
      <div id="no-word" 
       class="w-full bg-gray-100 rounded-2xl flex flex-col items-center justify-center p-10  col-span-full space-y-5">
        <img src="assets/alert-error.png" alt="">
        <p class=" text-gray-500">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
        <h2 class="text-3xl text-gray-700">নেক্সট Lesson এ যান</h2>
      </div>`
  }
  lessons.forEach(lesson => {
      const lessonCard = document.createElement('div');
      lessonCard.innerHTML = `
      <div class="card bg-base-100 w-80 shadow-sm">
        <div class="card-body items-center text-center">
          <h2 class="card-title">${lesson.word ? lesson.word : " শব্দ নেই"}</h2>
          <p>Meaning / Pronunciation</p>
          <p class="text-xl font-semibold">${lesson.meaning ? lesson.meaning : " অর্থ নেই"} / ${lesson.pronunciation}</p>
        </div>
        <div class="flex justify-between m-10 ">
            <button onclick="WordDetails(${lesson.id})" class="btn btn-ghost">
                <img src="assets/icons8-info-24.png" alt="">
            </button>
            <button onclick="pronounceWord('${lesson.word}')" class="btn btn-ghost">
                <img src="assets/icons8-sound-24.png" alt="" srcset="">
            </button>
        </div>
        
      </div>
      `
      lessonContainer.append(lessonCard);
  })

  const noLesson = document.getElementById('no-lesson')
  if (noLesson) {
      noLesson.classList.add('hidden');
  }
  removeLoader()
}

const WordDetails = (wordId) => {
  showLoader()
  fetch(`https://openapi.programming-hero.com/api/word/${wordId}`)
      .then(res => res.json())
      .then(word => showWordDetails(word.data))
}

const showWordDetails = (Details) => {
  document.getElementById('wordDetails').showModal();
  const detailsContainer = document.getElementById('details-container');
  detailsContainer.innerHTML = `
                  <div class="p-5 border-gray-100 border-2 rounded-xl">
                      <h2 class="text-xl font-semibold mb-7">${Details.word ? Details.word : " শব্দ নেই"} (<i class="fa-solid fa-microphone"></i>  :
                          ${Details.pronunciation})
                      </h2>
                      <p class="text-2xl font-bold mb-3">Meaning</p>
                      <p class="text-xl font-medium mb-7">${Details.meaning ? Details.meaning : " অর্থ নেই"}</p>
                      <p class="text-2xl font-bold mb-3">Example</p>
                      <p class="text-2xl font-medium mb-7">${Details.sentence}</p>
                      <p class="text-2xl font-bold mb-5">সমার্থক শব্দ গুলো</p>
                      <div class="flex items-center gap-5">
                          <button class="btn btn-outline btn-primary">${Details?.synonyms[0] ? Details?.synonyms[0] : "শব্দ নেই"}</button>
                          <button class="btn btn-outline btn-primary">${Details?.synonyms[1] ? Details?.synonyms[1] : "শব্দ নেই"}</button>
                          <button class="btn btn-outline btn-primary">${Details?.synonyms[2] ? Details?.synonyms[2] : "শব্দ নেই"}</button>
                      </div>
                  </div>
  `
  removeLoader()
}

loadbtn()
