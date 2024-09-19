const formHandler = () => {
  const form = document.querySelector('.contact__form');
  const checkbox = document.querySelector('.contact__checkbox')

  const formSend = async e => {
    e.preventDefault()

    const formData = new FormData(form)
    form.classList.add('loading')

    const response = await fetch('./php/server.php', {
      method: 'POST',
      body: formData,
    })

    if (response.ok) {
      alert('Message sent')
      form.classList.remove('loading')
      form.reset()
    } else {
      alert('Error')
      form.classList.remove('loading')
    }
  }
  
  form.addEventListener('submit', e => {
    if (checkbox.checked) {
      formSend(e);
    }
  })
}

export default formHandler;