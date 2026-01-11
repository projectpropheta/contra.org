//프로페타 js

$(document).ready(function () {
    // [JS 문제 해결] 이벤트 핸들러를 document.ready 내부로 통합하여 안정성 확보

    // 페이지 전환 함수
    window.switchPage = function (pageId) {
        // 부드러운 전환
        $('.page-section').removeClass('active-section').fadeOut(200);
        setTimeout(function () {
            $('#' + pageId).fadeIn(200).addClass('active-section');
            // 페이지 전환 후 스크롤을 최상단으로 (모바일 패딩 고려)
            $('.main-content').scrollTop(0);
            window.scrollTo(0, 0);
        }, 200);

        // 네비게이션 상태 업데이트
        $('.nav-item').removeClass('active');
        $(`.nav-item[data-target="${pageId}"]`).addClass('active');

        // 모바일 메뉴 닫기 (애니메이션 없이 즉시 닫힘)
        $('#mobile-menu').hide();
    };

    // 모바일 메뉴 토글 (중복 바인딩 방지 및 명확한 이벤트 처리)
    $('#mobile-menu-toggle').off('click').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        $('#mobile-menu').stop(true, true).slideToggle(200);
    });

    // 메뉴 링크 클릭 시 닫기
    $('.mobile-menu-link').off('click').on('click', function () {
        $('#mobile-menu').hide();
    });

    // 화면 클릭 시 메뉴 닫기 (메뉴 영역 밖 클릭 시)
    $(document).on('click', function (e) {
        if (!$(e.target).closest('.sidebar').length && !$(e.target).closest('#mobile-menu-toggle').length) {
            $('#mobile-menu').hide();
        }
    });

    // 상태바 랜덤 텍스트 효과
    setInterval(function () {
        const sync = Math.floor(Math.random() * 50) + 350;
        $('.sync-rate').text(sync + '%');
    }, 2000);
});