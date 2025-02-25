function toggleEmail() {
    var emailDisplay = document.getElementById('email-display');
    
    if (emailDisplay.innerText === '') {
        emailDisplay.innerText = 'ahmedsaeedabab1010@gmail.com'; 
        emailDisplay.classList.add('visible'); 
    } else {
        emailDisplay.classList.remove('visible'); 
        setTimeout(function() {
            emailDisplay.innerText = ''; 
        }, 1000); 
    }
}

function togglePhone() {
    var phoneDisplay = document.getElementById('phone-display');

    if (phoneDisplay.innerText === '') {
        phoneDisplay.innerText = '+20 1550905627'; 
        phoneDisplay.classList.add('visible'); 
    } else {
        phoneDisplay.classList.remove('visible'); 
        setTimeout(function() {
            phoneDisplay.innerText = ''; 
        }, 1000); 
    }
}
