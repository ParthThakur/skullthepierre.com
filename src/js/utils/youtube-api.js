import { video_page_slider_list } from "../link_list";

export var player;
export function onYouTubeIframeAPIReady() {
  player = new YT.Player("main_video", {
    height: "100%",
    width: "100%",
    id: "main_video",
    videoId: "rBNfZdD_vG8",
    events: {
      onReady: listVideos,
    },
  });

  new YT.Player("beats_0", {
    height: "100%",
    width: "100%",
    playerVars: {
      listtype: "playlist",
      list: "PL0fxpGNlsFQgXhcNwh7C4vkA-KyCUdUms",
    },
  });
}

function listVideos() {
  $.each(video_page_slider_list, function (key, video_id) {
    let elem = `<div class="bg-red-900 h-full relative">
                  <div class="absolute h-full w-full vid_overlay" onclick="overlay_click(vid_${key})"></div>
                  <div id="vid_${key}"></div>
                </div>`;

    $("#video_slider").append(elem);

    let p = new YT.Player(`vid_${key}`, {
      height: "100%",
      width: "100%",
      id: `vid_${key}`,
      class: video_id,
      events: {
        onReady: () => {
          p.cueVideoById(video_id);
          $(`#vid_${key}`).attr("videoId", video_id);
        },
      },
    });
  });
}
