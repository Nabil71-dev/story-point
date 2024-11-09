#### A JS project on top of React + Vite
#### Manifest V3

### Instant enjoy
Download dis folder and it's containing data from [Drive Link](https://drive.google.com/drive/folders/1x1KNrOsbu8YOjcP2-G-U0_A0kG0wXq0b?usp=sharing), 
and upload dist folder to your extension part

## Get start
```bash
git clone https://github.com/yourusername/story-point.git
cd story-point
```

## First install dependencies & run 
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## To set in chrome extension 
```bash
open chrome browser make sure that developer mode turned on in chrome extension section then click load unpacked and upload newly created dist folder which created by running npm run build

One thing to notice that check build folder if there is manifest.json exist and change logo access if manifes.json not created  then use it from utils file. 

now click in extension and check
```

## Overview
This project is a Story Point Calculation Web App designed to assist users in estimating tasks and efforts using various parameters such as tasks, dependencies, efforts, complexity, and more.

The app is also structured as a Chrome extension for easy integration into everyday workflows, helping developers quickly assess and calculate story points during agile development.



### Calculation
The app performs two types of story point calculations using Fibonacci numbers as a base for estimation.Fibonacci numbers are commonly used in agile development to represent the relative size of tasks because they naturally emphasize the increasing uncertainty as tasks grow in complexity. The Fibonacci sequence used in this app includes values like 1, 2, 3, 5, 8, and 13.
