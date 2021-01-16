import React, { useEffect, useState } from "react";
import Header from "./header/Header";
import Main from "./Main.style.js";
import { sleep } from "./helpers/sleep";
import mergeSort from "./helpers/mergeSort";

export default function SortingVisualizer() {
  const [size, setSize] = useState(10);
  const [arr, setArr] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [currentNext, setCurrentNext] = useState(null);

  useEffect(() => {
    updateList();
  }, [size]);

  const updateList = () => {
    const randomArr = Array.from({ length: size }, () =>
      generateRandomInteger(50, 500)
    );

    setArr(randomArr);
  };

  const generateRandomInteger = (min, max) => {
    return Math.floor(min + Math.random() * (max + 1 - min));
  };

  const rangeChange = () => {
    const range = prompt("Enter a Array Size (between 5-250)");
    if (range < 5 || range > 250) {
      rangeChange();
    } else {
      setSize(range);
    }
  };

  const generateRandomList = () => {
    const sizeOfList = generateRandomInteger(5, 250);
    const randomArr = Array.from({ length: sizeOfList }, () =>
      generateRandomInteger(50, 500)
    );
    setArr(randomArr);
  };

  const bubbleOnClick = async () => {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
        setCurrentIndex(i);
        setCurrentNext(i + 1);
        if (arr[j] > arr[j + 1]) {
          let tmp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = tmp;
        }
        setArr([...arr]);
      }
      await sleep(0.01);
      console.log(arr[i]);
    }

    setCurrentIndex(null);
    setCurrentNext(null);
  };

  const insertionSort = async () => {
    for (let i = 0; i < arr.length; i++) {
      let key = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
      }
      await sleep(0);
      arr[j + 1] = key;
      setArr([...arr]);
    }
  };

  /*  const mergeOnClick = async () => {
    const arr1 = mergeSort(arr);
    setArr[arr1];
  }; */
  const selectionSort = async () => {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
      let min = i;
      for (let j = i + 1; j < len; j++) {
        if (arr[min] > arr[j]) {
          min = j;
        }
      }
      if (min !== i) {
        let tmp = arr[i];
        arr[i] = arr[min];
        arr[min] = tmp;
      }
      await sleep(0.1);
      setArr([...arr]);
      console.log(arr[i]);
    }
  };

  return (
    <div className="SortingVisualizer">
      <Header
        rangeChange={rangeChange}
        randomList={generateRandomList}
        bubbleOnClick={bubbleOnClick}
        insertOnClick={insertionSort}
        selectionSort={selectionSort}
      />
      <Main data={arr} />
    </div>
  );
}
