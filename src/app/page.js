"use client";

import { useRef, useState } from "react";

const tracks = {
  1: [
    { en: "What color are the fruits?", ko: "과일은 무슨 색인가요?" },
    { en: "What color are the vegetables?", ko: "채소는 무슨 색인가요?" },
    { en: "Find objects that are the same color!", ko: "같은 색인 물건을 찾아보세요!" },
    { en: "Find fruits and vegetables that are the same color!", ko: "같은 색의 과일과 채소를 찾아보세요!" },
    { en: "Which shapes of the items look the most alike?", ko: "가장 모양이 비슷한 것은 무엇인가요?" },
    { en: "Which shapes of the items look the most alike?", ko: "가장 모양이 비슷한 것은 무엇인가요?" },
    { en: "Find the shape formed by combining these pieces!", ko: "조각을 합쳐 만들어지는 모양을 찾아보세요!" },
    { en: "Find the shape formed by combining these pieces!", ko: "조각을 합쳐 만들어지는 모양을 찾아보세요!" },
    { en: "How many plants are there?", ko: "식물은 모두 몇 개인가요?" },
    { en: "How many of each vegetable are there?", ko: "각 채소는 몇 개씩 있나요?" },
    { en: "Which number is missing?", ko: "빠진 숫자는 무엇인가요?" },
    { en: "How many dots are there in total?", ko: "점은 모두 몇 개인가요?" },
    { en: "Find the exact corresponding location!", ko: "똑같은 위치를 찾아보세요!" },
    { en: "Find the ball in the same position!", ko: "같은 위치에 있는 공을 찾아보세요!" },
  ],

  2: [
    { en: "Find the animals with the same pattern!", ko: "같은 무늬를 가진 동물을 찾아보세요!" },
    { en: "Find the animals with the same pattern!", ko: "같은 무늬를 가진 동물을 찾아보세요!" },
    { en: "Which home is suitable for each animal?", ko: "각 동물에게 알맞은 집을 찾아보세요!" },
    { en: "Which home is suitable for each animal?", ko: "각 동물에게 알맞은 집을 찾아보세요!" },
    { en: "What do the animal footprints look like?", ko: "동물의 발자국은 어떻게 생겼나요?" },
    { en: "What do the animals like to eat?", ko: "동물은 무엇을 먹나요?" },
    { en: "What do the animals like to eat?", ko: "동물은 무엇을 먹나요?" },
    { en: "What can you wear on different parts of the body?", ko: "몸의 각 부분에는 무엇을 입을 수 있나요?" },
    { en: "What can you wear on different parts of the body?", ko: "몸의 각 부분에는 무엇을 입을 수 있나요?" },
    { en: "Complete the animal puzzle!", ko: "동물 퍼즐을 완성해 보세요!" },
    { en: "Who is the hidden animal?", ko: "숨은 동물은 무엇인가요?" },
    { en: "What is the item that is covered?", ko: "가려진 물건은 무엇인가요?" },
    { en: "What item does this part belong to?", ko: "이 부분은 어떤 물건의 일부인가요?" },
    { en: "Which item does this part belong to?", ko: "이 부분은 어떤 물건의 일부인가요?" },
  ],

  3: [
    { en: "Match the number of desserts to the dots.", ko: "디저트의 개수를 점의 개수와 연결해 보세요." },
    { en: "Match the number of fruits to the dots.", ko: "과일의 개수를 점의 개수와 연결해 보세요." },
    { en: "How many dots are there in total?", ko: "점은 모두 몇 개인가요?" },
    { en: "Connect the numbers in order!", ko: "숫자를 순서대로 연결해 보세요!" },
    { en: "How many dots will there be after adding and subtracting?", ko: "더하고 빼면 점은 모두 몇 개가 되나요?" },
    { en: "After subtracting some dots, how many are left?", ko: "점을 빼고 나면 몇 개가 남나요?" },
    { en: "What colors is the flower drawn with?", ko: "꽃은 어떤 색으로 그려졌나요?" },
    { en: "Find items of the same color!", ko: "같은 색의 물건을 찾아보세요!" },
    { en: "What shape will it become when unfolded?", ko: "펼치면 어떤 모양이 되나요?" },
    { en: "What does a complete butterfly look like?", ko: "완성된 나비는 어떻게 생겼나요?" },
    { en: "What shapes make up the item?", ko: "이 물건은 어떤 도형들로 이루어져 있나요?" },
    { en: "What shapes can you form?", ko: "어떤 도형을 만들 수 있나요?" },
    { en: "What do the blocks look like from the front?", ko: "앞에서 보면 블록은 어떻게 보이나요?" },
    { en: "What do the blocks look like from the front?", ko: "앞에서 보면 블록은 어떻게 보이나요?" },
  ],

  4: [
    { en: "What does the fruit look like when cut open?", ko: "과일을 자르면 어떻게 생겼나요?" },
    { en: "What does the whole food look like?", ko: "전체 음식은 어떻게 생겼나요?" },
    { en: "Find foods of the same kind!", ko: "같은 종류의 음식을 찾아보세요!" },
    { en: "Find animals of the same kind!", ko: "같은 종류의 동물을 찾아보세요!" },
    { en: "Find the corresponding house number!", ko: "알맞은 집 번호를 찾아보세요!" },
    { en: "Which two items are similar in shape?", ko: "모양이 비슷한 두 가지를 찾아보세요!" },
    { en: "Find the packaging for the items!", ko: "물건에 맞는 포장을 찾아보세요!" },
    { en: "Where should the items be placed?", ko: "물건을 어디에 놓아야 할까요?" },
    { en: "What fruits are in the basket?", ko: "바구니 안에는 어떤 과일이 있나요?" },
    { en: "What toys are in the box?", ko: "상자 안에는 어떤 장난감이 있나요?" },
    { en: "Find the animal corresponding to the shadow!", ko: "그림자와 같은 동물을 찾아보세요!" },
    { en: "Find the animal corresponding to the shadow!", ko: "그림자와 같은 동물을 찾아보세요!" },
    { en: "Find the dessert corresponding to the shadow!", ko: "그림자와 같은 디저트를 찾아보세요!" },
    { en: "Find the toy corresponding to the shadow!", ko: "그림자와 같은 장난감을 찾아보세요!" },
  ],
};

