//프로페타 js

$(document).ready(function () {
    // 페이지 전환 함수
    window.switchPage = function (pageId) {
        // 1. 모든 섹션 페이드 아웃
        $('.page-section').removeClass('active-section').fadeOut(200);

        // 2. 타겟 섹션 페이드 인 (약간의 딜레이)
        setTimeout(function () {
            $('#' + pageId).fadeIn(200).addClass('active-section');
        }, 200);

        // 3. 네비게이션 활성화 상태 변경
        $('.nav-item').removeClass('active');
        $(`.nav-item[data-target="${pageId}"]`).addClass('active');

        // 모바일 메뉴 닫기
        $('#mobile-menu').addClass('hidden');

        // 스크롤 최상단으로 이동
        $('main').scrollTop(0);
    };

    // 모바일 메뉴 토글
    $('#mobile-menu-toggle').click(function () {
        $('#mobile-menu').toggleClass('hidden');
    });

    // 초기 로딩 애니메이션 (옵션)
    $('body').hide().fadeIn(1000);

    // Random text glitch effect simulation for status bar
    setInterval(function () {
        const sync = Math.floor(Math.random() * 50) + 350;
        $('.sync-rate').text(sync + '%');
    }, 2000);

    $('char-card1').click(function(evt){
        evt.preventDefault();
    });
});