"use strict";

function appendValue(element, value) {
  element.value += value;
}

const output = document.querySelector('.part1-output');

let colors = ["red", "green", "blue"];
colors.push("yellow", "purple");
colors.unshift("black", "white");

let first = colors.shift();
let last = colors.pop();
colors.push(first);
colors.unshift(last);

colors.sort().reverse();

let colorsBeginsFromLetterB = [];
for (let color of colors) {
  if (color[0] === 'b') colorsBeginsFromLetterB.push(color);
}

for (let i = 0; i < colors.length; i++) {
  appendValue(output, `\n${i + 1}. ${colors[i]}`);
}