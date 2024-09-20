const formHandler = () => {
  const form = document.querySelector('.contact__form');
  const modal = document.querySelector('.contact__modal')

  const showModal = (message) => {
    modal.style.right = '1.25rem';
    modal.textContent = message;
    
    setTimeout(() => {
      modal.style.right = '-100%';
      modal.textContent = ''
    }, 2300);
  }

  const formSend = async (e) => {
    e.preventDefault()

    const formData = new FormData(form)
    form.classList.add('loading')

    const response = await fetch('./php/server.php', {
      method: 'POST',
      body: formData,
    })

    if (response.ok) {
      showModal('Message sent')
      form.classList.remove('loading')
      form.reset()
    } else {
      showModal('Error sending message')
      form.classList.remove('loading')
    }
  }
  
  form.addEventListener('submit', e => {
    formSend(e);
  })
}

export default formHandler;