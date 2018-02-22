/**
 * Created by ashwi on 2/4/2017.
 */
$(document).ready(function(){
    select_image();
    commu_auto_complete();
    community_click_info();
    $('.event_pic').click(function(){
        event_pic_click(this);
    });
    $('#add_btn').click(function(){
        add_family_names();
        //add families to table and store in array
    });

    $('#cancel_btn').click(function(){
        clearAddfamilyForm();      //calling clearAddStudentForm Function
    });
           //cancel button function ends here
    //cancel_click_button();

});
//------------------ index page script ------------------//
function dynamic_image_creation(main_image){
    $('.main_image').empty();
    $(".main_title").hide();
    var image =$('<img src="'+ main_image +'" >').addClass('main_image col-xs-8');
    $('.left_side').append(image);
}
var community_images=['images/avalon.jpg','images/helena.jpg','images/delano.jpg','images/petaluma.jpg','images/marin.jpg','images/piedemont.jpg','images/belvedere.jpg','images/calistoga.jpg'];

function dynamic_info_creation(paragraph,header) {
    $('info_heading').empty();
    $('.para_info').empty();
    var heading = $('<h2>'+ header +'</h2>').addClass('info_heading');
    var info_ph = $('<p>'+ paragraph+'</p>').addClass('para_info');
    $('.left_side').append(info_ph,heading);
}

var paragraph =[
    'Avalon is a luxury apartment houses with 2 large size bedrooms and open floor plan living, dinning and kitchen area. Also it has big balcony for outdoor feel. ',
    'Helena homes are townhouses with 3 bedroom open floor plan. It has 2 floor. Groun level is kitchen, living, powder room and dinning along with decent size backyard. Level 2 have 3 bedroom with 2 full bathrooms '
];

var heading =['Avelon information','Helena information'];

function select_image(){


    $('.community1').mouseover(function(){
        dynamic_image_creation(community_images[0]);
        dynamic_info_creation(paragraph[0],heading[0]);
        $(this).addClass('hover_effect');
    });
    $('.community2').mouseover(function(){
        dynamic_image_creation(community_images[1]);
        dynamic_info_creation(paragraph[1],heading[1]);
        $(this).addClass('hover_effect');
    });
    $('.community3').mouseover(function(){
        dynamic_image_creation(community_images[2]);
        $(this).addClass('hover_effect');
    });
    $('.community4').mouseover(function(){
        dynamic_image_creation(community_images[3]);
        $(this).addClass('hover_effect');
    });
    $('.community5').mouseover(function(){
        dynamic_image_creation(community_images[4]);
        $(this).addClass('hover_effect');
    });
    $('.community6').mouseover(function(){
        dynamic_image_creation(community_images[5]);
        $(this).addClass('hover_effect');
    });
    $('.community7').mouseover(function(){
        dynamic_image_creation(community_images[6]);
        $(this).addClass('hover_effect');
    });
    $('.community8').mouseover(function(){
        dynamic_image_creation(community_images[7]);
        $(this).addClass('hover_effect');
    });

    $(".commu").mouseout(function(){
        $(this).removeClass('hover_effect');
        $('.main_image').hide();
        $(".main_title").show();
        $('.info_heading').hide();
        $('.para_info').hide();
    });
}



// function community_click_info(){
//
//     $('.community1').click(function(){
//         dynamic_info_creation(paragraph[0],heading[0],community_images[0]);
//     });
//
//     $('.community2').click(function(){
//         dynamic_info_creation(paragraph[1],heading[1],community_images[1]);
//     });
// }



//---------------------- events script --------------------//
var div_text={
    'new_year':{
        text: '1st January 6:00pm - 9:00pm',
        src: ['images/Christmas-New-Year.jpg','images/delano.jpg','images/Christmas-New-Year.jpg','images/delano.jpg']
    },
    'sankranti': {
        text: '14th January 6:00pm - 9:00pm',
        src : ['images/sankranti.jpg','images/Christmas-New-Year.jpg','images/delano.jpg','images/Christmas-New-Year.jpg']
    },
    'holi':{
        text: '11:00am - 3:00 pm',
        src : ['images/Christmas-New-Year.jpg','images/delano.jpg','images/holi.jpg','images/Christmas-New-Year.jpg']
    },
    'picnic' :{
        text: '1st June 11:00am - 3:00pm',
        src : ['images/summer-picnic.jpg','images/delano.jpg','images/Christmas-New-Year.jpg','images/delano.jpg']
    },
    'halloween' :{
        text:'31st October 5:00pm - 7:00pm',
        src : ['images/Halloween.jpeg','images/delano.jpg','images/Christmas-New-Year.jpg','images/delano.jpg']
    },
    'diwali' : {
        text:'11:00am - 3:00pm',
        src : ['images/diwali.jpg','images/delano.jpg','images/Christmas-New-Year.jpg','images/delano.jpg']
    }
};

