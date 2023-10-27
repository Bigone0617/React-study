- Server Side Rendering하는 이유
1. SEO 대응하기 위해 : CSR로 홈페이지 구축 시, 크롤링이 왔을 때 빈 HTML만 반환하기 때문에
2. 빠른 초기화면 로딩


- Client Side Rendering 순서
1. html 파일 다운
2. js 파일 다운
3. js 파일 해석 후 react 실행
4. 뷰 렌딩 (실제 사용 가능)

- Server Side Rendering 순서
1. 다 그려진 html 파일 다운
2. 화면이 렌딩됨
3. js 및 react가 실행
4. 뷰 렌딩 (실제 사용 가능)


- Sever Side Rendering API
1. renderTostring
    - 기초 뼈대를 그리는 함수
    - data-react-checksum을 통해서 csr때 변경할 부분만 변경함
2. renderToStaticMarkup
    - 단순 html을 반환
    - class라는 어트리뷰트만 붙고 추가 어트리 뷰트는 붙지 않음
    - 단순 화면 그리기 용, csr이 작동하면 화면이 완전 바뀌는 경우에 사용
        - 거의 사용 안함 


- Isomorphic이란
    - client side, server side에서 둘 다 사용 가능한 것을 의미함.