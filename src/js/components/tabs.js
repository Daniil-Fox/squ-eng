const tabsBlocks = document.querySelectorAll('.plan__block')

if(tabsBlocks.length > 0){
  tabsBlocks.forEach(block => {
    const tabs = block.querySelectorAll('.plan__btn')
    const contents = block.querySelectorAll('.plan__content')

    function clear(){
      contents.forEach(el => el.classList.remove('active'))
      tabs.forEach(el => el.classList.remove('active'))
    }
    tabs.forEach(tab => {
      const dataset = tab.dataset.plan
      const content = block.querySelector(`[data-plan-content="${dataset}"]`)
      tab.addEventListener('click', e => {
        clear()
        tab.classList.add('active')
        content.classList.add('active')
      })
    })
  })
}
