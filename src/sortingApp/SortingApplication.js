import React, { Component } from 'react';
import {SortMergeAlgo} from '../algorithms/SortMergeAlgo';
import './SortingApp.css';


const ANIMATION_SPEED_MS = 3;

// The main color of the bars
const prColor = 'teal';

// Comparison color
const ckColor = 'crimson';

export class SortingApplication extends Component {

    constructor(props) {
        super(props);

        this.state = {
            array: []
        };
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array = [];
        for(let i = 0; i < 150; i++) {
            array.push(randomIntFromInterval(4, 600)); // number of values
        }
        this.setState({array});
    }

    // Sorting Method
    mergeSort() {
        // const newSortedArray = this.state.array.slice().sort(function(a, b){return a-b});
        // // console.log(newSortedArray);
        // const sortedArray = SortMergeAlgo.mergeSort(this.state.array);
        // console.log(arrayCheck(newSortedArray, sortedArray));

        const animations = SortMergeAlgo(this.state.array);
        for (let i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName('array-bar');
        const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? ckColor : prColor;
                setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            } else {
                setTimeout(() => {
                const [barOneIdx, newHeight] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS);
            }
        }
    }

    render() {
        const {array} = this.state;

        return (
            <div className="array-container">
                {array.map((value, idx) => (
                    <div style={{height: `${value}px`}} className="array-bar" key={idx}></div>
                ))}
                <br />
                <div className="footer">
                    {/* <img className="lg" alt="sorting application" src="../bird-icon.png" /> */}
                    <p className="name">Sorting Application</p>
                    <button className="resetBtn" onClick={() => {this.resetArray()}}>Reset the array</button>
                    <button className="sortingBtn" onClick={() => {this.mergeSort()}}>Merge Sort</button>
                    <button className="bubbleSort">Bubble Sort <span className="note">In the work</span></button>
                </div>
            </div>
        )
    }
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// function arrayCheck(arrOne, arrTwo) {
//     if(arrOne.length !== arrTwo.length) return false;
//     for(let i = 0; i < arrOne.length; i++) {
//         if(arrOne[i] !== arrTwo[i]) return false;
//     }

//     return true;
// }

export default SortingApplication

