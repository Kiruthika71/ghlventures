// Counter
function counter(id, start, end, duration) {
    let obj = document.getElementById(id);
    let current = start;
    let range = end - start;
    let increment = end > start ? 0.01 : -0.01;
    let step = Math.abs(Math.floor(duration / (range * 100)));
    if (range === 0) {
        obj.textContent = end;
        return;
    }
    let timer = setInterval(() => {
        current += increment;
        if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
            clearInterval(timer);
            obj.textContent = end.toFixed(2);
        } else {
            obj.textContent = current.toFixed(2);
        }
    }, step);
}

window.onload = function() {
    counter("count1", 0, 3.2, 1000);
    counter("count2", 0, 1, 1000);
    counter("count3", 0, 24, 1000);
    document.getElementById("count4").textContent = 0;
};

// Mobile Number country code
$("#mobile_code").intlTelInput({
    initialCountry: "in",
    separateDialCode: true
});

// OTP
var verificationCode = [];
$(".verification-code input[type=text]").keyup(function (e) {
  
  // Get Input for Hidden Field
  $(".verification-code input[type=text]").each(function (i) {
    verificationCode[i] = $(".verification-code input[type=text]")[i].value; 
    $('#verificationCode').val(Number(verificationCode.join('')));
    //console.log( $('#verificationCode').val() );
  });

  //console.log(event.key, event.which);

  if ($(this).val() > 0) {
    if (event.key == 1 || event.key == 2 || event.key == 3 || event.key == 4 || event.key == 5 || event.key == 6 || event.key == 7 || event.key == 8 || event.key == 9 || event.key == 0) {
      $(this).next().focus();
    }
  }else {
    if(event.key == 'Backspace'){
        $(this).prev().focus();
    }
  }

}); // keyup

$('.verification-code input').on("paste",function(event,pastedValue){
  console.log(event)
  $('#txt').val($content)
  console.log($content)
  //console.log(values)
});

$editor.on('paste, keydown', function() {http://jsfiddle.net/5bNx4/#run
var $self = $(this);            
              setTimeout(function(){ 
                var $content = $self.html();             
                $clipboard.val($content);
            },100);
     });



<script>
        $(document).ready(function() {
            var items = $('#carouselExampleControls .carousel-item');
            var totalItems = items.length;
            var currentIndex = 0;

            $('#carouselExampleControls').on('slide.bs.carousel', function (e) {
                currentIndex = $(e.relatedTarget).index();
            });

            $('#carouselExampleControls').carousel({
                interval: false
            });

            function cycleItems() {
                if (currentIndex < totalItems - 1) {
                    currentIndex++;
                } else {
                    currentIndex = 0;
                }
                $('#carouselExampleControls').carousel(currentIndex);
            }

            var autoCycle = setInterval(cycleItems, 3000);

            $('#carouselExampleControls').hover(function() {
                clearInterval(autoCycle);
            }, function() {
                autoCycle = setInterval(cycleItems, 3000);
            });

            $('.carousel-control-prev').click(function() {
                clearInterval(autoCycle);
                $('#carouselExampleControls').carousel('prev');
                autoCycle = setInterval(cycleItems, 3000);
            });

            $('.carousel-control-next').click(function() {
                clearInterval(autoCycle);
                $('#carouselExampleControls').carousel('next');
                autoCycle = setInterval(cycleItems, 3000);
            });
        });
    </script>