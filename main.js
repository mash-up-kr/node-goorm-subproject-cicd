const express = require("express");

const app = express();
app.listen(3000);
console.log("server start");

// tastygoodzip url : https://mashup-scfug.run-ap-south1.goorm.site
// webhook server : https://test-yrilc.run.goorm.site

// CICD 구축 플로우
// 서버 2개띄움 (A,B) -> 사전작업 처리
// A서버는 깃헙 웹훅 또는 깃헙액션에서 api request 받음 -> 일요일 오전에 처리

// TODO 해당 아래 작업들을 역할분배 및 발표 자료 세팅
// A서버에서 B서버 요청
// B서버에서 미리 저장한 실행 스크립트  ( 스크립트 내 e.g git pull origin develop  받은 후) 백그라운드 실행 -> CI/CD 동작

// 맛집 API 구축
// 서초 open API PARMS 조건값에 따라 호출처리
// https://www.data.go.kr/data/15076265/fileData.do#/ 공공 API 스펙 명세 홈페이지
