$(() => {
  console.log("get image");

  const imageOne = document.getElementById("#image-1");
  const imageTwo = document.getElementById("#image-2");
  const imageThree = document.getElementById("#image-3");
  const imageFour = document.getElementById("#image-4");
  const imageFive = document.getElementById("#image-5");
  const imageSix = document.getElementById("#image-6");
  const imageSeven = document.getElementById("#image-7");
  const imageEight = document.getElementById("#image-8");
  const imageNine = document.getElementById("#image-9");
  const imageTen = document.getElementById("#image-10");

  const port = "https://localhost:8443";

  const getWork = () => {
    return new Promise((resolve, reject) => {
      let data = $.get(port + "/images/get-work");

      data
        .then((res) => {
          resolve(res);
          const imageOnePath = res[0].imagePath;
          const imageTwoPath = res[1].imagePath;
          const imageThreePath = res[2].imagePath;
          const imageFourPath = res[3].imagePath;
          const imageFivePath = res[4].imagePath;
          const imageSixPath = res[5].imagePath;
          const imageSevenPath = res[6].imagePath;
          const imageEightPath = res[7].imagePath;
          const imageNinePath = res[8].imagePath;
          const imageTenPath = res[9].imagePath;

          imageOne.attr("src", imageTenPath);
        })
        .catch((err) => {
          console.error(err);
        });
    });
  };

  getWork();
});
