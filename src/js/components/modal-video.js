const modalVideos = document.querySelectorAll('[data-video-src]')
const modalVideo = document.querySelector('.modal-video')
const videoInModal = modalVideo.querySelector('video')
modalVideos.forEach(el => {
  const dataset = el.dataset.videoSrc

  el?.addEventListener('click', e => {
    e.preventDefault()
    videoInModal.src = dataset
    modalVideo.classList.add('active')
  })
})
