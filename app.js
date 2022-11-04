// let someone message me
//carousel with photos ?
// let highlighted word initiate a photo modal or fun fact modal 
// find a way to open and close projects and experience section..... like wtf how did u forget.

// need footer at bottom with icon logos

// how do i delete my selfie on my git. would it interfere w final pushed html



//////////////////////////////////////////////////////////////////////////
// why doesnt this beginning work when other stuff is entered in jquery

$(() => {

$('body').hide(5)
$('body').show().fadeIn(3000)


//////////////////////////////////////////////////////////////////////////


// trying to get "message sent" log when submit clicked

/* <form class="message" action="" method="post">
            Let's get in touch!
            <input type="text" placeholder="Enter your email">
            <input type="submit" class="button">
        </form> */

 const submitForm() => {
    let $enter = $('.button');
    $enter.submit();
    alert("Your Message Sent");
}

$enter.on('click', submitForm);
    
//////////////////////////////////////////////////////////////////////////





})



// const closeButton = document.querySelector('#closeButton')

// function closePopUp(){
//   // Some logic here that closes the pop-up window
// }

// closeButton.addEventListener('click', closePopUp);