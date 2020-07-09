$(document).ready(function () {
    var globHistory = [];   // that is for hold the history of forwarding url and data
    var currentInstance = {};   // that is for the current page data and url
    var lastInstCount = 0;   // that case for when last page in screen then click back then count the increse
    var pageName = '';
    $(document).on("click", "#paginateClick a, #submit_form_button", function (e) {
      lastInstCount = 0;
      e.preventDefault();
      var per_page = '';
      pageName = $('#ajaxUrl').val();
      var url = site_url + pageName;
      var formData = $("#formSubmit").serializeJSON();
      if($(this).attr('data-attr') != 'submit'){
          per_page = $(this).attr('data-ci-pagination-page');
          url = site_url + pageName+'/'+per_page;
      }
      formData['per_page'] = per_page;
      if(pageName == 'gamepl'){
        formData['totalLiveTeenpatti'] = $('#totalLiveTeenpatti').text();
        formData['totalCasino'] =  $('#totalCasino').text();
      }
    var checkCurrentInstanceHere = globHistory.find(c=>JSON.stringify(c) == JSON.stringify(currentInstance));
    if(!checkCurrentInstanceHere && globHistory.length > 0){
      globHistory.push(currentInstance);
    }
      globHistory.push({formData:formData,url:url});
      postRequest(formData,url);
    });
    $(document).on("click", "#backbutton", function (e) {
      e.preventDefault();
      backClick();
    });
  
    function backClick(){
      var pos = globHistory.length-1;
      if(pos >= 0){
        var lastElement = globHistory[pos];
        if(JSON.stringify(lastElement) == JSON.stringify(currentInstance) && globHistory.length > 1){
          globHistory.splice(pos, 1);
          backClick();
        }else{
          if(JSON.stringify(lastElement) == JSON.stringify(currentInstance) && globHistory.length == 1){
            location.reload(); 
          }
          postRequest(lastElement.formData,lastElement.url);
          if(globHistory.length > 1){
            globHistory.splice(pos, 1);
          }else{
            if(lastInstCount > 0){
              location.reload();  
            }else{
              lastInstCount++;
            }
          }
        }
      }
    }
  
    function postRequest(data,url){
     currentInstance = {formData:data,url:url};
      $('body').addClass('report-loader');
      var xhr = $.ajax({
        type: "post",
        url: url,
        data: setFormData(data),
        cache: false,
        success: function success(output) {
          setTimeout(function () {
            $('body').removeClass('report-loader');
          }, 100);
          $('.appendAjaxTbl').html(output);
          if($('#datatable').length > 0){
            $('#datatable').DataTable();
            if(pageName == 'sportpl'){
              $("#data-pagination").append($(".dataTables_info"));
              $("#data-pagination").append($(".dataTables_paginate"));
            }
          }
          if(pageName == 'report/userpl'){
            $('#from-date').val($('.span-from').text());
            $('#to_date').val($('.span-to').text());
          }
          if(pageName == 'userList' || pageName == 'childList'){
            $('.toggle-password').hide();
          }
          if(pageName == 'gamepl'){
            $('#totalLiveTeenpatti').text($('#updatedTotalLT').val());
            $('#totalCasino').text($('#updatedTotalLC').val());
          }
        }
      });
    }
  });