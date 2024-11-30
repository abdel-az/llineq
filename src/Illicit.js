

//import React, { useState, useEffect } from 'react';
//import Papa from 'papaparse';
//import './styles.css'; // Import the CSS file
//import { csvData } from './Data/Transaction'; // Import the CSV data

//const CSVReader = () => {
//    const [data, setData] = useState([]);

//    useEffect(() => {


//        Papa.parse(csvData, {
//            complete: (result) => {
//                setData(result.data);
//            },
//            header: true,
//        });
//    }, []);

//    return (
//        <div className="table-container">
//            <table className="styled-table">
//                <thead>
//                    <tr>
//                        {data[0] && Object.keys(data[0]).map((key) => <th key={key}>{key}</th>)}
//                    </tr>
//                </thead>
//                <tbody>
//                    {data.map((row, index) => (
//                        <tr key={index}>
//                            {Object.values(row).map((val, i) => <td key={i}>{val}</td>)}
//                        </tr>
//                    ))}
//                </tbody>
//            </table>
//        </div>
//    );
//};

//const Illicit = () => {
//    return (
//        <div className="App">
//            <h1>Illicit Transaction Detection</h1>
//            <CSVReader />
//        </div>
//    );
//};

//export default Illicit; 

