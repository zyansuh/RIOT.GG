
---


#### **1. 프로젝트 이름 및 설명**

```markdown
# League of Legends Data Fetcher

이 프로젝트는 Riot Games API를 활용하여 리그 오브 레전드의 최신 데이터를 가져오는 Next.js 기반 애플리케이션입니다. 
챔피언, 아이템, 로테이션 정보를 포함하며, 다크 모드를 지원합니다.
```

---

#### **2. 프로젝트 실행 방법**

```markdown
## 실행 방법

### 1. 프로젝트 클론
```bash
git clone https://github.com/zyansuh/my-riot-app.git
```

### 2. 의존성 설치
```bash
yarn install
```

### 3. 개발 서버 실행
```bash
yarn dev
```

### 4. 애플리케이션 접속
브라우저에서 `http://localhost:3000`으로 접속하세요.


### 5. Vercel 배포사이트
```
https://my-riot-bp6aqx1d3-ziansuhs-projects.vercel.app/
```

```

---

#### **3. 기술 스택 및 주요 기능**

```markdown
## 기술 스택
- **Next.js 13**: 최신 React 기능을 활용한 SSR/ISR.
- **TypeScript**: 정적 타입 체크로 안정성 보장.
- **Tailwind CSS**: 빠르고 유연한 스타일링.
- **Riot Games API**: 최신 게임 데이터를 동적으로 가져오기.
- **next-themes**: 다크 모드 지원.

## 주요 기능
- **챔피언 목록**: Riot API를 통해 최신 챔피언 정보를 가져와 화면에 렌더링.
- **아이템 목록**: 게임 아이템 데이터를 동적으로 표시.
- **로테이션 챔피언**: 매주 변경되는 로테이션 챔피언 정보 제공.
- **다크 모드**: 사용자 환경에 맞춘 테마 전환 기능.
```

---

#### **4. 폴더 구조**

```markdown
## 폴더 구조

```
```
src/
├── components/                # UI 컴포넌트 폴더
│   ├── ChampionCard.tsx       # 챔피언 카드 UI 컴포넌트
│   ├── ItemCard.tsx           # 아이템 카드 UI 컴포넌트
│   └── layout/                # 레이아웃 관련 컴포넌트
│       ├── Header.tsx         # 헤더 레이아웃 컴포넌트
│       └── Nav.tsx            # 내비게이션 컴포넌트
│
├── constants/                 # 상수 및 공통 함수 정의 폴더
│   └── constants.ts           # Riot API URL 및 관련 유틸리티 함수
│
├── pages/                     # 각 페이지 구성 폴더 (Next.js의 라우팅을 담당)
│   ├── champions/             # 챔피언 관련 페이지
│   ├── items/                 # 아이템 관련 페이지
│   └── rotation/              # 로테이션 관련 페이지
│
├── types/                     # 타입스크립트 타입 정의 폴더
│   ├── Champion.ts            # 챔피언 데이터 타입 정의
│   ├── Item.ts                # 아이템 데이터 타입 정의
│   └── ChampionRotation.ts    # 로테이션 데이터 타입 정의
│
└── utils/                     # 유틸리티 함수 폴더
    └── serverApi.ts           # 서버 API 호출 관련 함수

```
```

---

#### **5. API 문서**

```markdown
## API 문서

### Riot API 주요 엔드포인트
- **버전 정보**: `/api/versions.json`
- **챔피언 목록**: `/cdn/{version}/data/ko_KR/champion.json`
- **챔피언 상세 정보**: `/cdn/{version}/data/ko_KR/champion/{id}.json`
- **아이템 목록**: `/cdn/{version}/data/ko_KR/item.json`

### 주요 함수
#### `fetchVersion()`
- 최신 게임 버전을 가져옵니다.
- 반환값: `string`

#### `fetchChampionsList()`
- 모든 챔피언 데이터를 가져옵니다.
- 반환값: `Champion[]`

#### `fetchChampionDetail(id: string)`
- 특정 챔피언의 상세 정보를 가져옵니다.
- 반환값: `ChampionDetail`

#### `fetchItems()`
- 모든 게임 아이템 데이터를 가져옵니다.
- 반환값: `Item[]`
```

---

#### **6. 기여 방법**

```markdown
## 기여 방법
1. 이슈를 확인하거나 새 이슈를 생성하세요.
2. 기능 추가나 버그 수정을 위한 브랜치를 생성하세요:
   ```bash
   git checkout -b feature/your-feature
   ```
3. 작업을 완료한 후 PR(Pull Request)을 생성하세요.
```

---

#### **7. 라이선스**

```markdown
## 라이선스
이 프로젝트는 MIT 라이선스를 따릅니다. [LICENSE](./LICENSE)를 확인하세요.
```

---

