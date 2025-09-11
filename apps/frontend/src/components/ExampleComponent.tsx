import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_ROUTES } from 'common/src/constants.ts';
import ExampleButton from './ExampleButton.tsx';
const ExampleComponent = () => {
    const [score, setScore] = useState(0);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetchScore();
    }, []);
    async function fetchScore() {
        try {
            const res = await axios.get(API_ROUTES.SCORE);
            if (res.status === 200) {
                setLoading(false);
                setScore(res.data.score);
            }
            else if (res.status === 204) {
                setLoading(false);
            }
        } catch (error) {
            console.log('Error fetching score, retrying:', error);
            setTimeout(() => fetchScore(), 1500);
        }
    }
    async function submitScore() {
        try {
            const data = JSON.stringify({
                time: new Date(),
                score: score,
            });
            const res = await axios.post(API_ROUTES.SCORE, data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (res.status == 200) {
                console.log('Added score');
            }
        } catch (error) {
            console.log('Error submitting score:', error);
        }
    }
    return (
        <div className="bg-gray-100 rounded-lg shadow-md p-6 w-64">
            <div className="text-2xl font-bold mb-4 text-center py-2 rounded">
                {loading ? 'Connecting...' : `Score: ${score}`}
            </div>
            <div className="flex flex-row gap-2">
                <ExampleButton
                    onClick={() => setScore(score - 1)}
                    variant="secondary"
                    disabled={loading}
                >
                    -
                </ExampleButton>
                <ExampleButton
                    onClick={() => setScore(score + 1)}
                    variant="secondary"
                    disabled={loading}
                >
                    +
                </ExampleButton>
                <ExampleButton onClick={() => submitScore()} variant="primary" disabled={loading}>
                    Submit
                </ExampleButton>
            </div>
        </div>
    );
};
export default ExampleComponent;