const levelStyles = {
  1: { color: "#FF5B35", soft: "#FFF1EB" },
  2: { color: "#F4C300", soft: "#FFF9D9" },
  3: { color: "#8B4CC7", soft: "#F4EEFF" },
  4: { color: "#58B8E6", soft: "#EDF8FF" },
};

export default function Home() {
  const [language, setLanguage] = useState("english");
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlayingAll, setIsPlayingAll] = useState(false);
  const [isPlayingSlow, setIsPlayingSlow] = useState(false);
  const [countdown, setCountdown] = useState(null);

  const audioRef = useRef(null);
  const dingRef = useRef(null);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);
  const stopAllRef = useRef(false);

  const stopAudio = () => {
    stopAllRef.current = true;

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current = null;
    }

    if (dingRef.current) {
      dingRef.current.pause();
      dingRef.current.currentTime = 0;
      dingRef.current = null;
    }

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    setCurrentTrack(null);
    setIsPlayingAll(false);
    setIsPlayingSlow(false);
    setCountdown(null);
  };

  const getAudioPath = (level, number) => {
    const num = String(number).padStart(2, "0");
    const langCode = language === "english" ? "en" : "ko";

    return `/audio/${language}/L${level}-${num}-${langCode}.mp3`;
  };

  const playAudio = (level, number) => {
    stopAudio();
    stopAllRef.current = false;

    const audio = new Audio(getAudioPath(level, number));

    audioRef.current = audio;
    setCurrentTrack(number);

    audio.onended = () => {
      setCurrentTrack(null);
      audioRef.current = null;
    };

    audio.play().catch((error) => {
      console.error("Audio play error:", error);
    });
  };

  const playAll = (level) => {
    stopAudio();

    stopAllRef.current = false;
    setIsPlayingAll(true);

    let current = 1;

    const playNext = () => {
      if (stopAllRef.current || current > 14) {
        setIsPlayingAll(false);
        setCurrentTrack(null);
        audioRef.current = null;
        return;
      }

      const audio = new Audio(getAudioPath(level, current));

      audioRef.current = audio;
      setCurrentTrack(current);

      audio.onended = () => {
        current += 1;
        playNext();
      };

      audio.play().catch((error) => {
        console.error("Audio play error:", error);
      });
    };

    playNext();
  };

  const playSlow = (level) => {
    stopAudio();

    stopAllRef.current = false;
    setIsPlayingSlow(true);

    let current = 1;

    const playNext = () => {
      if (stopAllRef.current || current > 14) {
        setIsPlayingSlow(false);
        setCurrentTrack(null);
        setCountdown(null);
        audioRef.current = null;
        return;
      }

      const audio = new Audio(getAudioPath(level, current));

      audioRef.current = audio;
      setCurrentTrack(current);
      setCountdown(null);

      audio.onended = () => {
        audioRef.current = null;

        let remaining = 20;
        setCountdown(remaining);

        intervalRef.current = setInterval(() => {
          remaining -= 1;
          setCountdown(remaining);

          if (remaining <= 0) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;

            setCountdown(null);

            const ding = new Audio("/audio/ding.mp3");
            dingRef.current = ding;

            ding.play().catch(() => {});

            timeoutRef.current = setTimeout(() => {
              if (dingRef.current) {
                dingRef.current.pause();
                dingRef.current.currentTime = 0;
                dingRef.current = null;
              }

              current += 1;
              playNext();
            }, 1500);
          }
        }, 1000);
      };

      audio.play().catch((error) => {
        console.error("Audio play error:", error);
      });
    };

    playNext();
  };

  const changeLanguage = (newLanguage) => {
    stopAudio();
    setLanguage(newLanguage);
  };

  const goBack = () => {
    stopAudio();
    setSelectedLevel(null);
  };

  if (selectedLevel) {
    const levelTracks = tracks[selectedLevel];
    const style = levelStyles[selectedLevel];

    return (
      <main className="min-h-screen bg-white px-4 py-5">
        <div className="mx-auto max-w-5xl">

          {/* LOGO */}
          <div className="mb-5">
            <div className="text-[42px] font-black lowercase leading-none text-[#1473D4]">
              mideer
            </div>

            <p className="mt-2 text-sm font-medium tracking-wide text-gray-500">
              Match & Connect Playbook
            </p>
          </div>

          <div className="border-b-2 border-gray-800"></div>

          <button
            onClick={goBack}
            className="mt-5 text-sm font-semibold text-gray-500"
          >
            ← 도서 목록
          </button>

          <div className="mt-7 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p
                className="text-xs font-bold tracking-[0.18em]"
                style={{ color: style.color }}
              >
                MATCH & CONNECT
              </p>

              <h1 className="mt-1 text-3xl font-bold text-gray-900">
                LEVEL {selectedLevel}
              </h1>

              <p className="mt-1 text-sm text-gray-400">
                14 Audios
              </p>
            </div>

            <div className="grid grid-cols-2 rounded-2xl bg-gray-100 p-1">
              <button
                onClick={() => changeLanguage("english")}
                className={`rounded-xl px-5 py-3 text-sm font-semibold ${
                  language === "english"
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-400"
                }`}
              >
                English
              </button>

              <button
                onClick={() => changeLanguage("korean")}
                className={`rounded-xl px-5 py-3 text-sm font-semibold ${
                  language === "korean"
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-400"
                }`}
              >
                한국어
              </button>
            </div>
          </div>

          {/* 전체 듣기 */}
          {!isPlayingAll ? (
            <button
              onClick={() => playAll(selectedLevel)}
              className="mt-6 w-full rounded-2xl py-4 font-bold text-white"
              style={{ backgroundColor: style.color }}
            >
              ▶ 전체 듣기
            </button>
          ) : (
            <button
              onClick={stopAudio}
              className="mt-6 w-full rounded-2xl bg-gray-200 py-4 font-bold text-gray-700"
            >
              ■ 전체 듣기 중지
            </button>
          )}

          {/* 천천히 듣기 */}
          {!isPlayingSlow ? (
            <button
              onClick={() => playSlow(selectedLevel)}
              className="mt-3 w-full rounded-2xl border-2 py-4 font-bold"
              style={{
                borderColor: style.color,
                color: style.color,
                backgroundColor: "white",
              }}
            >
              ◷ 천천히 듣기
              <span className="ml-2 text-xs font-medium opacity-60">
                음원 사이 20초
              </span>
            </button>
          ) : (
            <button
              onClick={stopAudio}
              className="mt-3 w-full rounded-2xl bg-gray-200 py-4 font-bold text-gray-700"
            >
              ■ 천천히 듣기 중지
            </button>
          )}

          {/* TRACK LIST */}
          <div className="mt-5 space-y-3">
            {levelTracks.map((track, index) => {
              const number = index + 1;
              const active = currentTrack === number;

              return (
                <button
                  key={number}
                  onClick={() => playAudio(selectedLevel, number)}
                  className="flex w-full items-center justify-between gap-4 rounded-2xl border px-5 py-5 text-left transition"
                  style={{
                    backgroundColor: active ? style.soft : "white",
                    borderColor: active ? style.color : "#E5E7EB",
                  }}
                >
                  <div className="min-w-0">
                    <p
                      className="text-xs font-bold"
                      style={{ color: style.color }}
                    >
                      {String(number).padStart(2, "0")}
                    </p>

                    <p className="mt-1 font-semibold leading-6 text-gray-900">
                      {language === "english" ? track.en : track.ko}
                    </p>

                    {active && (
                      <p className="mt-1 text-xs font-medium text-gray-400">
                        {countdown !== null
                          ? `플레이하는 중... ${countdown}초`
                          : "재생 중"}
                      </p>
                    )}
                  </div>

                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white"
                    style={{ backgroundColor: style.color }}
                  >
                    {active ? "♪" : "▶"}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white px-4 py-5">
      <div className="mx-auto max-w-5xl">

        {/* LOGO */}
        <div className="mb-5">
          <div className="text-[42px] font-black lowercase leading-none text-[#1473D4]">
            mideer
          </div>

          <p className="mt-2 text-sm font-medium tracking-wide text-gray-500">
            Match & Connect Playbook
          </p>
        </div>

        {/* LINE */}
        <div className="border-b-2 border-gray-800"></div>

        {/* TITLE */}
        <h2 className="mt-5 text-lg font-bold text-gray-900">
          도서 목록
        </h2>

        {/* LANGUAGE */}
        <div className="mt-5 max-w-md">
          <div className="grid grid-cols-2 rounded-2xl bg-gray-100 p-1">
            <button
              onClick={() => changeLanguage("english")}
              className={`rounded-xl py-3 font-semibold ${
                language === "english"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-400"
              }`}
            >
              English
            </button>

            <button
              onClick={() => changeLanguage("korean")}
              className={`rounded-xl py-3 font-semibold ${
                language === "korean"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-400"
              }`}
            >
              한국어
            </button>
          </div>
        </div>

        {/* LEVELS */}
        <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-4 sm:gap-x-8">
          {[1, 2, 3, 4].map((level) => {
            const style = levelStyles[level];

            return (
              <button
                key={level}
                onClick={() => setSelectedLevel(level)}
                className="group text-center"
              >
                {/* IMAGE PLACEHOLDER */}
                <div
                  className="mx-auto flex aspect-[0.48] w-full max-w-[150px] items-center justify-center overflow-hidden rounded-[22px] transition duration-200 group-hover:-translate-y-1"
                                  >
                  <img
  src={`/images/level-${level}.png`}
  alt={`Level ${level}`}
  className="h-full w-full object-contain"
/>
                </div>

                <p className="mt-1 text-base font-bold text-gray-900">
  LEVEL {level}
</p>

                <p className="mt-1 text-xs text-gray-400">
                  14 Audios
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </main>
  );
}