const axios = require("axios");
function v2ex() {
  return new Promise(async (resolve) => {
    try {
      let url = "https://www.v2ex.com/mission/daily";
      const header = {
        headers: {
          Referer: "https://www.v2ex.com",
          cookie: config.pcbeta.cookie,
        },
      };
      let res = await axios.get(url, header);
      if (res.data) {
		  const rex=/redeem\?once=\d+/
		  let url2 ='https://www.v2ex.com/mission/daily/'+res.data.match(rex)[0]
		  
		  var resp1 = await axios.get(url2)
			data = resp1.data
      } else {
        data = res.data.error_msg;
      }
      console.log(data);
    } catch (err) {
      console.log(err);
      data="签到接口请求出错"
    }
    resolve("【v2ex】：" + data);
  });
}

module.exports = v2ex;
