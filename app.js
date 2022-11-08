// let someone message me
//carousel with photos ?
// let highlighted word initiate a photo modal or fun fact modal 


//////////////////////////////////////////////////////////////////////////
// why doesnt this beginning work when other stuff is entered in jquery

$(() => {

$('body').hide(5)
$('body').show().fadeIn(3000)

$('.expSub').hide()
$('.expList').hide()
$('.projSub').hide()
$('#slide-image').hide()


$('.expTitle').on('click', () => {
    $('.expSub').toggle();
    $('.expList').toggle();
})

$('.projTitle').on('click', () => {
    $('.projSub').toggle();
    $('#slide-image').toggle();
})



let currentImgIndex = 0;

let numOfImages = $('.slide-image').children().length - 1

$('.next').on('click', () => {
    $('.slide-image').children().eq(currentImgIndex).css('display', 'none')
    if(currentImgIndex < numOfImages) {
        currentImgIndex ++
       } else {
        currentImgIndex = 0
       }
    $('.slide-image').children().eq(currentImgIndex).css('display','block')
   })
  

$('.previous').on('click', () => {

    $('.carousel-images').children().eq(currentImgIndex).css('display', 'none')

    if(currentImgIndex > 0) {
        currentImgIndex --
      } else {
        currentImgIndex = numOfImages
      }
      

    $('.slide-image').children().eq(currentImgIndex).css('display', 'block')

})








})


//////////////////////////////////////////////////////////////////////////


// trying to get "message sent" log when submit clicked

/* <form class="message" action="" method="post">
            Let's get in touch!
            <input type="text" placeholder="Enter your email">
            <input type="submit" class="button">
        </form> */

//  const submitForm() => {
//     let $enter = $('.button');
//     $enter.submit();
//     alert("Your Message Sent");
// }

// $enter.on('click', submitForm);
    
//////////////////////////////////////////////////////////////////////////



// const closeButton = document.querySelector('#closeButton')

// function closePopUp(){
//   // Some logic here that closes the pop-up window
// }

// closeButton.addEventListener('click', closePopUp);