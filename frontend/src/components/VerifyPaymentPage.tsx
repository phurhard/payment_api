import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const VerifyPaymentPage: React.FC = () => {
    const [response, setResponse] = useState<any>(null);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const reference = queryParams.get('reference');

        if (reference) {
            const verifyPayment = async () => {
                try {
                    const res = await fetch(`http://localhost:5000/api/paystack/verify?reference=${reference}`);
                    if (res.ok) {
                        const data = await res.json();
                        setResponse(data);
                        navigate('/success'); // Redirect to a success page or handle success
                        console.error('Failed to verify payment:', res.statusText);
                        navigate('/failure'); // Redirect to a failure page or handle failure
                    }
                } catch (error) {
                    console.error('Error verifying payment:', error);
                    setResponse({ error: 'Failed to verify payment' });
                }
            };

            verifyPayment();
        }
    }, [location.search]);

    return (
        <div>
            <h2>Verifying Payment...</h2>
            {response ? <div>{JSON.stringify(response)}</div> : <div>Loading...</div>}
        </div>
    );
};

export default VerifyPaymentPage;
