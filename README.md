# Local Design System

**웹·앱 화면, 소셜 콘텐츠, 발표 자료를 같은 디자인 기반으로 만드는 에이전트용 스킬 모음입니다.**

[원티드 Montage](https://montage.wanted.co.kr/)의 공개 컴포넌트·토큰을 바탕으로 화면 구성 지침, 콘텐츠 템플릿, 슬라이드 제작 방법을 함께 제공합니다. 저장소는 한 번 받되, 작업에 맞는 스킬만 읽어 사용합니다.

| 만들려는 것                             | 사용할 스킬                                      | 포함된 기준과 템플릿                                      |
| --------------------------------------- | ------------------------------------------------ | --------------------------------------------------------- |
| 웹·앱, 랜딩 페이지, 관리자 화면         | [Local Design System](SKILL.md)                  | 정보 우선순위, 실제 컴포넌트 선택, 재사용·조합·확장 판단  |
| 카드뉴스, 피드 이미지, 스토리·릴스 커버 | [Content System](skills/content-system/SKILL.md) | 인스타그램 5개 포맷, 이미지 슬롯, 세이프존 검수           |
| 제안·보고·발표·교육 자료                | [Deck System](skills/deck-system/SKILL.md)       | 목적별 구성, 슬라이드 유형, 1920×1080 템플릿, 렌더링 검수 |

세 스킬의 제작·검수 절차는 분리되어 있고, 색상·타이포그래피·컴포넌트를 공유합니다. 기본 브랜드 **Sample Studio**와 [임시 로고](shared/sample-logo.svg)는 교체용 예시입니다. 실제 고객 자료와 개인용 브랜드 자산은 포함하지 않습니다.

## 시작하기

### 1. 저장소 받기

```bash
git clone https://github.com/seeknowzip/design-system-public.git
cd design-system-public
```

명령이 낯설다면 에이전트에게 저장소 주소를 주고 로컬에 받은 뒤 원하는 스킬을 읽도록 요청하세요. 문서·소스만 읽는 데에는 의존성 설치가 필요 없습니다.

### 2. 템플릿 실행 준비

Node.js 22.12 이상, pnpm 10.19.0, 미리보기용 Python 3가 필요합니다. `.nvmrc`는 Node.js 22.18.0을 지정합니다.

```bash
npm install -g pnpm@10.19.0
pnpm install --frozen-lockfile
pnpm build
pnpm preview
```

`pnpm build`는 패키지와 공통 브라우저 번들 `shared/local-design.global.js`를 생성합니다. `pnpm preview`는 저장소 루트에서 `python3 -m http.server 8791 --bind 127.0.0.1`을 실행합니다. 설치와 CDN 글꼴 로딩에는 인터넷 연결이 필요합니다.

서버가 실행되면 아래 링크를 여세요. HTML 파일을 직접 더블클릭하는 `file://` 방식은 사용하지 않습니다.

- [콘텐츠 템플릿 미리보기](http://127.0.0.1:8791/skills/content-system/instagram/Instagram%20%EC%BD%98%ED%85%90%EC%B8%A0%20%ED%85%9C%ED%94%8C%EB%A6%BF.dc.html)
- [슬라이드 템플릿 미리보기](http://127.0.0.1:8791/skills/deck-system/deck-template/deck-template.dc.html)

React 앱에 컴포넌트를 쓰려면 앱의 빌드 설정·의존성을 별도로 연결해야 합니다. 스킬 등록만으로 앱에 패키지가 자동 설치되지는 않습니다.

### 3. 원하는 작업 요청하기

아래 경로를 실제 내려받은 위치로 바꾸세요.

```text
/path/to/design-system-public/SKILL.md를 읽고 적용해줘.
새 신청과 처리 상태가 먼저 보이는 관리자 화면을 만들어줘.
실제 컴포넌트와 토큰을 확인한 뒤 구성을 제안해줘.
```

```text
/path/to/design-system-public/skills/content-system/SKILL.md를 적용해줘.
첨부한 행사 안내를 인스타그램 피드 이미지로 만들어줘.
템플릿 사본에서 작업하고 세이프존을 확인해줘.
```

```text
/path/to/design-system-public/skills/deck-system/SKILL.md를 적용해줘.
첨부한 자료로 고객 제안 발표를 준비해줘.
먼저 슬라이드별 핵심 메시지와 순서를 잡아줘.
```

콘텐츠·슬라이드는 정본을 수정하지 않고 **템플릿 폴더 전체를 같은 깊이의 작업 폴더로 복사**하면 상대 경로를 유지할 수 있습니다.

```bash
# 새 작업 폴더가 없는 상태에서 실행
cp -R skills/content-system/instagram skills/content-system/output
cp -R skills/deck-system/deck-template skills/deck-system/output
```

사본에는 HTML뿐 아니라 `support.js`, `image-slot.js`, 슬라이드의 `deck-stage.js`, 콘텐츠의 오버레이 파일도 필요합니다. 위 위치에서는 상위 `tokens.css`와 루트 `shared/`를 그대로 참조합니다. 다른 위치로 옮기거나 전달할 때에는 공유 자산도 포함하고 상대 경로를 조정하세요. 실제 문구·수치·사진을 넣은 뒤 브라우저에서 다시 확인합니다.

### 반복해서 쓰려면: 스킬 등록

등록은 선택 사항입니다. 저장소 루트에서 실행하고, 같은 이름이 이미 있다면 덮어쓰지 말고 다른 이름을 사용하세요. 개별 `SKILL.md`만 복사하면 연결된 문서와 자산을 찾을 수 없습니다.

```bash
# Codex
mkdir -p ~/.codex/skills
ln -s "$PWD" ~/.codex/skills/local-design-system
ln -s "$PWD/skills/content-system" ~/.codex/skills/content-system
ln -s "$PWD/skills/deck-system" ~/.codex/skills/deck-system

# Claude Code
mkdir -p ~/.claude/skills
ln -s "$PWD" ~/.claude/skills/local-design-system
ln -s "$PWD/skills/content-system" ~/.claude/skills/content-system
ln -s "$PWD/skills/deck-system" ~/.claude/skills/deck-system
```

## 결과물과 내보내기

콘텐츠는 채널별 이미지 제작용 HTML 템플릿이고, 슬라이드는 브라우저에서 렌더링하는 HTML 덱입니다. 콘텐츠는 세이프존을 끄고 이미지로 캡처하며, 슬라이드는 브라우저 인쇄로 PDF를 만들 수 있습니다. 사용하는 에이전트·브라우저의 캡처 및 내보내기 기능이 필요합니다.

**편집 가능한 네이티브 PPTX를 자동 생성하는 변환기는 포함하지 않습니다.** PPTX가 필요하면 해당 형식을 지원하는 호스트 도구나 별도 제작 절차를 사용해야 합니다. 파일 확장자만 바꿔 PPTX로 전달하지 않습니다.

## 저장소 구성

| 위치                          | 내용                                                      |
| ----------------------------- | --------------------------------------------------------- |
| `SKILL.md`, `guidance/`       | 웹·앱 작업 순서와 화면 구성 기준                          |
| `skills/content-system/`      | 콘텐츠 제작 스킬, 채널 템플릿, 세이프존                   |
| `skills/deck-system/`         | 덱 제작 스킬, 구성 방법, 조판·검수 기준                   |
| `shared/`                     | 공통 토큰 연결, 브라우저 번들, 임시 로고                  |
| `packages/local-design/`      | Gradient, Icon, StatRow, MarketingHero, ItineraryTimeline |
| `packages/wds*`               | Montage 기반 UI·토큰·스타일 엔진·아이콘·Next.js 연동      |
| `packages/eslint-plugin-wds/` | 디자인 시스템용 ESLint 규칙                               |
| `docs/data/`                  | 컴포넌트와 플랫폼 사용 지침                               |

특정 브랜드의 색상·문체·전용 패턴은 프로젝트의 확장 영역에서 관리하세요. 문구를 별도로 다듬고 싶다면 [Writing System](https://github.com/seeknowzip/writing-system-public)을 선택적으로 연결할 수 있습니다.

검증 명령은 `pnpm test:unit`, `pnpm lint`입니다. 템플릿·토큰을 수정했다면 실제 출력 크기에서 줄바꿈·잘림·안전 영역과 내보내기 결과도 확인하세요.

## 출처와 라이선스

기반 소스는 [Wanted Lab의 montage-web](https://github.com/wanteddev/montage-web)이며 **MIT 라이선스**를 따릅니다. [라이선스 전문](LICENSE.md)의 `Copyright (c) 2026 Wanted Lab, Inc.` 표기를 보존했습니다. 개인이 수정한 독립 프로젝트이며 Wanted의 공식 배포나 후원을 의미하지 않습니다.

저장소의 자체 추가 코드·지침과 제3자 자료의 조건은 구분합니다. Claude Design 내보내기에 동봉된 실행 파일과 외부 글꼴까지 루트 MIT로 일괄 재허가하는 것은 아닙니다. 정확한 범위는 [제3자 자료 고지](THIRD_PARTY_NOTICES.md)를 확인하세요.

- [공개본 변경 사항](MODIFICATIONS.md)
- [기반과 확장 경계](FOUNDATION.md)
