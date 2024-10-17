document.getElementById('spoiler-button').addEventListener('click', function() {
  const spoilerText = document.getElementById('spoiler-text');
  if (spoilerText.classList.contains('hidden')) {
    spoilerText.classList.remove('hidden');
  } else {
    spoilerText.classList.add('hidden');
  }
});
