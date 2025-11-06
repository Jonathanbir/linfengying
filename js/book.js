$(function () {
  const $flipbook = $('#flipbook');

  let isMuted = false;
  // 初始化 turn.js
  $flipbook.turn({
    width: 1200,
    height: 600,
    autoCenter: true,
  });

  // 上一頁按鈕
  $('#prev-page').on('click', function () {
    $flipbook.turn('previous');
  });

  // 下一頁按鈕
  $('#next-page').on('click', function () {
    $flipbook.turn('next');
  });

  // 點右下角 → 下一頁
  $('#next-corner').on('click', function () {
    $flipbook.turn('next');
  });

  // 點左下角 → 上一頁
  $('#prev-corner').on('click', function () {
    $flipbook.turn('previous');
  });

  // 鍵盤方向鍵控制翻頁
  $(document).on('keydown', function (e) {
    if (e.key === 'ArrowLeft') {
      $flipbook.turn('previous');
    } else if (e.key === 'ArrowRight') {
      $flipbook.turn('next');
    }
  });

  //靜音按鈕123
  $('#mute-toggle').on('click', function () {
    isMuted = !isMuted;

    // 全部 audio 元素靜音或取消靜音
    $('audio').each(function () {
      this.muted = isMuted;
    });

    // 切換圖示與文字
    const icon = $(this).find('i');
    if (isMuted) {
      icon.removeClass('fa-volume-mute').addClass('fa-volume-up');
      $(this)
        .contents()
        .filter(function () {
          return this.nodeType === 3; // 選擇文字節點
        })
        .remove();
    } else {
      icon.removeClass('fa-volume-up').addClass('fa-volume-mute');
      $(this)
        .contents()
        .filter(function () {
          return this.nodeType === 3;
        })
        .remove();
    }
  });

  function allAudioPause() {
    $('audio').each(function () {
      this.pause();
    });
  }

  // 當頁面翻轉完成後觸發
  $('#flipbook').bind('turned', function (event, page, view) {
    console.log('page:', page);
    console.log('ccc:', $('.cloud'));
    if (page === 2 || page === 3) {
      // 第 2 頁實際是索引 page 3（封面=1，第1頁=2，第2頁=3）
      allAudioPause();
      setTimeout(() => {
        $('#audio-page-2')[0].currentTime = 0;
        $('#audio-page-2')[0]
          .play()
          .catch(() => {
            console.log('自動播放被瀏覽器阻止，請點擊頁面後再播放。');
          });
      }, 1500);
      $('#audio-background')[0].currentTime = 0;
      $('#audio-background')[0]
        .play()
        .catch(() => {
          console.log('自動播放被瀏覽器阻止，請點擊頁面後再播放。');
        });
    } else if (page === 4 || page === 5) {
      allAudioPause();
      setTimeout(() => {
        $('#audio-page-4')[0].currentTime = 0;
        $('#audio-page-4')[0]
          .play()
          .catch(() => {
            console.log('自動播放被瀏覽器阻止，請點擊頁面後再播放。');
          });
      }, 1500);
      $('#audio-background')[0].currentTime = 0;
      $('#audio-background')[0]
        .play()
        .catch(() => {
          console.log('自動播放被瀏覽器阻止，請點擊頁面後再播放。');
        });
    } else if (page === 6 || page === 7) {
      allAudioPause();
      setTimeout(() => {
        $('#audio-page-6')[0].currentTime = 0;
        $('#audio-page-6')[0]
          .play()
          .catch(() => {
            console.log('自動播放被瀏覽器阻止，請點擊頁面後再播放。');
          });
      }, 1500);
      $('#audio-background')[0].currentTime = 0;
      $('#audio-background')[0]
        .play()
        .catch(() => {
          console.log('自動播放被瀏覽器阻止，請點擊頁面後再播放。');
        });
    } else if (page === 8 || page === 9) {
      allAudioPause();
      setTimeout(() => {
        $('#audio-page-8')[0].currentTime = 0;
        $('#audio-page-8')[0]
          .play()
          .catch(() => {
            console.log('自動播放被瀏覽器阻止，請點擊頁面後再播放。');
          });
      }, 1500);
      $('#audio-background')[0].currentTime = 0;
      $('#audio-background')[0]
        .play()
        .catch(() => {
          console.log('自動播放被瀏覽器阻止，請點擊頁面後再播放。');
        });
    } else if (page === 10 || page === 11) {
      allAudioPause();
      setTimeout(() => {
        $('#audio-page-10')[0].currentTime = 0;
        $('#audio-page-10')[0]
          .play()
          .catch(() => {
            console.log('自動播放被瀏覽器阻止，請點擊頁面後再播放。');
          });
      }, 1500);
      $('#audio-background')[0].currentTime = 0;
      $('#audio-background')[0]
        .play()
        .catch(() => {
          console.log('自動播放被瀏覽器阻止，請點擊頁面後再播放。');
        });
    } else if (page === 12 || page === 13) {
      allAudioPause();
      setTimeout(() => {
        $('#audio-page-12')[0].currentTime = 0;
        $('#audio-page-12')[0]
          .play()
          .catch(() => {
            console.log('自動播放被瀏覽器阻止，請點擊頁面後再播放。');
          });
      }, 1500);
      $('#audio-background')[0].currentTime = 0;
      $('#audio-background')[0]
        .play()
        .catch(() => {
          console.log('自動播放被瀏覽器阻止，請點擊頁面後再播放。');
        });
    } else if (page === 14 || page === 15) {
      allAudioPause();
      setTimeout(() => {
        $('#audio-page-14')[0].currentTime = 0;
        $('#audio-page-14')[0]
          .play()
          .catch(() => {
            console.log('自動播放被瀏覽器阻止，請點擊頁面後再播放。');
          });
      }, 1500);
      $('#audio-background')[0].currentTime = 0;
      $('#audio-background')[0]
        .play()
        .catch(() => {
          console.log('自動播放被瀏覽器阻止，請點擊頁面後再播放。');
        });
    } else {
      console.log('else~~~');
      allAudioPause();
    }
  });
});
