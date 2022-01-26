const axios = require("axios");
function pcbeta() {
  return new Promise(async (resolve) => {
    try {
      let url = "http://i.pcbeta.com/home.php?mod=task&do=apply&id=149";
      const header = {
        headers: {
          Referer: "https://i.pcbeta.com/home.php?mod=task",
          cookie: config.pcbeta.cookie,
        },
      };
      let res = await axios.get(url, header);
      if (res.data) {
        data = res.data
      } else {
        data = res.data.error_msg;
      }
      console.log(data);
    } catch (err) {
      console.log(err);
      data="签到接口请求出错"
    }
    resolve("【远景论坛】：" + data);
  });
}

module.exports = pcbeta;
