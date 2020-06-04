$(() => {
  const port = "https://localhost:8443";

  const getWork = () => {
    $.ajax({
      url: `${port + "/images/get-work"} `,
      success: function (res) {
        const imageOnePath = res[0].image_path;
        const imageTwoPath = res[1].image_path;
        const imageThreePath = res[2].image_path;
        const imageFourPath = res[3].image_path;
        const imageFivePath = res[4].image_path;
        const imageSixPath = res[5].image_path;
        const imageSevenPath = res[6].image_path;
        const imageEightPath = res[7].image_path;
        const imageNinePath = res[8].image_path;
        const imageTenPath = res[9].image_path;

        $("#image-1").attr("src", imageOnePath);
        $("#image-2").attr("src", imageTwoPath);
        $("#image-3").attr("src", imageThreePath);
        $("#image-4").attr("src", imageFourPath);
        $("#image-5").attr("src", imageFivePath);
        $("#image-6").attr("src", imageSixPath);
        $("#image-7").attr("src", imageSevenPath);
        $("#image-8").attr("src", imageEightPath);
        $("#image-9").attr("src", imageNinePath);
        $("#image-10").attr("src", imageTenPath);

        var tags = [];
        var tagsIDs = [
          "#tag1",
          "#tag2",
          "#tag3",
          "#tag4",
          "#tag5",
          "#tag6",
          "#tag7",
          "#tag8",
          "#tag9",
          "#tag10",
        ];

        for (let i of res) {
          tags.push(i.description);
        }

        for (let i in tagsIDs) {
          $(tagsIDs[i]).html(tags[i]);
        }
      },
    });
  };

  const getAboutMe = () => {
    $.ajax({
      url: `${port + "/texts/get-aboutme"} `,
      success: function (res) {
        $("#about-me-body").html(res);
      },
    });
  };

  const getHomePage = () => {
    $.ajax({
      url: `${port + "/texts/get-homepage"} `,
      success: function (res) {
        console.log(res);
        $("#hero-text").html(
          "<span>" +
            res[0].content +
            "</span>" +
            "<br>" +
            "<span>" +
            res[1].content +
            "</span>"
        );
      },
    });
  };

  getWork();
  getAboutMe();
  getHomePage();
});
