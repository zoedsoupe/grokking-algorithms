<h1 align="center">Welcome to grokking-algorithms 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="m" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
  <a href="https://twitter.com/zoedsoupe" target="_blank">
    <img alt="Twitter: zoedsoupe" src="https://img.shields.io/twitter/follow/zoedsoupe.svg?style=social" />
  </a>
</p>

## Description

Implementations of algorithms from book &#34;Grokking Algorithms - An Illustrated Guide for progrgammers and other curious people&#34;

## Specification

### Main Algorithms

#### Chapter 1

* [Binary Search](https://github.com/zoedsoupe/grokking-algorithms/blob/master/src/ch1/bs.ts) - Algorithm to find an item from a sorted list of items. It works by repeatedly dividing in half the portion of the list that could contain the item, until you've narrowed down the possible locations to just one.

#### Chapter 2

* [Selection Sort](https://github.com/zoedsoupe/grokking-algorithms/blob/master/src/ch2/sls.ts) - The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning. The algorithm maintains two subarrays in a given array.

#### Chapter 3

* [Factorial](https://github.com/zoedsoupe/grokking-algorithms/blob/master/src/ch3/fac.ts) - A function thats multiply all whole numbers from the chosen number down to 1, recursivaly.
* [Square Root](https://github.com/zoedsoupe/grokking-algorithms/blob/master/src/ch3/sqrt.ts) - Given a number, calculates the square root based on Newthon's algorithm thats says: "y is square root of a once y² is equal a".

#### Chapter 4

* [Count](https://github.com/zoedsoupe/grokking-algorithms/blob/master/src/ch4/count.ts) - Program that count how many elements is on an array, recursivaly.
* [Max](https://github.com/zoedsoupe/grokking-algorithms/blob/master/src/ch4/max.ts) - Return the gretest number given an array.
* [Sum](https://github.com/zoedsoupe/grokking-algorithms/blob/master/src/ch4/sum.ts) - Sums all elements of an array with recursion, using divide and conquer.
* [Quick Sort](https://github.com/zoedsoupe/grokking-algorithms/blob/master/src/ch4/qsort.ts) - Is based on partitioning of array of data into smaller arrays. A large array is partitioned into two arrays one of which holds values smaller than the specified value, say pivot, based on which the partition is made and another array holds values greater than the pivot value. Quicksort partitions an array and then calls itself recursively twice to sort the two resulting subarrays.

### Utils

* [Sort, Average, Head](https://github.com/zoedsoupe/grokking-algorithms/blob/master/src/utils/utils.ts) - Basic algorithms to solve some problems as helper functions.

## Install

```sh
yarn install
```

## Run tests

```sh
yarn test
```

## Author

👤 **Zoey de Souza Pessanha <zoey.spessanha@zeetech.io>**

* Twitter: [@zoedsoupe](https://twitter.com/zoedsoupe)
* Github: [@zoedsoupe](https://github.com/zoedsoupe)
* LinkedIn: [@mdsp](https://linkedin.com/in/mdsp)

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2020 [Zoey de Souza Pessanha <zoey.spessanha@zeetech.io>](https://github.com/zoedsoupe).<br />
This project is [MIT](https://github.com/zoedsoupe/grokking-algorithms/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
