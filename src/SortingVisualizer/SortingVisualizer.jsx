import React from 'react';
import './SortingVisualizer.css'
//import * as sortingAlgorithms from '../algorithms/sortingAlgorithms'
import mergeSort from '../algorithms/mergeSort'
import heapSort from '../algorithms/heapSort'

export default class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            array: []
        }
    }   

    componentDidMount() {
        this.generateArray();
    }

    generateArray() {
        const array = [];
        for (let i = 0; i < 100; i++) {
            array.push(randomInteger(5, 1000));
        }
        this.setState({array});
    }

    mergeSort() {
        //const testSort = this.state.array.slice().sort((a, b) => a - b);
        const animations = mergeSort(this.state.array);
        console.log(animations[0])
        const newAnimations = [];
        for (const animation of animations) {
            console.log(animation.comparison)
            newAnimations.push(animation.comparison);
            newAnimations.push(animation.comparison);
            newAnimations.push(animation.swap);
            console.log(newAnimations)
        }
        for (let i = 0; i < newAnimations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
          
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = newAnimations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? 'red' : 'slategray';
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * 5);
            } else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = newAnimations[i]
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                    // barOneStyle.height = barTwoStyle.height;
                    // barTwoStyle.height = tempHeight;
                }, i * 5)
            }
        }
    }

        heapSort() {
            // const testSort = this.state.array.slice().sort((a, b) => a - b);
            // const heapS = heapSort(this.state.array)
            // console.log(arraysAreEqual)

        }


        // for (let i = 0; i < animations.length; i++) {
        //     const { comparison, swap } = animations[i];
        //     setTimeout(()=> {
        //         const arrayBars = document.getElementsByClassName('array-bar');
        //         arrayBars[comparison[1]].style.backgroundColor = red;
        //         arrayBars[comparison[0]].style.backgroundColor = red;
        //         setTimeout(() => {
        //             arrayBars[comparison[1]].style.backgroundColor = slategray;
        //             arrayBars[comparison[0]].style.backgroundColor = slategray;
        //         }, (i + 1) * 10);
        //     }, i * 10)
        // }
      
        // console.log(arraysAreEqual(testSort, sortedArray));
    

    testSortingAlgos() {
        for (let i = 0; i < 100; i++) {
            const array = [];
            const length = randomInteger(1, 1000);
            for (let i = 0; i < length; i++) {
                array.push(randomInteger(-1000, 1000));
            } 
            const testSort = this.state.array.slice().sort((a, b) => a - b);
            const sortedArray = heapSort(this.state.array);
            console.log(arraysAreEqual(testSort, sortedArray))
        }
    }

    render() {
        const {array} = this.state;

        return (
            <div className="array-container">
                {array.map((value, idx) => (
                    <div 
                        className="array-bar" 
                        key={idx}
                        style={{height: `${value / 14}vh`}}>
                    </div>
                ))}
                <div>
                    <button onClick={() => this.generateArray()}>New Array</button>
                    <button onClick={() => this.mergeSort()}>Merge Sort</button>
                    <button onClick={() => this.heapSort()}>Heap Sort</button>
                    <button onClick={() => this.testSortingAlgos()}>Test Algorithms</button>
                </div>
            </div>
        )
    }
}


//allows for duplicate values
function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function arraysAreEqual(testArray, algoArray) {
    if (testArray.length !== algoArray.length) return false;
    for (let i = 0; i < testArray.length; i++) {
        if (testArray[i] !== algoArray[i]) return false;
    }
    return true;
}


