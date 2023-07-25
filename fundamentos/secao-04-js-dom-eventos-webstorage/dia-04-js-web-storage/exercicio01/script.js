window.onload = () => {
  const setBackgroundColor = (color) => {
    let content = document.querySelector(".content")
    content.style.backgroundColor = color
  }

  const setFontColor = (color) => {
    let paragraphs = document.querySelectorAll(".paragraph")
    for (let index = 0; index < paragraphs.length; index += 1) {
      paragraphs[index].style.color = color
    }
  }

  const setFontSize = (size) => {
    let paragraphs = document.querySelectorAll(".paragraph")
    for (let index = 0; index < paragraphs.length; index += 1) {
      paragraphs[index].style.fontSize = size
    }
  }

  const setLineHeight = (height) => {
    let paragraphs = document.querySelectorAll(".paragraph")
    for (let index = 0; index < paragraphs.length; index += 1) {
      paragraphs[index].style.lineHeight = height
    }
  }

  const setFontFamily = (family) => {
    let paragraphs = document.querySelectorAll(".paragraph")
    for (let index = 0; index < paragraphs.length; index += 1) {
      paragraphs[index].style.fontFamily = family
    }
  }
  const recoveryInfoBackground = JSON.parse(localStorage.getItem('backgroundColor')) || '[]';
  const recoveryInfotextColor = JSON.parse(localStorage.getItem('textColor')) || '[]';
  const recoveryInfoFontSize = JSON.parse(localStorage.getItem('fontSize')) || '[]';
  const recoveryInfoEspaceLine = JSON.parse(localStorage.getItem('espaceLine')) || '[]';
  const recoveryInfoTypeFont = JSON.parse(localStorage.getItem('typeFont')) || '[]';
  // Cor de fundo da tela;
  let backgroundColorButtons = document.querySelectorAll("#background-color>button")
  for (let index = 0; index < backgroundColorButtons.length; index += 1) {
    backgroundColorButtons[index].addEventListener("click", (event) => {
      setBackgroundColor(event.target.innerHTML)
      localStorage.setItem('backgroundColor', JSON.stringify(event.target.innerHTML))
    })
  }

  // Cor do texto;
  let fontColorButtons = document.querySelectorAll("#font-color>button")
  for (let index = 0; index < fontColorButtons.length; index += 1) {
    fontColorButtons[index].addEventListener("click", (event) => {
      setFontColor(event.target.innerHTML)
      localStorage.setItem('textColor', JSON.stringify(event.target.innerHTML))
    })
  }

  // Tamanho da fonte
  let fontSizeButtons = document.querySelectorAll("#font-size>button")
  for (let index = 0; index < fontSizeButtons.length; index += 1) {
    fontSizeButtons[index].addEventListener("click", (event) => {
      setFontSize(event.target.innerHTML)
      localStorage.setItem('fontSize', JSON.stringify(event.target.innerHTML))
    })
  }

  // Espaçamento entre as linhas do texto;
  let lineHeightButtons = document.querySelectorAll("#line-height>button")
  for (let index = 0; index < lineHeightButtons.length; index += 1) {
    lineHeightButtons[index].addEventListener("click", (event) => {
      setLineHeight(event.target.innerHTML)
      localStorage.setItem('espaceLine', JSON.stringify(event.target.innerHTML))
    })
  }

  // Tipo da fonte (_Font family_).
  let fontFamilyButtons = document.querySelectorAll("#font-family>button")
  for (let index = 0; index < fontFamilyButtons.length; index += 1) {
    fontFamilyButtons[index].addEventListener("click", (event) => {
      setFontFamily(event.target.innerHTML)
      localStorage.setItem('typeFont', JSON.stringify(event.target.innerHTML))
    })
  }
  const recoveryInfo = () => {
    const recoveryInfoBackground = JSON.parse(localStorage.getItem('backgroundColor')) || '[]';
    if (recoveryInfoBackground) setBackgroundColor(recoveryInfoBackground)

    const recoveryInfotextColor = JSON.parse(localStorage.getItem('textColor')) || '[]';
    if (recoveryInfotextColor) setFontColor(recoveryInfotextColor)

    const recoveryInfoFontSize = JSON.parse(localStorage.getItem('fontSize')) || '[]';
    if (recoveryInfoFontSize) setFontSize(recoveryInfoFontSize)

    const recoveryInfoEspaceLine = JSON.parse(localStorage.getItem('espaceLine')) || '[]';
    if (recoveryInfoEspaceLine) setLineHeight(recoveryInfoEspaceLine)

    const recoveryInfoTypeFont = JSON.parse(localStorage.getItem('typeFont')) || '[]';
    if (recoveryInfoTypeFont) setFontFamily(recoveryInfoTypeFont)
  }
  recoveryInfo();
}