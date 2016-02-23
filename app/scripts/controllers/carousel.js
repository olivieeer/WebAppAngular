'use strict';

/**
 * @ngdoc function
 * @name oliwebappApp.controller:CarouselCtrl
 * @description
 * # CarouselCtrl
 * Controller of the oliwebappApp
 */


/**
 * Déclaration du module carousel
 */
var carousel = angular.module('carousel',[]);


/**
 * Contrôleur de l'application "Todo List" décrite dans le chapitre "La logique d'AngularJS".
 */
carousel.controller('CarouselCtrl', ['$scope',
     function ($scope) {


         function affichage() {
             var total = $('.item').length;
             var current = $('.item.active').index() + 1;
             $('.label').text(current + ' / '+ total);
         }


         affichage();
         $('.carousel').carousel({ interval: 6000 });
         $('#first').click(function() { $('.carousel').carousel(0); });
         $('#previous').click(function() { $('.carousel').carousel('prev'); });
         $('#pause').click(function() { $('.carousel').carousel('pause'); });
         $('#play').click(function() { $('.carousel').carousel('cycle'); });
         $('#next').click(function() { $('.carousel').carousel('next'); });
         $('#last').click(function() { $('.carousel').carousel(2); });
         $('.carousel').on('slid.bs.carousel', function () {
             affichage();
         });

    /*      $('a').on('click', function(e) {
             e.preventDefault();
             var hash = this.hash;
             $('html, body').animate({
                 scrollTop: $(this.hash).offset().top
             }, 100, function(){
                 window.location.hash = hash;
             });
         }); */



     }
    ]);
