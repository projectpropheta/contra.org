//프로페타 js

$(document).ready(function () {
    // 페이지 전환 함수
    window.switchPage = function (pageId) {
        $('.page-section').removeClass('active-section').fadeOut(200);
        setTimeout(function () {
            $('#' + pageId).fadeIn(200).addClass('active-section');
            // 페이지 전환 시 스크롤을 맨 위로 초기화
            $('.main-content').scrollTop(0);
            window.scrollTo(0, 0);
        }, 200);

        $('.nav-item').removeClass('active');
        $(`.nav-item[data-target="${pageId}"]`).addClass('active');

        // 모바일 메뉴 닫기
        $('#mobile-menu').hide();
    };

    // 모바일 메뉴 토글
    $('#mobile-menu-toggle').off('click').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        $('#mobile-menu').stop(true, true).slideToggle(200);
    });

    // 메뉴 외부 클릭 시 닫기
    $(document).on('click', function (e) {
        if (!$(e.target).closest('#mobile-menu').length && !$(e.target).closest('#mobile-menu-toggle').length) {
            $('#mobile-menu').hide();
        }
    });

    // 메뉴 항목 클릭 시 닫기
    $('.mobile-menu-link').off('click').on('click', function () {
        $('#mobile-menu').hide();
    });

    // Random Status Effect
    setInterval(function () {
        const sync = Math.floor(Math.random() * 50) + 350;
        $('.sync-rate').text(sync + '%');
    }, 2000);

    // [보안] 무단 복사 및 우클릭 방지 기능

    // 1. 우클릭 방지
    $(document).on("contextmenu", function (e) {
        e.preventDefault();
        alert("보안을 위해 마우스 우클릭은 사용할 수 없습니다.");
        return false;
    });

    // 2. 드래그 방지
   $(document).on("dragstart", function (e) {
        return false;
    });

    // 3. 선택 방지
    $(document).on("selectstart", function (e) {
        return false;
    });

    // 4. 주요 단축키 방지 (F12, Ctrl+C, Ctrl+A, Ctrl+S 등)
    $(document).on("keydown", function (e) {
        // F12 (개발자 도구)
        if (e.keyCode == 123) {
            e.preventDefault();
            return false;
        }
        // Ctrl 키 조합
        if (e.ctrlKey) {
            // C(복사), V(붙여넣기), S(저장), U(소스보기), A(전체선택)
            if (e.keyCode == 67 || e.keyCode == 86 || e.keyCode == 83 || e.keyCode == 85 || e.keyCode == 65) {
                e.preventDefault();
                return false;
            }
        }
    });
});