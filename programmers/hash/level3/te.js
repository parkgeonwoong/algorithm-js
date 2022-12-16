function solution(genres, plays) {
  let answer = [];

  // 새로운 배열 객체형식
  let songs = genres.map((genre, index) => {
    return {
      no: index,
      genre: genre,
      play: plays[index],
    };
  });

  console.log("🚀 songs: ", songs);

  let genreSum = [];

  // 중복값 합치기
  songs.forEach((song) => {
    let findGenre = genreSum.find((x) => x.genre === song.genre);

    if (!findGenre) {
      genreSum.push({
        genre: song.genre,
        play: song.play,
      });
    } else {
      findGenre.play += song.play;
    }
  });

  genreSum.sort((a, b) => b.play - a.play);
  console.log("genreSum: ", genreSum);

  // 순서 정하기
  genreSum.forEach((genrePlay) => {
    let findFilter = songs.filter((x) => x.genre === genrePlay.genre);
    findFilter.sort((a, b) => b.play - a.play);
    console.log("Filter: ", findFilter);

    answer.push(findFilter[0].no);
    if (findFilter.length > 1) {
      answer.push(findFilter[1].no);
    }

    console.log("answer: ", answer);
  });

  //   console.log(songs);

  return answer;
}

solution(
  ["classic", "pop", "classic", "classic", "pop"],
  [500, 600, 150, 800, 2500]
);