var select_event = null;
function event_pic_click(element){
    select_event = $(element);

    var section = select_event.attr('data-section');
    var pic = div_text[section].src;
    model_show_up(pic);

}
function model_show_up(pic){         //bootstrap model
    $('.event_pitcher').remove();
    $("#myModal .modal-body");
    $("#myModal ,#myCarousel").modal("show");


    $('.one').append('<img class="event_pitcher" src="' + pic[0] + '">');
    $('.two').append('<img class="event_pitcher" src="' + pic[1] + '">'); //append images to carousel image tag card//
    $('.three').append('<img class="event_pitcher" src="' + pic[2] + '">');
    $('.four').append('<img class="event_pitcher" src="' + pic[3] + '">');
    click_close();   //close button click, model and event pic carousel should close and show event main page again//
}

function click_close() {        //click start function hiding messageModal and shoeing game board
    $('.close').click(function () {
        $("#myModal ,#myCarousel").modal('hide');
    });
}

//--------------- registration page script --------------//


var familyIndex;
// global array to hold families object //

var familiesObj ={};
//global student array created//

var input_ids = ['firstName','lastName','commu_name','phNum'];

//addClicked - Event Handler when user clicks the add button
//add click function works, when add button clicked. it's calling add_family_names function

function add_family_names() {
   // commu_auto_complete();
    var families_object = {};  //created one object
    for (var i = 0; i < input_ids.length; i++) {
        familyIndex = input_ids[i];    //families info id's in array and taking index value
        var familiesIndex_value = $('#' + familyIndex).val();   //jquery method used to store families info value
        families_object[familyIndex] = familiesIndex_value;
    }       //for loop ends
    var name_condition = /[0-9]/;

    if(families_object.firstName !== ""    //conditional statement checking input fields are not empty
        && families_object.lastName !== ""
        && families_object.commu_name !== ""){
        if(families_object.firstName.match(name_condition) != null){
            show_popover('#firstName', 'Error', 'enter right name');//condition false, if it's start or it's a number
            $('.noData').remove();
        }
        else {
            correct_faild_message('#firstName');
        }
        if(families_object.lastName.match(name_condition) != null){
            show_popover('#lastName', 'Error', 'enter right name');//condition false, if it's start or it's a number
            $('.noData').remove();
        }
        else {
            correct_faild_message('#lastName');
        }
        if(families_object.commu_name.match(name_condition) != null){
            show_popover('#commu_name', 'Error', 'enter right name');//condition false, if it's start or it's a number
            $('.noData').remove();
        }
        else {
            correct_faild_message('#commu_name');
        }
        if (families_object.phNum == isNaN) {   //conditional statement checking input fields is not a number
            show_popover('#phNum', 'Error', 'enter right phone number');
            $('.noData').remove();
        }
        else {
            correct_faild_message('#phNum');
        }
        addFamiliesToDom(families_object);     //all condition true, add families to object
    }
    else{
        show_popover('#firstName, #lastName,#commu_name', 'Error', 'enter right data');
    }
    familiesObj = families_object;
    console.log(familiesObj);
    console.log(input_ids);
}

function commu_auto_complete(){
    $( function() {
        var availableTags = ['Avalon','Helena','Delano','Petaluma','Marin','Piedemont','Belvedere','Calistoga'
        ];
        $( "#commu_name" ).autocomplete({
            source: availableTags
        });
    } );
}

function show_popover(target_element, title, message, timeout){
    if(timeout===undefined){        //popover window time
        timeout = 2000;
    }
    $(target_element).popover({        //bootstrap method to pop-up message
        title: title,
        content: message,
        trigger: 'manual'
    }).popover('show');     //popover message show up
    $(target_element).css('background-color', 'red');
    setTimeout(function () {
        $(target_element).css('background-color', 'white');
        $(target_element).popover('hide');
    }, 3000);       //get normal input background (settimeout function)

}   //opo over function ends here

function correct_faild_message(target_element){
    $(target_element).css('background-color', 'lightgreen');
    setTimeout(function () {
        $(target_element).css('background-color', 'white');
    }, 500);       //get normal input background (settimeout function)
}
/**
 clearAddfamilyForm - clears out the form values based on inputIds variable
 */

//clearAddfamilyForm Function clear/remove data from input fields, if user hit cancel button
function clearAddfamilyForm(){
    for(var i =0; i <input_ids.length; i++){        //looping through the student id's and clearing out input fields
        familyIndex = input_ids[i];
        $('#' + familyIndex).val('');      //jquery method use for input fields to clear out data
    }
}       //clear families form function ends here

function addFamiliesToDom(family_obj){
    var new_tr = $("<tr>",{     //new row created dynamically
        class : 'table_row'
    });
    family_obj.tr_element = new_tr;        //gave tr Element to new tr
    var newFirstName = $("<td class='td1'>").html(family_obj.firstName);       //created first name table data
    var newlasatName = $("<td class='td2'>").html(family_obj.lastName);      //created  last Name table data
    var newCommu_name = $("<td class='td3'>").html(family_obj.commu_name); //created community name table data
    var newphNum = $("<td class='td4'>").html(family_obj.phNum); //created phone number table data


    $(new_tr).append(newFirstName, newlasatName, newCommu_name,newphNum);      //appending all table data to table row
    $('.resident-list > tbody').append(new_tr);      //appending table row to resident list table(dom)

    clearAddfamilyForm();
}   //add families dom function ends here
