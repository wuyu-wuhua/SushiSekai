// Fullscreen functionality
document.addEventListener('DOMContentLoaded', function() {
    const fullscreenBtn = document.getElementById('fullscreenBtn');
    const gameContainer = document.querySelector('.game-container');
    const iframe = document.querySelector('iframe');

    fullscreenBtn.addEventListener('click', function() {
        if (!document.fullscreenElement) {
            if (gameContainer.requestFullscreen) {
                gameContainer.requestFullscreen();
            } else if (gameContainer.webkitRequestFullscreen) {
                gameContainer.webkitRequestFullscreen();
            } else if (gameContainer.msRequestFullscreen) {
                gameContainer.msRequestFullscreen();
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        }
    });
});

// Language switching functionality
const translations = {
    en: {
        features: "Features",
        howToPlay: "How to Play",
        strategy: "Strategy",
        team: "Team",
        history: "History",
        reviews: "Reviews",
        fullscreen: "Fullscreen",
        gameStrategy: "Game Strategy Guide",
        beginnersGuide: "Beginner's Guide",
        advancedTechniques: "Advanced Techniques",
        restaurantManagement: "Restaurant Management Tips",
        creativeTeam: "Our Creative Team",
        leadDeveloper: "Lead Developer",
        artDirector: "Art Director",
        gameDesigner: "Game Designer",
        gameHistory: "Game Development History",
        ideaBorn: "The Idea Was Born",
        developmentBegins: "Development Begins",
        alphaTesting: "Alpha Testing",
        betaRelease: "Beta Release",
        officialLaunch: "Official Launch",
        whatPlayersLove: "What Players Love About Our Game",
        whyPlayersLove: "Why Players Love Our Game",
        authenticExperience: "Authentic Japanese Experience",
        relaxingGameplay: "Relaxing Gameplay",
        educationalValue: "Educational Value",
        progressionSystem: "Progression System",
        perfectBalance: "Perfect Balance of Challenge and Fun",
        beautifulVisuals: "Beautiful Visuals and Sound Design",
        regularUpdates: "Regular Updates and New Content",
        communityFeatures: "Community and Social Features"
    },
    zh: {
        features: "游戏特色",
        howToPlay: "游戏玩法",
        strategy: "游戏攻略",
        team: "创作团队",
        history: "发展历史",
        reviews: "玩家评价",
        fullscreen: "全屏",
        gameStrategy: "游戏攻略指南",
        beginnersGuide: "新手入门",
        advancedTechniques: "高级技巧",
        restaurantManagement: "餐厅管理技巧",
        creativeTeam: "我们的创意团队",
        leadDeveloper: "首席开发",
        artDirector: "艺术总监",
        gameDesigner: "游戏设计师",
        gameHistory: "游戏发展历史",
        ideaBorn: "创意诞生",
        developmentBegins: "开发开始",
        alphaTesting: "内测阶段",
        betaRelease: "公测发布",
        officialLaunch: "正式发布",
        whatPlayersLove: "玩家喜欢什么",
        whyPlayersLove: "玩家为什么喜欢",
        authenticExperience: "真实的日本体验",
        relaxingGameplay: "轻松的游戏体验",
        educationalValue: "教育价值",
        progressionSystem: "进阶系统",
        perfectBalance: "挑战与乐趣的完美平衡",
        beautifulVisuals: "精美的视觉效果和音效设计",
        regularUpdates: "定期更新和新内容",
        communityFeatures: "社区和社交功能"
    },
    ja: {
        features: "ゲーム特徴",
        howToPlay: "遊び方",
        strategy: "攻略",
        team: "開発チーム",
        history: "開発履歴",
        reviews: "プレイヤーレビュー",
        fullscreen: "全画面",
        gameStrategy: "ゲーム攻略ガイド",
        beginnersGuide: "初心者ガイド",
        advancedTechniques: "上級テクニック",
        restaurantManagement: "レストラン経営のヒント",
        creativeTeam: "クリエイティブチーム",
        leadDeveloper: "リード開発者",
        artDirector: "アートディレクター",
        gameDesigner: "ゲームデザイナー",
        gameHistory: "ゲーム開発履歴",
        ideaBorn: "アイデアの誕生",
        developmentBegins: "開発開始",
        alphaTesting: "アルファテスト",
        betaRelease: "ベータリリース",
        officialLaunch: "正式リリース",
        whatPlayersLove: "プレイヤーが好きな点",
        whyPlayersLove: "プレイヤーが好きな理由",
        authenticExperience: "本格的な日本体験",
        relaxingGameplay: "リラックスできるゲームプレイ",
        educationalValue: "教育的価値",
        progressionSystem: "進行システム",
        perfectBalance: "チャレンジと楽しさの完璧なバランス",
        beautifulVisuals: "美しいビジュアルとサウンドデザイン",
        regularUpdates: "定期的な更新と新コンテンツ",
        communityFeatures: "コミュニティとソーシャル機能"
    },
    ko: {
        features: "게임 특징",
        howToPlay: "게임 방법",
        strategy: "게임 전략",
        team: "개발 팀",
        history: "개발 역사",
        reviews: "플레이어 리뷰",
        fullscreen: "전체화면",
        gameStrategy: "게임 전략 가이드",
        beginnersGuide: "초보자 가이드",
        advancedTechniques: "고급 기법",
        restaurantManagement: "레스토랑 관리 팁",
        creativeTeam: "창의적 팀",
        leadDeveloper: "리드 개발자",
        artDirector: "아트 디렉터",
        gameDesigner: "게임 디자이너",
        gameHistory: "게임 개발 역사",
        ideaBorn: "아이디어 탄생",
        developmentBegins: "개발 시작",
        alphaTesting: "알파 테스트",
        betaRelease: "베타 릴리스",
        officialLaunch: "공식 출시",
        whatPlayersLove: "플레이어가 좋아하는 점",
        whyPlayersLove: "플레이어가 좋아하는 이유",
        authenticExperience: "진정한 일본 경험",
        relaxingGameplay: "편안한 게임플레이",
        educationalValue: "교육적 가치",
        progressionSystem: "진행 시스템",
        perfectBalance: "도전과 재미의 완벽한 균형",
        beautifulVisuals: "아름다운 시각 효과와 사운드 디자인",
        regularUpdates: "정기적인 업데이트와 새로운 콘텐츠",
        communityFeatures: "커뮤니티와 소셜 기능"
    },
    es: {
        features: "Características",
        howToPlay: "Cómo Jugar",
        strategy: "Estrategia",
        team: "Equipo",
        history: "Historia",
        reviews: "Reseñas",
        fullscreen: "Pantalla Completa",
        gameStrategy: "Guía de Estrategia del Juego",
        beginnersGuide: "Guía para Principiantes",
        advancedTechniques: "Técnicas Avanzadas",
        restaurantManagement: "Consejos de Gestión de Restaurante",
        creativeTeam: "Nuestro Equipo Creativo",
        leadDeveloper: "Desarrollador Principal",
        artDirector: "Director de Arte",
        gameDesigner: "Diseñador del Juego",
        gameHistory: "Historia del Desarrollo del Juego",
        ideaBorn: "Nacimiento de la Idea",
        developmentBegins: "Comienza el Desarrollo",
        alphaTesting: "Pruebas Alfa",
        betaRelease: "Lanzamiento Beta",
        officialLaunch: "Lanzamiento Oficial",
        whatPlayersLove: "Lo que los Jugadores Aman de Nuestro Juego",
        whyPlayersLove: "Por Qué los Jugadores Aman Nuestro Juego",
        authenticExperience: "Experiencia Japonesa Auténtica",
        relaxingGameplay: "Jugabilidad Relajante",
        educationalValue: "Valor Educativo",
        progressionSystem: "Sistema de Progresión",
        perfectBalance: "Balance Perfecto entre Desafío y Diversión",
        beautifulVisuals: "Visuales y Diseño de Sonido Hermosos",
        regularUpdates: "Actualizaciones Regulares y Nuevo Contenido",
        communityFeatures: "Características Comunitarias y Sociales"
    }
};

document.getElementById('languageSelector').addEventListener('change', function(e) {
    const language = e.target.value;
    document.documentElement.lang = language;
    
    // Update text content based on selected language
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[language] && translations[language][key]) {
            element.textContent = translations[language][key];
        }
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
}); 