const inputText = document.getElementById('text-input');
const resultElement = document.getElementById('result');
const checkBtn = document.getElementById('check-btn');

const Palindrome = () => {
  if(inputText.value === null || inputText.value === '') {
    alert('Please input a value');
  }
  else {
     // Remove non-alphanumeric characters and convert to lowercase
    const cleanedText = inputText.value.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

    // Check if the cleaned text is a palindrome
    const isPalindrome = cleanedText === cleanedText.split('').reverse().join('');

    resultElement.textContent = isPalindrome
    ? `${inputText.value} is a palindrome`
    : `${inputText.value} is not a palindrome`;
  }
}

checkBtn.addEventListener('click', Palindrome);
