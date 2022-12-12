/*console.log("잘 작동중");


const axios = require("axios");
const cheerio = require("cheerio");
const log = console.log;

const getHTML = async () => {
  try {
    return await axios.get("https://janghowon-m.goeic.kr/bbs/board.do?bsIdx=3746&menuId=8429#1");

  } catch (error) {
    console.error(error);
  }
};

getHTML()
.then((html) => {
  const $ = cheerio.load(html.data);
  const data = $("#boardList > tbody > tr:nth-child(1) > td.subject.text-left > a");
  const dataText = data.text();
  console.log(dataText);
  return dataText;
})
.then((res) => console.log(res));

/*
getHtml()
  .then(html => {
    let ulList = [];
    const $ = cheerio.load(html.data);




    const $bodyList = $("#boardList > tbody > tr:nth-child(1) > td.subject.text-left > a").children("li.section02");
    //console.log($bodyList);
    $bodyList.each(function(i, elem) {
      ulList[i] = {
          title: $(this).find('strong.news-tl a').text(),
          url: $(this).find('strong.news-tl a').attr('href'),
          image_url: $(this).find('p.poto a img').attr('src'),
          image_alt: $(this).find('p.poto a img').attr('alt'),
          summary: $(this).find('p.lead').text().slice(0, -11),
          date: $(this).find('span.p-time').text()
      };
    });

    const data = ulList.filter(n => n.title);
    return data;
  })
  .then(res => log(res));*/
