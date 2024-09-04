let upperSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let lowerSet = 'abcdefghijklmnopqrstuvwxyz'
let numberSet = '1234567890'
let symbolSet = '~!@#$%&*?'


const btnCopy = document.querySelector('.btn-copy')
const totalChar = document.querySelector('.totalChar')
const getInputPassword = document.querySelector('.getInputPassword')
const upperValue = document.querySelector('.upperValue')
const lowerValue = document.querySelector('.lowerValue')
const numberValue = document.querySelector('.numberValue')
const symbolValue = document.querySelector('.symbolValue')

const genratorPassword = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)]
}

const getPassword = (password = '') => {
  if (upperValue.checked) {
    password += genratorPassword(upperSet)
    }
    if (lowerValue.checked) {
        password += genratorPassword(lowerSet)
      }
      
       if (numberValue.checked) {
        password += genratorPassword(numberSet)
    }
    
     if (symbolValue.checked) {
        password += genratorPassword(symbolSet)
    }

    if (password.length < totalChar.value) {
         return getPassword(password)
        
     }
     getInputPassword.textContent = truncateString(password, totalChar.value)
}

const copyPasswordToClipboard = () => {
    const passwordText = getInputPassword.textContent; 
    if (passwordText) {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(passwordText)
            btnCopy.classList.add('copied')
            setTimeout(() => {
                btnCopy.classList.remove('copied'); // Remove class after 2 seconds
            }, 2000);
        }
        else {
            // Fallback for older browsers
            let textArea = document.createElement("textarea");
            textArea.value = passwordText;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            btnCopy.classList.add('copied'); // Add the class to change background color
            setTimeout(() => {
                btnCopy.classList.remove('copied'); // Remove class after 2 seconds
            }, 2000);
        }
    }
    
}
// getPassword()

document.querySelector('.btn').addEventListener(
    'click',
    function () {
    getPassword()
}
)



btnCopy.addEventListener('click', copyPasswordToClipboard)


function truncateString(str, num) {
   if (str.length > num) {
       let subStr = str.substring(0, num)
       return subStr
    }
    return str
}