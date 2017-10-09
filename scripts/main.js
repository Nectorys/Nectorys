/**
 * Created by Goodman on 10.07.2017.
 */
$(document).ready(function() {

// Set foto product in gallary of the left bar
    var galery = document.getElementById("galery");
    var massiveGallery = galery.children;
    for( var i=0; i<massiveGallery.length; i++){
       var link = massiveGallery[i].firstElementChild;
       var clsProduct = link.firstElementChild;
       clsProduct.setAttribute("style", "background-image: url('../files/" + [i+1] +"/" + [i+1]+".png')")
    }
});
/*-----------------------------------------------------------------------------------*/
$(document).ready(function() {
    $(".product-holder").click(function () {
        var iconImage = $(this).find('.product');
        var iconPath = iconImage[0].attributes;
        var StyleValue = iconPath[1].nodeValue;

            function  parseNum(str){
                return parseFloat(str.match(/-?\d+(?:\.\d+)?/g, '') || 0, 10);
            }
        var numOfImg = parseNum(StyleValue);

        $(".empty-text").css('display', 'none'); /*remove text from card's field*/

        var $clone= $(".ticket-list").clone();
        var $workClone = $($clone).appendTo(".ticket-holder");
        $($workClone).removeClass("ticket-list").addClass("ticket-list-clone");                             //switch clone's class
        $($workClone).find(".present-image >img").attr("src", "../files/" + numOfImg +"/" +numOfImg +".png"); //set the way to image

        //Display copy-card after click on "product-holder"
        var contentDetach =$(this).children().detach();
        var productCopy = $(this).append("<div class='product-copy'></div>");
        var imageSrc = $(productCopy).children().append("<img>");
        $(imageSrc).find("img").attr("src", "../images/icons/images_copy.png");
        // $(imageSrc).attr("src", "../images/icons/images_copy.png");
        $(productCopy).children().append("<span>This item has already been added to your list</span>");
        $(productCopy).children().css("display", "flex");

    });

    $(".ticket-list-for-example").click(function () {
        $(this).append($(".ticket-hover:first").css("display", "flex"));
    });
/*-------------------------------------------------------------------------------*/
//Remove top
    $(".dropdown-content a:first-child").click(function () {
        $(this).closest('.ticket-list-for-example').append($(".deleted-item"));
        $(this).closest(".ticket-list-for-example").find('.deleted-item').css("display", "flex");
        $(this).closest(".ticket-hover>div").css("display", "none");
        // $(this).closest(".ticket-list").addClass("remove");
    });

//Display copy-card after click on "product-holder"
//     $(".product-holder").click(function () {
//         $(this).children().detach();
//         $(this).addClass(".product-copy");
//         $(".product-copy").css("display", "flex");
//     })

/*--------------------------------------------------------------------------------*/
    // //Show the dropdown menu when click on button list
        $(".dropbtn").click(function(){
            $("#myDropdown").toggleClass("show");
        });

     // Close the dropdown menu if the user clicks outside of it
    window.onclick = function (event) {
        if (!event.target.matches('.dropbtn')) {

            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    };

});