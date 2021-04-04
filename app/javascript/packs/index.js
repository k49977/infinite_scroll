$(document).on('turbolinks:load', function() {
  return $('#shops').infiniteScroll({
    path: "nav.pagination a[rel=next]",
    append: ".shop",
    history: false,
    prefill: true,
    status: '.page-load-status'
  });
  

  $('#infiniteScrollingContainer').on('scroll', function(){
    if($('#infiniteScrollingContainer').scrollTop() + $('#infiniteScrollingContainer').height() == $('#infiniteScrollingContainer')[0].scrollHeight - 16) { 
      alert("最後までスクロールしました！")
    }
  });
});
