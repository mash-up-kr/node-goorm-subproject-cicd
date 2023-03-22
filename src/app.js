import express from "express";
import http from "http";
import { HTTP_STATUS_CREATED } from "./constants/http-status.js";
const app = express();
app.listen(3000, () => {
  console.log("server start");
});
app.post("/sync", (req, res) => {
  //TODO request tastyzip api

  res.status(HTTP_STATUS_CREATED).send("OK");
});
// tastygoodzip url : https://mashup-scfug.run-ap-south1.goorm.site
// webhook server : https://test-yrilc.run.goorm.site

// 맛집 API 구축
// 서초 open API PARMS 조건값에 따라 호출처리
// https://www.data.go.kr/data/15076265/fileData.do#/ 공공 API 스펙 명세 홈페이지
