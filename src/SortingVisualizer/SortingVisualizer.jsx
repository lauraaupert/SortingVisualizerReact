import React from 'react';
import './SortingVisualizer.css'
import mergeSort from '../algorithms/mergeSort'

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
        const testSort = this.state.array.slice().sort((a, b) => a - b);
        const sortedArray = mergeSort(this.state.array);
        console.log(testSort, sortedArray)

        console.log(arraysAreEqual(testSort, sortedArray));
    }

    testSortingAlgos() {
        for (let i = 0; i < 100; i++) {
            const array = [];
            const length = randomInteger(1, 1000);
            for (let i = 0; i < length; i++) {
                array.push(randomInteger(-1000, 1000));
            } 
            const testSort = this.state.array.slice().sort((a, b) => a - b);
            const sortedArray = mergeSort(this.state.array);
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
                        style={{height: `${value / 12}vh`}}>
                    </div>
                ))}
                <div>
                    <button onClick={() => this.generateArray()}>New Array</button>
                    <button onClick={() => this.mergeSort()}>Merge Sort</button>
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


