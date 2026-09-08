# 출처 및 제3자 자료

## Wanted Montage

- 공식 소개: https://montage.wanted.co.kr/
- 원본 소스: https://github.com/wanteddev/montage-web
- 최초 도입 revision: `bfced87f96dfb21c8ea80074c551b64b9ed1530b`
- 원본 라이선스: https://github.com/wanteddev/montage-web/blob/bfced87f96dfb21c8ea80074c551b64b9ed1530b/LICENSE.md
- 라이선스: MIT, Copyright (c) 2026 Wanted Lab, Inc.
- 공식 FAQ의 출처 표기 예시: 디자인 시스템: Montage by Wantedlab (MIT)

포함한 소스와 문서의 원본 저작권 및 허가 고지는 `LICENSE.md`에 보존했습니다. 사용·수정·재배포 시 해당 고지를 포함해야 합니다. 로컬 개작분도 같은 MIT 조건으로 제공합니다. Wanted 로고나 공식 제휴를 나타내는 배지로 이 프로젝트를 홍보하지 않습니다.

## 포함 범위

중립 UI 코드, 토큰, 아이콘 소스, 테스트, 디자인 문서와 로컬 구성 지침을 포함했습니다. 비공개 브랜드 자산, 고객 자료, 화면 캡처, 폰트 바이너리, 원본 웹사이트 이미지 및 Figma 파일은 배포하지 않습니다. `docs/data`의 외부 이미지·웹페이지 링크는 참고 링크이며 해당 자료의 재배포 허가를 뜻하지 않습니다.

런타임 의존성은 pnpm으로 설치하며 각각의 라이선스가 적용됩니다. `node_modules`는 저장소에 포함하지 않습니다. 사용 문서에 있는 [Pretendard](https://github.com/orioncactus/pretendard) CDN 링크는 외부 폰트 참조이며, 해당 폰트는 [SIL Open Font License 1.1](https://github.com/orioncactus/pretendard/blob/main/LICENSE)의 조건을 따릅니다. 폰트 파일을 별도 배포할 때는 해당 고지도 함께 보존해야 합니다. 외부 이미지나 다른 폰트를 추가하는 사용자는 각 자료의 사용 조건을 확인해야 합니다.

2026-09-08에 공식 사이트 FAQ와 위 revision의 MIT 고지를 확인했습니다. 이 문서는 확인한 배포 범위를 설명하며 개별 사용 상황에 대한 법률 판단을 대신하지 않습니다.

## 콘텐츠·덱 템플릿과 실행 파일

템플릿 구성과 자체 지침, Sample Studio 임시 로고는 이 공개본의 추가 자료입니다. 예시 브랜드·인물·장소·수치는 가상 배치 자료이며 실제 사업 성과를 나타내지 않습니다. 외부 참고 자료는 링크와 구성 원칙으로 안내하며, 원문 기사나 사례 이미지를 배포하지 않습니다.

각 템플릿 폴더의 `support.js`, `image-slot.js`, 덱의 `deck-stage.js`는 사용자가 Claude Design에서 내보낸 HTML 결과물에 동봉된 실행 파일입니다. 파일의 생성·출처 헤더를 보존했으며, 루트 MIT 라이선스로 이 파일들을 새로 허가한다는 의미가 아닙니다. 독립된 오픈소스 라이선스는 확인하지 못했습니다. 배포 맥락은 [Claude Design 공식 안내](https://support.claude.com/en/articles/14604416-get-started-with-claude-design)의 HTML 내보내기 및 [Anthropic 이용약관](https://www.anthropic.com/legal/consumer-terms)의 출력물·제3자 자료 조항을 참고하세요. 런타임 자체를 별도 라이브러리로 재배포할 권한까지 확인했다는 뜻은 아닙니다.

`shared/local-design.global.js`는 포함 패키지에서 생성하는 브라우저 번들입니다. 빌드 시 제3자 라이선스 주석을 보존합니다. 템플릿 런타임이 외부에서 불러오는 React, ReactDOM, Babel에는 각 프로젝트의 라이선스가 적용됩니다.

[Wanted Sans](https://github.com/wanteddev/wanted-sans)도 외부 CDN으로 참조하며 SIL Open Font License 1.1을 따릅니다. 글꼴 바이너리는 저장소에 포함하지 않습니다.
