'use strict';

window.addEventListener("load", function() {
  var app = angular.module('Amazon downloader', []);


  var html = document.querySelector('html');
  html.setAttribute('ng-app', '');
  html.setAttribute('ng-csp', '');
  var isbn10 = $('b:contains("ISBN-10:")').parent().text().substring(9);
  if (isbn10 == null) {
    console.log("går vi in?")
    isbn10 = $('span:contains("ISBN-10:")').parent().text().substring(9);
  }
  console.log(isbn10);
  if (isbn10.length > 2) {
    var downloadLink = document.createElement('a');
    var innerSpan = document.createElement('span');
    var outerDiv = document.createElement('div');
    downloadLink.setAttribute('id', 'downloadLink');
    downloadLink.setAttribute('href', "http://libgen.io/search.php?req=" + isbn10 + "&open=0&res=25&view=simple&phrase=1&column=identifier");
    innerSpan.setAttribute('class', 'a-button-inner a-button-text');
    innerSpan.setAttribute('id', 'inSp');
    outerDiv.setAttribute('class', 'a-button a-button-primary');
    document.getElementById("averageCustomerReviews").appendChild(innerSpan);
    $("#inSp").wrap(downloadLink);
    $("#downloadLink").wrap(outerDiv);
    $("#inSp").text("Download from library genesis");
  }
});