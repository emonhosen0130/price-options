import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';
const LineChart = () => {

    const studentMarksData = [
        { studentId: 1, name: "Alice", math: 85, physics: 78, chemistry: 90 },
        { studentId: 2, name: "Bob", math: 78, physics: 82, chemistry: 85 },
        { studentId: 3, name: "Charlie", math: 92, physics: 88, chemistry: 95 },
        { studentId: 4, name: "David", math: 88, physics: 90, chemistry: 92 },
        { studentId: 5, name: "Eva", math: 70, physics: 65, chemistry: 75 },
        { studentId: 6, name: "Frank", math: 95, physics: 92, chemistry: 98 },
        { studentId: 7, name: "Grace", math: 82, physics: 75, chemistry: 85 },
        { studentId: 8, name: "Hannah", math: 75, physics: 68, chemistry: 80 },
        { studentId: 9, name: "Ian", math: 90, physics: 85, chemistry: 88 },
        { studentId: 10, name: "Jane", math: 85, physics: 80, chemistry: 90 }
    ];


    return (
        <div>
            <LChart width={800} height={400} data={studentMarksData}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math" stroke='red'></Line>
                <Line dataKey={'physics'} stroke='green'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;