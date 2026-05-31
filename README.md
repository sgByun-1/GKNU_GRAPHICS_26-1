# 3D MUSIC BOX

## 🎯 프로젝트 설명
- 목표 : 사용자가 마우스로 직접 조작할 수 있고,  음악 재생 시 실시간으로 반응하는 감성적인 3D 오르골 웹 애플리케이션.
- 주요 기능 :<br/>
  (1) 3D Scene 구성 : 오르골 본체(Cylinder/Box Mesh) 및 상단 회전 오브젝트(GLTF 로드 모델) 등 3개 이상의 객체 계층 구조(Group) 설계.<br/>
  (2) 사용자 인터랙션: 오르골 본체 마우스 클릭시 뚜껑이 열리는 애니메이션과 OrbitControls를 활용한 카메라 시점 제어.<br/>
  (3) 오디오: 오르골의 뚜껑 여닫힘에 따라 음악이 재생되거나 정지되고, 음악에 파티클이 반응하도록 구현. <br/>

## 🛠️ 기술 스택
- React, Three.js, R3F

## 💻 설치 & 실행
```bash
npm install
npm run dev
```
## 🎮 사용 방법
- 오르골을 마우스로 클릭하면 오르골의 뚜껑을 닫고 열 수 있다.
- 휠로 확대 또는 축소를 할 수 있다.
- 마우스 드래그로 시점을 변환한다
- 음악을 정지하고 싶으면 뚜껑을 닫고, 계속 재생을 원하면 열어놓는다.

## 👥 팀원
- 박인아: 기획, 발표자료 수정, 깃허브 작성
- 변수경 : 코드 작성, 링크 배포, 깃허브 작성

## 📸 스크린샷
<img width="1085" height="950" alt="image (1)" src="https://github.com/user-attachments/assets/3736d5bd-5e36-418e-8c7d-45c16c981a24" />
<img width="941" height="810" alt="image" src="https://github.com/user-attachments/assets/a2923b2a-fcf6-4396-bc37-e738e9c37da5" />

## 📝 회고
배운 점
어려웠던 점
개선할 점




# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
