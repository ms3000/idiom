# Idiom Daily PWA

이 디렉터리는 단일 HTML 기반 웹앱을 **설치 가능한 PWA**로 구성한 예시입니다.

## 파일 구성
- `index.html`: 메인 페이지 (manifest 링크 & 설치 버튼 포함)
- `manifest.json`: 웹 앱 매니페스트 (필수 필드 포함)
- `sw.js`: 서비스 워커 (네트워크 우선 + 오프라인 폴백)
- `app.js`: 설치 프롬프트 & 서비스 워커 등록
- `offline.html`: 오프라인 안내 페이지
- `icons/icon-192.png`, `icons/icon-512.png`: PWA 아이콘

## 로컬 테스트
1. 간단한 정적 서버에서 실행(예: `python -m http.server`)
2. `http://localhost:8000` 접속
3. Chrome 주소창의 설치 아이콘 또는 페이지의 "앱 설치하기" 버튼 클릭

## 배포
Vercel에 정적 사이트로 배포하면 HTTPS 제공으로 설치 기준을 만족합니다.
