function updateCharacterCount() {
  const textarea = document.getElementById("myTextarea");
  const charCount = document.getElementById("charCount");
  const maxLength = textarea.maxLength;
  const currentLength = textarea.value.length;

  charCount.textContent = `${currentLength}/${maxLength}`;

  if (currentLength === maxLength) {
    textarea.classList.add("limit-reached");
  } else {
    textarea.classList.remove("limit-reached");
  }
}
