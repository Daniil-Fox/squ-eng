const everyTabs = document.querySelectorAll('.every__tab')
const tabsContent = document.querySelectorAll('.every__content')

if(everyTabs.length > 0){
  function clearActive(){
    everyTabs.forEach(el => el.classList.remove('active'))
    tabsContent.forEach(el => el.classList.remove('active'))
  }
  everyTabs.forEach(tab => {
    tab.addEventListener('click', e => {
      const dataset = tab.dataset.every

      const content = document.querySelector(`.every__content[data-every-content="${dataset}"]`)
      clearActive()
      tab.classList.add('active')
      content.classList.add('active')
    })
  })
}
