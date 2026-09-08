# Local Design System

**AI 에이전트가 실제 컴포넌트와 디자인 기준을 찾아 UI를 만들도록 돕는 로컬 디자인 시스템입니다.**

[원티드 Montage](https://montage.wanted.co.kr/)의 공개 소스를 기반으로, 에이전트가 읽을 작업 순서와 판단 기준을 더했습니다. 원하는 화면을 설명하면 목적에 맞는 컴포넌트를 찾고, 기존 요소로 만들 수 있는지 먼저 살피도록 합니다.

## 이런 작업에 활용할 수 있습니다

- 웹·앱 화면의 색상, 글꼴 크기, 간격을 일관되게 맞출 때
- 랜딩 페이지나 관리자 화면을 만들며 실제 구현 가능한 컴포넌트를 고를 때
- 화면의 정보 순서가 사용 목적에 맞는지 검토할 때
- 별도로 만든 콘텐츠·슬라이드 템플릿에 같은 시각 기준을 적용할 때

작업 목적 → 정보 우선순위 → 실제 컴포넌트 확인 → 재사용·조합·확장의 순서로 진행합니다. 비슷하게 생겼다는 이유만으로 컴포넌트를 고르지 않도록 하는 것이 핵심입니다.

## 시작하기

### 1. 저장소 받기

```bash
git clone https://github.com/seeknowzip/design-system-public.git
cd design-system-public
```

설치 명령이 낯설다면 에이전트에게 이 저장소 주소를 주고 로컬에 받아 `SKILL.md`를 읽어달라고 요청해도 됩니다.

### 2. 먼저 한 작업에 사용하기

Codex나 Claude Code에서 다음처럼 요청합니다. 경로는 실제 받은 위치로 바꿔주세요.

```text
/path/to/design-system-public/SKILL.md를 읽고 적용해줘.
소규모 팀이 신청 내역을 확인하는 관리자 화면을 만들고 싶어.
새 신청과 처리 상태를 먼저 볼 수 있어야 해.
이 저장소의 컴포넌트와 토큰을 확인한 뒤 적절한 구성을 제안해줘.
```

기대하는 결과는 화면 코드와 함께 어떤 정보가 먼저 보여야 하는지, 어떤 컴포넌트를 선택했는지, 기존 요소로 부족한 부분은 무엇인지 설명하는 것입니다. 특정 모델이나 모든 작업에서 품질 향상을 보장하지는 않습니다.

반복해서 사용하려면 저장소 전체를 에이전트의 스킬 디렉터리에 연결할 수 있습니다. `SKILL.md`만 복사하면 소스와 문서 경로가 끊어집니다. 같은 이름의 스킬이 있으면 덮어쓰지 말고 별도 이름을 사용하세요.

```bash
# Codex 예시: clone한 디렉터리에서 실행
mkdir -p ~/.codex/skills
ln -s "$PWD" ~/.codex/skills/local-design-system

# Claude Code를 사용하는 경우
mkdir -p ~/.claude/skills
ln -s "$PWD" ~/.claude/skills/local-design-system
```

### 3. 컴포넌트를 빌드하고 확인하기

소스와 문서를 읽는 데에는 설치가 필요 없습니다. 실제 React 컴포넌트를 실행하거나 검증하려면 Node.js 22.12 이상과 pnpm 10.19.0을 준비하세요. 저장소의 `.nvmrc`는 Node.js 22.18.0을 지정합니다.

```bash
npm install -g pnpm@10.19.0
pnpm install --frozen-lockfile
pnpm build
pnpm test:unit
pnpm lint
```

패키지는 이 저장소 안에서 `workspace:*`로 연결됩니다. 별도 앱에 적용하려면 앱의 빌드 설정과 의존성 연결이 필요하며, 스킬 설치만으로 앱에 컴포넌트가 자동 설치되지는 않습니다.

## 포함된 것

| 위치                         | 내용                                                                      |
| ---------------------------- | ------------------------------------------------------------------------- |
| `SKILL.md`                   | 에이전트 작업 순서와 컴포넌트 선택 기준                                   |
| `guidance/`                  | 제품·랜딩·관리자 화면 구성 기준과 판단 예시                               |
| `packages/local-design`      | Gradient, 이름으로 고르는 Icon, StatRow, MarketingHero, ItineraryTimeline |
| `packages/wds`               | React UI 컴포넌트, 스타일, 테스트                                         |
| `packages/wds-theme`         | 색상·타이포그래피·간격 등의 토큰                                          |
| `packages/wds-engine`        | 스타일 엔진과 공통 유틸리티                                               |
| `packages/wds-icon`          | 아이콘 컴포넌트                                                           |
| `packages/wds-nextjs`        | Next.js 연동 코드                                                         |
| `packages/eslint-plugin-wds` | 디자인 시스템용 ESLint 규칙                                               |
| `docs/data`                  | 디자인·플랫폼 사용 지침                                                   |

개인 작업에서 이 기반을 콘텐츠와 슬라이드 제작에도 사용했지만, **콘텐츠·PPT 템플릿은 별도 프로젝트이며 이 공개본에는 포함하지 않았습니다.** 브랜드별 자료, 실제 고객 작업물, 원본 문서 사이트, MCP 서버도 제외했습니다.

## 내 프로젝트에 맞추기

작업할 화면의 사용자, 목적, 우선순위와 참고 디자인을 함께 주세요. 브랜드 색상이나 전용 패턴이 필요하면 별도 확장으로 관리하고, 공통 토큰과 컴포넌트 자체를 프로젝트마다 바꾸지 않는 편이 재사용하기 좋습니다.

## 출처와 라이선스

**디자인 시스템: Montage by Wantedlab (MIT)**

기반 소스는 [Wanted Lab의 montage-web](https://github.com/wanteddev/montage-web)이며 **MIT 라이선스**를 따릅니다. [원본 라이선스 전문](LICENSE.md)의 `Copyright (c) 2026 Wanted Lab, Inc.` 표기를 보존했습니다. 공개본의 추가 코드와 문서도 같은 MIT 조건으로 제공합니다.

이 저장소는 개인이 수정한 독립 프로젝트로, Wanted의 공식 배포나 후원을 의미하지 않습니다. 별도 외부 이미지, 폰트, 상표를 추가할 때는 각 자료의 조건도 확인하세요.

- [출처·제3자 자료 범위](THIRD_PARTY_NOTICES.md)
- [공개본의 변경 사항](MODIFICATIONS.md)
- [기반과 확장 경계](FOUNDATION.md)
