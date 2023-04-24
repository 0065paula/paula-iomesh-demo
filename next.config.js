module.exports = {
  rewrites: async () => {
    return [
      {
        source: "/567417cec69b7dc00b5df716f1cda5e7.txt",
        destination: "/public/567417cec69b7dc00b5df716f1cda5e7.txt",
      },
      {
        source: "/shenma-site-verification.txt",
        destination: "/public/shenma-site-verification.txt",
      },
      {
        source: "/sogousiteverification.txt",
        destination: "/public/sogousiteverification.txt",
      },
      {
        source: "/baidu_verify_code-lIEnIV1h5S.html",
        destination: "/public/baidu_verify_code-lIEnIV1h5S.html",
      },
      {
        source: "/ByteDanceVerify.html",
        destination: "/public/ByteDanceVerify.html",
      },
    ];
  },
};
