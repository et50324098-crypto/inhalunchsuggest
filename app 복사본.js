    /* =====================================================================
       1. DATA SOURCE (전체 47개 인하대 후문 식당 데이터)
       ===================================================================== */
    const STORE_DATABASE = [
      {
        "id": 47,
        "name": "촌닭",
        "category": "한식",
        "min_party": 2,
        "max_party": 4,
        "walk_minutes": 4,
        "turnover_speed": "보통",
        "purpose_tags": ["가성비 찜닭"],
        "weather_tags": ["맑음"],
        "signature": "매콤달콤 한방 찜닭 & 볶음밥"
      },
      {
        "id": 46,
        "name": "고수찜닭",
        "category": "한식",
        "min_party": 2,
        "max_party": 4,
        "walk_minutes": 4,
        "turnover_speed": "보통",
        "purpose_tags": ["맛있는 찜닭"],
        "weather_tags": ["맑음"],
        "signature": "치즈 토핑 듬뿍 순살찜닭"
      },
      {
        "id": 45,
        "name": "치즈를사랑한찜닭",
        "category": "한식",
        "min_party": 2,
        "max_party": 4,
        "walk_minutes": 4,
        "turnover_speed": "보통",
        "purpose_tags": ["다인원", "치즈찜닭"],
        "weather_tags": ["맑음"],
        "signature": "자연산 치즈 폭탄 찜닭"
      },
      {
        "id": 44,
        "name": "엽기떡볶이",
        "category": "분식",
        "min_party": 1,
        "max_party": 4,
        "walk_minutes": 4,
        "turnover_speed": "보통",
        "purpose_tags": ["떡볶이 맛집", "매운맛"],
        "weather_tags": ["맑음"],
        "signature": "스트레스 날리는 매운 떡볶이 & 주먹밥"
      },
      {
        "id": 43,
        "name": "KFC",
        "category": "양식",
        "min_party": 1,
        "max_party": 4,
        "walk_minutes": 4,
        "turnover_speed": "보통",
        "purpose_tags": ["혼밥", "가성비"],
        "weather_tags": ["맑음"],
        "signature": "징거버거 세트 & 크리스피 치킨"
      },
      {
        "id": 42,
        "name": "미식당 (양식)",
        "category": "양식",
        "min_party": 1,
        "max_party": 4,
        "walk_minutes": 4,
        "turnover_speed": "여유",
        "purpose_tags": ["밥약", "가성비", "데이트"],
        "weather_tags": ["맑음", "더움"],
        "signature": "감성 크림 파스타 & 스테이크 덮밥"
      },
      {
        "id": 41,
        "name": "영종식당",
        "category": "한식",
        "min_party": 1,
        "max_party": 4,
        "walk_minutes": 4,
        "turnover_speed": "보통",
        "purpose_tags": ["가성비"],
        "weather_tags": ["맑음"],
        "signature": "가정식 백반 & 제육볶음"
      },
      {
        "id": 40,
        "name": "찌개사랑",
        "category": "한식",
        "min_party": 1,
        "max_party": 4,
        "walk_minutes": 4,
        "turnover_speed": "보통",
        "purpose_tags": ["혼밥", "가성비"],
        "weather_tags": ["맑음"],
        "signature": "돼지 김치찌개 & 구수한 된장찌개"
      },
      {
        "id": 39,
        "name": "탄포포",
        "category": "일식",
        "min_party": 1,
        "max_party": 4,
        "walk_minutes": 4,
        "turnover_speed": "보통",
        "purpose_tags": ["가성비"],
        "weather_tags": ["맑음"],
        "signature": "일본식 돈부리 & 가츠동 정식"
      },
      {
        "id": 38,
        "name": "이치라멘",
        "category": "일식",
        "min_party": 1,
        "max_party": 4,
        "walk_minutes": 4,
        "turnover_speed": "보통",
        "purpose_tags": ["혼밥", "가성비"],
        "weather_tags": ["맑음"],
        "signature": "진한 돈코츠 라멘 & 차슈동"
      },
      {
        "id": 37,
        "name": "영지갈비",
        "category": "한식",
        "min_party": 1,
        "max_party": 4,
        "walk_minutes": 4,
        "turnover_speed": "보통",
        "purpose_tags": ["밥약"],
        "weather_tags": ["맑음"],
        "signature": "돼지갈비 정식 & 물냉면"
      },
      {
        "id": 36,
        "name": "경동부추삼겹",
        "category": "한식",
        "min_party": 1,
        "max_party": 4,
        "walk_minutes": 4,
        "turnover_speed": "보통",
        "purpose_tags": ["다인원", "가성비"],
        "weather_tags": ["맑음"],
        "signature": "부추삼겹살 구이 & 볶음밥"
      },
      {
        "id": 35,
        "name": "궁중보쌈",
        "category": "한식",
        "min_party": 1,
        "max_party": 4,
        "walk_minutes": 4,
        "turnover_speed": "보통",
        "purpose_tags": ["밥약"],
        "weather_tags": ["맑음"],
        "signature": "야들야들 수육 보쌈정식 & 쟁반막국수"
      },
      {
        "id": 34,
        "name": "돈마니",
        "category": "한식",
        "min_party": 1,
        "max_party": 4,
        "walk_minutes": 4,
        "turnover_speed": "빠름",
        "purpose_tags": ["혼밥", "다인원"],
        "weather_tags": ["맑음"],
        "signature": "수제 돈까스 & 제육덮밥"
      },
      {
        "id": 33,
        "name": "맛사랑",
        "category": "한식",
        "min_party": 1,
        "max_party": 4,
        "walk_minutes": 4,
        "turnover_speed": "보통",
        "purpose_tags": ["가성비"],
        "weather_tags": ["맑음"],
        "signature": "정갈한 뚝배기 찌개 & 쌈밥"
      },
      {
        "id": 32,
        "name": "신촌설렁탕",
        "category": "한식",
        "min_party": 1,
        "max_party": 8,
        "walk_minutes": 4,
        "turnover_speed": "빠름",
        "purpose_tags": ["육회비빔밥", "해장"],
        "weather_tags": ["맑음"],
        "signature": "깊고 진한 설렁탕 & 신선한 육회비빔밥"
      },
      {
        "id": 31,
        "name": "동아리 닭갈비",
        "category": "한식",
        "min_party": 1,
        "max_party": 8,
        "walk_minutes": 4,
        "turnover_speed": "빠름",
        "purpose_tags": ["다인원"],
        "weather_tags": ["맑음"],
        "signature": "푸짐한 철판 닭갈비 & 치즈볶음밥"
      },
      {
        "id": 1,
        "name": "킹콩순두부",
        "category": "한식",
        "min_party": 1,
        "max_party": 4,
        "walk_minutes": 3,
        "turnover_speed": "빠름",
        "purpose_tags": ["혼밥", "해장"],
        "weather_tags": ["비", "추움"],
        "signature": "보글보글 해물 순두부찌개 (밥 무한)"
      },
      {
        "id": 2,
        "name": "가메이",
        "category": "일식",
        "min_party": 1,
        "max_party": 4,
        "walk_minutes": 4,
        "turnover_speed": "빠름",
        "purpose_tags": ["혼밥"],
        "weather_tags": ["맑음"],
        "signature": "연어 덮밥(사케동) & 믹스 가츠동"
      },
      {
        "id": 3,
        "name": "고씨네 카레",
        "category": "한식",
        "min_party": 1,
        "max_party": 4,
        "walk_minutes": 4,
        "turnover_speed": "보통",
        "purpose_tags": ["혼밥", "밥약"],
        "weather_tags": ["맑음"],
        "signature": "진한 매콤 일본식 카레 & 돈까스 토핑"
      },
      {
        "id": 4,
        "name": "지지고",
        "category": "한식",
        "min_party": 1,
        "max_party": 2,
        "walk_minutes": 2,
        "turnover_speed": "빠름",
        "purpose_tags": ["혼밥", "가성비"],
        "weather_tags": ["맑음"],
        "signature": "철판 불맛 나이스라이스 & 누들두들 컵밥"
      },
      {
        "id": 5,
        "name": "봉구스밥버거",
        "category": "한식",
        "min_party": 1,
        "max_party": 2,
        "walk_minutes": 2,
        "turnover_speed": "빠름",
        "purpose_tags": ["혼밥", "가성비"],
        "weather_tags": ["맑음"],
        "signature": "든든한 햄치즈 밥버거"
      },
      {
        "id": 6,
        "name": "한솥도시락",
        "category": "한식",
        "min_party": 1,
        "max_party": 2,
        "walk_minutes": 3,
        "turnover_speed": "빠름",
        "purpose_tags": ["혼밥", "가성비"],
        "weather_tags": ["맑음"],
        "signature": "국민 점심 치킨마요 & 도련님 도시락"
      },
      {
        "id": 7,
        "name": "일미닭갈비",
        "category": "한식",
        "min_party": 2,
        "max_party": 6,
        "walk_minutes": 6,
        "turnover_speed": "여유",
        "purpose_tags": ["밥약", "단체회식"],
        "weather_tags": ["맑음"],
        "signature": "가성비 최강 닭갈비 대형 철판구이"
      },
      {
        "id": 8,
        "name": "인하칼국수",
        "category": "한식",
        "min_party": 1,
        "max_party": 6,
        "walk_minutes": 5,
        "turnover_speed": "보통",
        "purpose_tags": ["해장", "가성비"],
        "weather_tags": ["비", "추움"],
        "signature": "시원한 바지락 칼국수 & 보리밥"
      },
      {
        "id": 9,
        "name": "소문난감자탕",
        "category": "한식",
        "min_party": 1,
        "max_party": 8,
        "walk_minutes": 5,
        "turnover_speed": "보통",
        "purpose_tags": ["해장", "단체회식"],
        "weather_tags": ["비", "추움"],
        "signature": "얼큰한 뼈해장국 & 푸짐한 묵은지 감자탕"
      },
      {
        "id": 10,
        "name": "신의주찹쌀순대",
        "category": "한식",
        "min_party": 1,
        "max_party": 6,
        "walk_minutes": 4,
        "turnover_speed": "빠름",
        "purpose_tags": ["혼밥", "해장"],
        "weather_tags": ["비", "추움"],
        "signature": "뜨끈한 순대국밥 & 모듬 찹쌀순대"
      },
      {
        "id": 11,
        "name": "백소정",
        "category": "일식",
        "min_party": 1,
        "max_party": 4,
        "walk_minutes": 4,
        "turnover_speed": "보통",
        "purpose_tags": ["밥약", "데이트"],
        "weather_tags": ["더움", "맑음"],
        "signature": "시원한 살얼음 냉소바 & 마제소바 돈카츠"
      },
      {
        "id": 12,
        "name": "미식당 (일식)",
        "category": "일식",
        "min_party": 1,
        "max_party": 4,
        "walk_minutes": 5,
        "turnover_speed": "보통",
        "purpose_tags": ["밥약", "데이트"],
        "weather_tags": ["맑음"],
        "signature": "정갈한 사케동 & 규동 덮밥"
      },
      {
        "id": 13,
        "name": "요코하마라멘",
        "category": "일식",
        "min_party": 1,
        "max_party": 2,
        "walk_minutes": 4,
        "turnover_speed": "빠름",
        "purpose_tags": ["혼밥"],
        "weather_tags": ["추움", "비"],
        "signature": "진하고 묵직한 이에케 쇼유라멘"
      },
      {
        "id": 14,
        "name": "카츠마마",
        "category": "일식",
        "min_party": 1,
        "max_party": 4,
        "walk_minutes": 5,
        "turnover_speed": "보통",
        "purpose_tags": ["밥약", "든든함"],
        "weather_tags": ["맑음"],
        "signature": "바삭하고 두툼한 프리미엄 수제 돈카츠"
      },
      {
        "id": 15,
        "name": "스시노백쉐프",
        "category": "일식",
        "min_party": 2,
        "max_party": 4,
        "walk_minutes": 6,
        "turnover_speed": "여유",
        "purpose_tags": ["밥약", "데이트"],
        "weather_tags": ["맑음"],
        "signature": "신선하고 정갈한 프리미엄 초밥 세트"
      },
      {
        "id": 16,
        "name": "역전우동0410",
        "category": "일식",
        "min_party": 1,
        "max_party": 4,
        "walk_minutes": 3,
        "turnover_speed": "빠름",
        "purpose_tags": ["혼밥", "가성비"],
        "weather_tags": ["비", "추움"],
        "signature": "옛날우동 & 바삭한 돈까스 덮밥 세트"
      },
      {
        "id": 17,
        "name": "탕화쿵푸마라탕",
        "category": "중식",
        "min_party": 1,
        "max_party": 4,
        "walk_minutes": 4,
        "turnover_speed": "보통",
        "purpose_tags": ["혼밥", "해장", "매운맛"],
        "weather_tags": ["비", "추움"],
        "signature": "골라 담는 얼큰 마라탕 & 꿔바로우"
      },
      {
        "id": 18,
        "name": "홍콩반점0410",
        "category": "중식",
        "min_party": 1,
        "max_party": 6,
        "walk_minutes": 4,
        "turnover_speed": "빠름",
        "purpose_tags": ["해장", "단체회식"],
        "weather_tags": ["비", "추움"],
        "signature": "불맛 가득 짬뽕 & 찹쌀탕수육"
      },
      {
        "id": 19,
        "name": "미분당",
        "category": "아시안",
        "min_party": 1,
        "max_party": 2,
        "walk_minutes": 5,
        "turnover_speed": "보통",
        "purpose_tags": ["혼밥", "해장"],
        "weather_tags": ["비", "추움"],
        "signature": "맑고 깊은 양지차돌 쌀국수 (조용한 분위기)"
      },
      {
        "id": 20,
        "name": "타지마할 인도커리",
        "category": "아시안",
        "min_party": 2,
        "max_party": 6,
        "walk_minutes": 6,
        "turnover_speed": "여유",
        "purpose_tags": ["밥약", "이색"],
        "weather_tags": ["맑음"],
        "signature": "부드러운 치킨 마크니 커리 & 갓 구운 버터난"
      },
      {
        "id": 21,
        "name": "란주칼면",
        "category": "중식",
        "min_party": 1,
        "max_party": 4,
        "walk_minutes": 5,
        "turnover_speed": "보통",
        "purpose_tags": ["밥약", "든든함"],
        "weather_tags": ["추움"],
        "signature": "쫄깃한 수타 도삭면 & 꿔바로우"
      },
      {
        "id": 22,
        "name": "롤링파스타",
        "category": "양식",
        "min_party": 2,
        "max_party": 4,
        "walk_minutes": 4,
        "turnover_speed": "보통",
        "purpose_tags": ["밥약", "데이트"],
        "weather_tags": ["맑음"],
        "signature": "가성비 파스타 & 마르게리따 피자"
      },
      {
        "id": 23,
        "name": "노브랜드버거",
        "category": "패스트푸드",
        "min_party": 1,
        "max_party": 4,
        "walk_minutes": 3,
        "turnover_speed": "빠름",
        "purpose_tags": ["혼밥", "가성비"],
        "weather_tags": ["맑음"],
        "signature": "두툼한 패티 NBB 시그니처 버거 세트"
      },
      {
        "id": 24,
        "name": "서브웨이",
        "category": "패스트푸드",
        "min_party": 1,
        "max_party": 2,
        "walk_minutes": 3,
        "turnover_speed": "빠름",
        "purpose_tags": ["혼밥", "가벼운"],
        "weather_tags": ["더움", "맑음"],
        "signature": "산뜻하고 신선한 에그마요 샌드위치"
      },
      {
        "id": 25,
        "name": "이삭토스트",
        "category": "패스트푸드",
        "min_party": 1,
        "max_party": 2,
        "walk_minutes": 2,
        "turnover_speed": "빠름",
        "purpose_tags": ["혼밥", "가성비"],
        "weather_tags": ["맑음"],
        "signature": "달콤한 특제소스 햄스페셜 토스트"
      },
      {
        "id": 26,
        "name": "문화의거리 파스타양식당",
        "category": "양식",
        "min_party": 2,
        "max_party": 4,
        "walk_minutes": 7,
        "turnover_speed": "여유",
        "purpose_tags": ["데이트", "밥약"],
        "weather_tags": ["맑음"],
        "signature": "플레이팅 예쁜 명란 오일 파스타 & 스테이크"
      },
      {
        "id": 27,
        "name": "신전떡볶이",
        "category": "분식",
        "min_party": 2,
        "max_party": 4,
        "walk_minutes": 4,
        "turnover_speed": "빠름",
        "purpose_tags": ["가성비", "매운맛"],
        "weather_tags": ["비"],
        "signature": "후추 풍미 알싸한 국물떡볶이 & 오뎅튀김"
      },
      {
        "id": 28,
        "name": "청년다방",
        "category": "분식",
        "min_party": 2,
        "max_party": 6,
        "walk_minutes": 5,
        "turnover_speed": "보통",
        "purpose_tags": ["밥약", "단체회식"],
        "weather_tags": ["비"],
        "signature": "통큰오짱·차돌 즉석 떡볶이 & 버터갈릭 감튀"
      },
      {
        "id": 29,
        "name": "이모떡",
        "category": "분식",
        "min_party": 2,
        "max_party": 4,
        "walk_minutes": 3,
        "turnover_speed": "빠름",
        "purpose_tags": ["가성비"],
        "weather_tags": ["맑음"],
        "signature": "학창시절 추억의 쌀떡볶이 & 수제 모듬튀김"
      },
      {
        "id": 30,
        "name": "명랑핫도그",
        "category": "분식",
        "min_party": 1,
        "max_party": 2,
        "walk_minutes": 2,
        "turnover_speed": "빠름",
        "purpose_tags": ["가성비", "간식"],
        "weather_tags": ["맑음"],
        "signature": "치즈 쭉 늘어나는 통모짜핫도그"
      }
    ];

    /* =====================================================================
       2. APP STATE MANAGEMENT
       ===================================================================== */
    const state = {
      temperature: 12,
      weather: "맑음",
      partySize: 2,
      category: null, // "한식", "일식", "양식", "상관없음"
      includeOthers: true,
      selectedVibes: new Set(),
      scoredList: [],
      currentListFilter: "all"
    };

    /* =====================================================================
       3. DOM ELEMENTS
       ===================================================================== */
    const tempSlider = document.getElementById("tempSlider");
    const tempVal = document.getElementById("tempVal");
    const tempStatusBadge = document.getElementById("tempStatusBadge");
    const tempVisualBox = document.getElementById("tempVisualBox");
    const weatherButtons = document.querySelectorAll(".weather-btn");
    const btnSyncWeather = document.getElementById("btnSyncWeather");

    const btnMinus = document.getElementById("btnMinus");
    const btnPlus = document.getElementById("btnPlus");
    const partyVal = document.getElementById("partyVal");
    const partyDesc = document.getElementById("partyDesc");

    const categoryCards = document.querySelectorAll(".category-card");
    const chipIncludeOthers = document.getElementById("chipIncludeOthers");
    const vibeChips = document.querySelectorAll(".vibe-chip");

    const btnRecommend = document.getElementById("btnRecommend");
    const validationToast = document.getElementById("validationToast");
    const validationMsg = document.getElementById("validationMsg");

    const resultsSection = document.getElementById("resultsSection");
    const resultConditionPills = document.getElementById("resultConditionPills");
    const resultCountText = document.getElementById("resultCountText");
    const bestPickContainer = document.getElementById("bestPickContainer");
    const storeListContainer = document.getElementById("storeListContainer");
    const rankTotalCount = document.getElementById("rankTotalCount");
    const listFilterButtons = document.querySelectorAll(".filter-chip-btn");

    const btnResetFilters = document.getElementById("btnResetFilters");
    const btnCopyResult = document.getElementById("btnCopyResult");
    const btnScrollTop = document.getElementById("btnScrollTop");

    // Modal elements
    const rouletteModal = document.getElementById("rouletteModal");
    const btnOpenRoulette = document.getElementById("btnOpenRoulette");
    const btnCloseRoulette = document.getElementById("btnCloseRoulette");
    const btnSpinWheel = document.getElementById("btnSpinWheel");
    const rouletteCanvas = document.getElementById("rouletteCanvas");
    const rouletteResultBox = document.getElementById("rouletteResultBox");
    const rouletteWinnerName = document.getElementById("rouletteWinnerName");
    const rouletteWinnerDesc = document.getElementById("rouletteWinnerDesc");

    /* =====================================================================
       4. INTERACTION LOGIC: TEMPERATURE & WEATHER
       ===================================================================== */
    function updateTemperatureUI(temp) {
      state.temperature = parseInt(temp, 10);
      tempVal.textContent = state.temperature;

      let badgeText = "";
      let tempColor = "#0056b3";
      let bgTint = "#f8fafc";

      if (state.temperature <= -5) {
        badgeText = "🥶 꽁꽁 얼어붙는 한파! 칼바람 주의";
        tempColor = "#1e40af";
        bgTint = "#eff6ff";
      } else if (state.temperature <= 6) {
        badgeText = "🧣 쌀쌀하고 추운 날씨! 따끈한 국물 생각나는 날";
        tempColor = "#2563eb";
        bgTint = "#f0f7ff";
      } else if (state.temperature <= 17) {
        badgeText = "🌤️ 걷기 딱 좋은 선선하고 쾌적한 날씨";
        tempColor = "#0d9488";
        bgTint = "#f0fdfa";
      } else if (state.temperature <= 27) {
        badgeText = "☀️ 따스하고 포근한 날씨! 산책하기 좋아요";
        tempColor = "#d97706";
        bgTint = "#fffbeb";
      } else {
        badgeText = "🥵 푹푹 찌는 폭염! 시원한 음식 & 가까운 곳 필수";
        tempColor = "#dc2626";
        bgTint = "#fef2f2";
      }

      tempStatusBadge.textContent = badgeText;
      tempVal.style.color = tempColor;
      tempVisualBox.style.background = bgTint;
    }

    tempSlider.addEventListener("input", (e) => {
      updateTemperatureUI(e.target.value);
    });

    weatherButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        weatherButtons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        state.weather = btn.dataset.weather;
      });
    });

    // Realtime weather sync (with fallback simulation for Incheon)
    btnSyncWeather.addEventListener("click", () => {
      btnSyncWeather.innerHTML = "<span>⏳</span> <span>인하대 기상 데이터 확인 중...</span>";
      setTimeout(() => {
        // Current seasonal realism or random sample
        const month = new Date().getMonth() + 1;
        let sampleTemp = 12;
        let sampleWeather = "맑음";

        if (month >= 12 || month <= 2) {
          sampleTemp = -2;
          sampleWeather = Math.random() > 0.5 ? "맑음" : "눈";
        } else if (month >= 3 && month <= 5) {
          sampleTemp = 14;
          sampleWeather = "맑음";
        } else if (month >= 6 && month <= 8) {
          sampleTemp = 29;
          sampleWeather = Math.random() > 0.4 ? "맑음" : "비";
        } else {
          sampleTemp = 11;
          sampleWeather = "맑음";
        }

        tempSlider.value = sampleTemp;
        updateTemperatureUI(sampleTemp);

        weatherButtons.forEach((b) => {
          b.classList.toggle("active", b.dataset.weather === sampleWeather);
        });
        state.weather = sampleWeather;

        btnSyncWeather.innerHTML = "<span>✅</span> <span>인하대 후문 날씨 동기화 완료!</span>";
        setTimeout(() => {
          btnSyncWeather.innerHTML = "<span>⚡</span> <span>현재 인천 미추홀구(인하대) 실시간 날씨 자동 동기화</span>";
        }, 2200);
      }, 500);
    });

    /* =====================================================================
       5. INTERACTION LOGIC: PARTY SIZE (+ / -)
       ===================================================================== */
    function updatePartyUI(size) {
      state.partySize = Math.max(1, Math.min(8, size));
      partyVal.textContent = state.partySize;

      let desc = "";
      if (state.partySize === 1) {
        desc = "👤 혼밥러를 위한 아늑하고 빠른 곳";
      } else if (state.partySize === 2) {
        desc = "👥 친구·동기와 오붓한 2인";
      } else if (state.partySize <= 4) {
        desc = "👨‍👩‍👦 삼삼오오 3~4인 꿀조합";
      } else {
        desc = "👨‍👩‍👧‍👦 다인원·동아리·단체 회식 모임";
      }
      partyDesc.textContent = desc;

      btnMinus.disabled = state.partySize <= 1;
      btnPlus.disabled = state.partySize >= 8;
    }

    btnMinus.addEventListener("click", () => {
      updatePartyUI(state.partySize - 1);
    });
    btnPlus.addEventListener("click", () => {
      updatePartyUI(state.partySize + 1);
    });

    /* =====================================================================
       6. INTERACTION LOGIC: CATEGORY & VIBE CHIPS
       ===================================================================== */
    categoryCards.forEach((card) => {
      card.addEventListener("click", () => {
        categoryCards.forEach((c) => c.classList.remove("active"));
        card.classList.add("active");
        state.category = card.dataset.category;

        // Clear error styling if active
        document.getElementById("categoryCard").classList.remove("error-highlight");
        validationToast.classList.remove("show");
      });
    });

    chipIncludeOthers.addEventListener("click", () => {
      state.includeOthers = !state.includeOthers;
      chipIncludeOthers.classList.toggle("active", state.includeOthers);
      chipIncludeOthers.textContent = state.includeOthers ? "전체에 함께 포함 (ON)" : "전체에서 제외 (OFF)";
    });

    vibeChips.forEach((chip) => {
      chip.addEventListener("click", () => {
        const vibe = chip.dataset.vibe;
        if (state.selectedVibes.has(vibe)) {
          state.selectedVibes.delete(vibe);
          chip.classList.remove("active");
        } else {
          state.selectedVibes.add(vibe);
          chip.classList.add("active");
        }
      });
    });

    /* =====================================================================
       7. RECOMMENDATION & REASONING ENGINE (CORE ALGORITHM)
       ===================================================================== */
    function calculateRecommendation(store, inputs) {
      let score = 50; // base score
      const reasons = [];

      const temp = inputs.temperature;
      const weather = inputs.weather;
      const party = inputs.partySize;
      const category = inputs.category;
      const vibes = inputs.selectedVibes;

      // 1) Category Compatibility Check
      let isCategoryMatch = false;
      if (category === "상관없음") {
        if (["한식", "일식", "양식"].includes(store.category)) {
          isCategoryMatch = true;
          score += 20;
        } else if (inputs.includeOthers) {
          isCategoryMatch = true;
          score += 18;
        }
      } else if (category === store.category) {
        isCategoryMatch = true;
        score += 30;
      }

      if (!isCategoryMatch) {
        return null; // Excluded if specific category doesn't match
      }

      // 2) Party Size Scoring
      if (party >= store.min_party && party <= store.max_party) {
        score += 20;
        if (party === 1 && store.purpose_tags.includes("혼밥")) {
          score += 15;
          reasons.push("혼자 방문해도 전혀 부담 없는 편안한 1인 좌석 구비");
        } else if (party >= 4 && (store.purpose_tags.includes("다인원") || store.purpose_tags.includes("단체회식"))) {
          score += 20;
          reasons.push(`${party}명이 함께 둘러앉을 수 있는 넉넉한 단체 테이블 완비`);
        } else {
          reasons.push(`${party}인 방문에 최적화된 테이블 및 안정적인 회전율(${store.turnover_speed})`);
        }
      } else if (party < store.min_party) {
        score -= 35; // Too few people for this store (e.g. 1 person going to 찜닭)
        reasons.push(`최소 ${store.min_party}인 이상 방문 권장 매장`);
      } else if (party > store.max_party) {
        score -= 40; // Too many people
        reasons.push(`최대 ${store.max_party}인 수용으로 자리 분리 필요`);
      }

      // 3) Weather & Temperature Logic (Key Requirement)
      const isFreezing = temp <= 4;
      const isChilly = temp > 4 && temp <= 13;
      const isPleasant = temp > 13 && temp <= 25;
      const isHot = temp > 25;

      const isRainingOrSnowing = weather === "비" || weather === "눈";

      // Distance factor
      const walk = store.walk_minutes;

      if (isRainingOrSnowing) {
        if (store.weather_tags.includes("비")) {
          score += 25;
          reasons.push(weather === "비" ? "비 오는 날 진가를 발휘하는 뜨끈하고 든든한 국물·요리" : "눈 내리는 궂은 날 몸을 녹여주는 따뜻한 메뉴");
        }
        if (walk <= 3) {
          score += 22;
          reasons.push(`후문에서 도보 ${walk}분 초근접 거리로 우산 쓰고 이동하기 매우 편리`);
        } else if (walk >= 6) {
          score -= 16;
          reasons.push(`도보 ${walk}분 거리로 빗길 이동 시 다소 거리가 있음`);
        }
      }

      if (isFreezing) {
        // Cold wave
        if (store.weather_tags.includes("추움") || store.weather_tags.includes("비")) {
          score += 28;
          reasons.push(`체감온도 ${temp}°C 혹한기 한파를 따스하게 녹여줄 갓 끓인 탕/찌개 메뉴`);
        }
        if (walk <= 3) {
          score += 18;
          reasons.push(`칼바람 부는 영하 날씨에 딱! 후문 코앞 도보 ${walk}분 컷`);
        } else if (walk >= 5) {
          score -= 12;
        }
      } else if (isChilly) {
        if (store.weather_tags.includes("추움")) {
          score += 15;
          reasons.push(`쌀쌀한 기온(${temp}°C)에 속을 든든하게 채워주는 안성맞춤 식사`);
        }
      } else if (isPleasant) {
        score += 10;
        if (walk >= 5 && walk <= 7) {
          score += 8;
          reasons.push(`맑고 쾌적한 날씨(${temp}°C) 덕분에 기분 좋게 문화의거리 산책 겸 다녀오기 제격`);
        }
      } else if (isHot) {
        if (store.weather_tags.includes("더움")) {
          score += 30;
          reasons.push(`무더위(${temp}°C)를 날려줄 시원한 메뉴 & 빵빵한 에어컨 완비`);
        }
        if (walk <= 3) {
          score += 20;
          reasons.push(`뙤약볕 더위에 땀 흘릴 걱정 없는 도보 ${walk}분 초근접 위치`);
        } else if (walk >= 6) {
          score -= 20;
          reasons.push(`폭염 날씨에 도보 ${walk}분 이동은 다소 땀이 날 수 있음`);
        }
      }

      // 4) 10 Mood / Atmosphere Vibe Scoring
      let vibeHitCount = 0;
      vibes.forEach((vibe) => {
        if (vibe === "가성비" && store.purpose_tags.some(t => t.includes("가성비"))) {
          score += 20;
          vibeHitCount++;
          reasons.push("대학생 지갑 사정을 지켜주는 훌륭한 가성비");
        }
        if (vibe === "밥약" && store.purpose_tags.includes("밥약")) {
          score += 20;
          vibeHitCount++;
          reasons.push("선후배·동기 밥약 장소로 실패 없는 호불호 없는 맛");
        }
        if (vibe === "혼밥" && store.purpose_tags.includes("혼밥")) {
          score += 20;
          vibeHitCount++;
        }
        if (vibe === "데이트" && store.purpose_tags.includes("데이트")) {
          score += 22;
          vibeHitCount++;
          reasons.push("감성적인 무드와 정갈한 플레이팅으로 데이트 식사 추천");
        }
        if (vibe === "다인원" && (store.purpose_tags.includes("다인원") || store.purpose_tags.includes("단체회식"))) {
          score += 20;
          vibeHitCount++;
        }
        if (vibe === "해장" && store.purpose_tags.includes("해장")) {
          score += 25;
          vibeHitCount++;
          reasons.push("속 쓰림을 한 번에 리셋해주는 시원하고 얼큰한 해장 국물");
        }
        if (vibe === "스피드" && store.turnover_speed === "빠름") {
          score += 22;
          vibeHitCount++;
          reasons.push("주문 즉시 빠르게 나오는 초고속 회전율로 연강 전 20분 컷 가능");
        }
        if (vibe === "고기보양" && (store.signature.includes("갈비") || store.signature.includes("삼겹") || store.signature.includes("보쌈") || store.signature.includes("찜닭") || store.signature.includes("닭갈비") || store.signature.includes("카츠") || store.purpose_tags.includes("든든함"))) {
          score += 20;
          vibeHitCount++;
          reasons.push("육류 중심의 단백질 충전과 푸짐한 포만감 보장");
        }
        if (vibe === "매운맛" && (store.purpose_tags.includes("매운맛") || store.signature.includes("매운") || store.signature.includes("마라") || store.name.includes("엽기") || store.name.includes("신전") || store.name.includes("지지고"))) {
          score += 22;
          vibeHitCount++;
          reasons.push("중독성 강한 매콤한 양념으로 학업 스트레스 완벽 해소");
        }
        if (vibe === "간식분식" && (store.category === "분식" || store.category === "패스트푸드" || store.purpose_tags.includes("간식") || store.purpose_tags.includes("가벼운"))) {
          score += 20;
          vibeHitCount++;
          reasons.push("부담 없이 깔끔하게 즐기는 산뜻하고 간편한 식사");
        }
      });

      // Normalize score to percentage (60% ~ 99%)
      const matchPercentage = Math.min(99, Math.max(62, Math.round(score * 0.75 + (vibeHitCount * 3))));

      // Compose final integrated reason text
      const distinctReasons = Array.from(new Set(reasons));
      let compositeReason = distinctReasons.slice(0, 3).join(". ");
      if (!compositeReason) {
        compositeReason = `인하대 후문 도보 ${store.walk_minutes}분 거리로 오늘 날씨와 ${party}인 점심 식사에 쾌적하게 어울리는 메뉴입니다.`;
      } else {
        compositeReason += ".";
      }

      return {
        ...store,
        matchScore: matchPercentage,
        rawScore: score,
        reasonSummary: compositeReason
      };
    }

    /* =====================================================================
       8. SUBMISSION & VALIDATION LOGIC
       ===================================================================== */
    btnRecommend.addEventListener("click", () => {
      // Validation: Category MUST be chosen
      if (!state.category) {
        validationMsg.textContent = "어떤 메뉴가 당기시나요? 음식 카테고리(한식, 일식, 양식, 상관없음)를 선택해주세요!";
        validationToast.classList.add("show");

        const categoryCard = document.getElementById("categoryCard");
        categoryCard.classList.add("error-highlight");
        categoryCard.scrollIntoView({ behavior: "smooth", block: "center" });

        // Remove error highlight after 1.5s
        setTimeout(() => {
          categoryCard.classList.remove("error-highlight");
        }, 1500);
        return;
      }

      validationToast.classList.remove("show");

      // Score all matching restaurants
      const results = [];
      STORE_DATABASE.forEach((store) => {
        const item = calculateRecommendation(store, state);
        if (item) {
          results.push(item);
        }
      });

      // Sort descending by matchScore
      results.sort((a, b) => b.matchScore - a.matchScore || a.walk_minutes - b.walk_minutes);
      state.scoredList = results;

      // Render UI
      renderResultsUI(results);

      // Smooth scroll to results
      resultsSection.style.display = "block";
      resultsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    /* =====================================================================
       9. RESULTS RENDERING
       ===================================================================== */
    function renderResultsUI(results) {
      // 1. Condition Pills
      resultConditionPills.innerHTML = "";
      const pills = [
        `🌡️ ${state.temperature}°C (${state.weather})`,
        `👥 ${state.partySize}인 방문`,
        `🍽️ ${state.category} 선호`
      ];
      state.selectedVibes.forEach(v => pills.push(`✨ ${v}`));

      pills.forEach(p => {
        const span = document.createElement("span");
        span.className = "cond-pill";
        span.textContent = p;
        resultConditionPills.appendChild(span);
      });

      resultCountText.textContent = `총 ${STORE_DATABASE.length}곳 중 조건에 부합하는 ${results.length}곳의 맛집을 엄선했습니다.`;
      rankTotalCount.textContent = `총 ${results.length}곳`;

      if (results.length === 0) {
        bestPickContainer.innerHTML = `
          <div class="card" style="text-align: center; padding: 40px 20px;">
            <div style="font-size: 3rem; margin-bottom: 12px;">🔎</div>
            <h3 style="font-size: 1.2rem; font-weight: 800;">조건에 맞는 식당을 찾지 못했습니다</h3>
            <p style="color: var(--text-muted); margin-top: 6px;">인원수 또는 카테고리를 조금 더 넓게 조정해보세요!</p>
          </div>
        `;
        storeListContainer.innerHTML = "";
        return;
      }

      // 2. Render Top 1 (BEST PICK)
      const topPick = results[0];
      const searchUrl = `https://map.naver.com/v5/search/인하대%20후문%20${encodeURIComponent(topPick.name)}`;

      bestPickContainer.innerHTML = `
        <div class="best-card">
          <div class="best-crown-badge">👑 오늘의 원픽 (TOP 1)</div>
          <div class="best-card-header">
            <div class="best-rank-circle">1</div>
            <div class="best-info">
              <div class="best-title-row">
                <span class="best-name">${escapeHTML(topPick.name)}</span>
                <span class="best-cat">${escapeHTML(topPick.category)}</span>
              </div>
              <div class="best-score-pill">
                <span>🔥 적합도 매칭률</span>
                <strong>${topPick.matchScore}%</strong>
              </div>
            </div>
          </div>

          <div class="meta-badges">
            <span class="meta-pill">🚶 후문 도보 <strong>${topPick.walk_minutes}분</strong></span>
            <span class="meta-pill">👥 적정 인원 <strong>${topPick.min_party}~${topPick.max_party}인</strong></span>
            <span class="meta-pill">⚡ 회전율 <strong>${escapeHTML(topPick.turnover_speed)}</strong></span>
            <span class="meta-pill">🍽️ 대표 <strong>${escapeHTML(topPick.signature)}</strong></span>
          </div>

          <div class="reason-box">
            <div class="reason-box-title">
              <span>💡</span>
              <span>오늘 이 식당을 가장 강력 추천하는 이유</span>
            </div>
            <div class="reason-text">${escapeHTML(topPick.reasonSummary)}</div>
          </div>

          <div class="best-card-actions">
            <a href="${searchUrl}" target="_blank" rel="noopener noreferrer" class="card-action-btn primary">
              <span>🗺️</span>
              <span>네이버 지도 위치 & 길찾기</span>
            </a>
            <button type="button" class="card-action-btn" onclick="shareStore('${escapeJS(topPick.name)}')">
              <span>🔗</span>
              <span>식당 공유하기</span>
            </button>
          </div>
        </div>
      `;

      // 3. Render Ranked List (2nd place and beyond)
      renderFilteredStoreList();
    }

    function renderFilteredStoreList() {
      const filter = state.currentListFilter;
      let list = state.scoredList.slice(1); // Exclude #1 from list or show from #2

      if (filter === "close") {
        list = list.filter(item => item.walk_minutes <= 3);
      } else if (filter === "fast") {
        list = list.filter(item => item.turnover_speed === "빠름");
      } else if (filter === "value") {
        list = list.filter(item => item.purpose_tags.some(t => t.includes("가성비")));
      }

      if (list.length === 0) {
        storeListContainer.innerHTML = `
          <div style="text-align: center; padding: 28px; color: var(--text-muted); background: #ffffff; border-radius: var(--radius-sm); border: 1px dashed var(--border);">
            해당 조건의 식당이 없습니다. 다른 필터를 선택해보세요.
          </div>
        `;
        return;
      }

      let html = "";
      list.forEach((store, index) => {
        const rank = index + 2;
        const searchUrl = `https://map.naver.com/v5/search/인하대%20후문%20${encodeURIComponent(store.name)}`;

        html += `
          <div class="store-card">
            <div class="store-header">
              <div class="store-header-left">
                <span class="store-rank-badge ${rank <= 3 ? 'top3' : ''}">${rank}위</span>
                <span class="store-name">${escapeHTML(store.name)}</span>
                <span class="store-cat">${escapeHTML(store.category)}</span>
              </div>
              <span class="store-score">매칭 ${store.matchScore}%</span>
            </div>

            <div class="store-tags">
              <span class="tag-badge walk">🚶 도보 ${store.walk_minutes}분</span>
              <span class="tag-badge">👥 ${store.min_party}~${store.max_party}인</span>
              <span class="tag-badge speed">⚡ 회전율 ${escapeHTML(store.turnover_speed)}</span>
              ${store.purpose_tags.map(t => `<span class="tag-badge">#${escapeHTML(t)}</span>`).join("")}
            </div>

            <div class="store-reason">
              <strong>추천 이유:</strong> ${escapeHTML(store.reasonSummary)} (대표 메뉴: ${escapeHTML(store.signature)})
            </div>

            <div class="store-footer">
              <a href="${searchUrl}" target="_blank" rel="noopener noreferrer" class="mini-link">
                <span>📍 지도 보기</span>
              </a>
              <button type="button" class="mini-link" style="background:none; border:none; cursor:pointer;" onclick="shareStore('${escapeJS(store.name)}')">
                <span>🔗 공유</span>
              </button>
            </div>
          </div>
        `;
      });

      storeListContainer.innerHTML = html;
    }

    listFilterButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        listFilterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        state.currentListFilter = btn.dataset.filter;
        renderFilteredStoreList();
      });
    });

    /* =====================================================================
       10. UTILITIES & ACTIONS (ROULETTE, SHARE, RESET, SCROLL TOP)
       ===================================================================== */
    btnResetFilters.addEventListener("click", () => {
      document.getElementById("inputSection").scrollIntoView({ behavior: "smooth" });
    });

    btnCopyResult.addEventListener("click", () => {
      if (state.scoredList.length === 0) return;
      const top = state.scoredList[0];
      const text = `[인하대 후문 점심 추천]\n오늘 ${state.temperature}°C ${state.weather} 날씨 1위 추천은 '${top.name}'(${top.category})입니다!\n매칭률: ${top.matchScore}%\n추천 이유: ${top.reasonSummary}`;

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
          alert("📋 추천 결과가 클립보드에 복사되었습니다!\n친구에게 공유해보세요.");
        }).catch(() => {
          prompt("아래 텍스트를 복사하세요:", text);
        });
      } else {
        prompt("아래 텍스트를 복사하세요:", text);
      }
    });

    window.shareStore = function(name) {
      const url = `https://map.naver.com/v5/search/인하대%20후문%20${encodeURIComponent(name)}`;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(`${name} - 인하대 후문 위치: ${url}`).then(() => {
          alert(`'${name}' 정보가 복사되었습니다! 카톡에 공유해보세요.`);
        });
      } else {
        window.open(url, '_blank');
      }
    };

    // Scroll Top Button
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        btnScrollTop.classList.add("show");
      } else {
        btnScrollTop.classList.remove("show");
      }
    });
    btnScrollTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    /* =====================================================================
       11. ROULETTE WHEEL IMPLEMENTATION (Top 5 items)
       ===================================================================== */
    let wheelCandidates = [];
    let currentWheelRotation = 0;
    let isSpinning = false;
    const wheelColors = ["#f87171", "#60a5fa", "#34d399", "#fbbf24", "#a78bfa"];

    btnOpenRoulette.addEventListener("click", () => {
      if (state.scoredList.length === 0) return;
      wheelCandidates = state.scoredList.slice(0, 5);
      if (wheelCandidates.length < 2) {
        wheelCandidates = state.scoredList.slice(0);
      }
      rouletteResultBox.classList.remove("show");
      rouletteModal.classList.add("open");
      drawRouletteWheel();
    });

    btnCloseRoulette.addEventListener("click", () => {
      if (isSpinning) return;
      rouletteModal.classList.remove("open");
    });
    rouletteModal.addEventListener("click", (e) => {
      if (e.target === rouletteModal && !isSpinning) {
        rouletteModal.classList.remove("open");
      }
    });

    function drawRouletteWheel() {
      const ctx = rouletteCanvas.getContext("2d");
      const numSegments = wheelCandidates.length;
      if (numSegments === 0) return;

      const anglePerSegment = (2 * Math.PI) / numSegments;
      const radius = rouletteCanvas.width / 2;

      ctx.clearRect(0, 0, rouletteCanvas.width, rouletteCanvas.height);

      for (let i = 0; i < numSegments; i++) {
        const startAngle = i * anglePerSegment;
        const endAngle = startAngle + anglePerSegment;

        ctx.beginPath();
        ctx.moveTo(radius, radius);
        ctx.arc(radius, radius, radius, startAngle, endAngle);
        ctx.fillStyle = wheelColors[i % wheelColors.length];
        ctx.fill();
        ctx.stroke();

        // Draw text
        ctx.save();
        ctx.translate(radius, radius);
        ctx.rotate(startAngle + anglePerSegment / 2);
        ctx.textAlign = "right";
        ctx.fillStyle = "#ffffff";
        ctx.font = "bold 13px -apple-system, sans-serif";
        ctx.shadowColor = "rgba(0,0,0,0.5)";
        ctx.shadowBlur = 4;

        // Truncate name if too long
        let label = wheelCandidates[i].name;
        if (label.length > 7) label = label.substring(0, 6) + "…";
        ctx.fillText(label, radius - 20, 5);
        ctx.restore();
      }
    }

    btnSpinWheel.addEventListener("click", () => {
      if (isSpinning || wheelCandidates.length === 0) return;
      isSpinning = true;
      btnSpinWheel.disabled = true;
      rouletteResultBox.classList.remove("show");

      const numSegments = wheelCandidates.length;
      const selectedIndex = Math.floor(Math.random() * numSegments);

      // Degree calculation
      const segmentAngleDeg = 360 / numSegments;
      // Pointer is at the top (270 degrees in standard canvas or top offset)
      // We want selected segment center to land under the pointer at 270 deg
      const extraSpins = 360 * 5; // 5 full rotations
      const targetSegmentAngle = (selectedIndex * segmentAngleDeg) + (segmentAngleDeg / 2);
      // To align with top pointer (which is at -90deg or 270deg):
      const finalRotation = extraSpins + (360 - targetSegmentAngle) + 270;

      currentWheelRotation += finalRotation;
      rouletteCanvas.style.transform = `rotate(${currentWheelRotation}deg)`;

      setTimeout(() => {
        isSpinning = false;
        btnSpinWheel.disabled = false;

        const winner = wheelCandidates[selectedIndex];
        rouletteWinnerName.textContent = winner.name;
        rouletteWinnerDesc.textContent = `${winner.category} | ${winner.signature} (후문 도보 ${winner.walk_minutes}분)`;
        rouletteResultBox.classList.add("show");
      }, 4100);
    });

    /* =====================================================================
       12. SECURITY HELPERS
       ===================================================================== */
    function escapeHTML(str) {
      if (!str) return "";
      return String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
    }

    function escapeJS(str) {
      if (!str) return "";
      return String(str).replace(/'/g, "\\'").replace(/"/g, '\\"');
    }

    // Initial setup
    updateTemperatureUI(12);
    updatePartyUI(2);
