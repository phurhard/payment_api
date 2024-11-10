import React, { useState } from 'react';

const VerifyPayment: React.FC = () => {
    const [reference, setReference] = useState('');
    const [response, setResponse] = useState<any>(null);

    const handleVerify = async () => {
        try {
            const res = await fetch(`http://localhost:5000/api/paystack/verify?reference=${reference}`);
            if (res.ok) {
                const data = await res.json();
                if (data && data.type) {
                    setResponse(data);
                } else {
                    console.error('Unexpected response structure:', data);
                    setResponse({ error: 'Unexpected response structure' });
                }
            } else {
                console.error('Failed to verify payment:', res.statusText);
                setResponse({ error: 'Failed to verify payment' });
            }
        } catch (error) {
            console.error('Error verifying payment:', error);
            setResponse({ error: 'Failed to verify payment' });
        }
    };

    return (
        <div>
            <h2>Verify Payment</h2>
            <input type="text" value={reference} onChange={(e) => setReference(e.target.value)} placeholder="Reference" required />
            <button onClick={handleVerify}>Verify Payment</button>
            {response ? <div>{JSON.stringify(response)}</div> : <div>No response received yet.</div>}
        </div>
    );
};

export default VerifyPayment;
 
