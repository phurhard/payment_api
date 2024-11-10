import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
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
                        if (data) {
                            setResponse(data);
                        } else {
                            console.error('Unexpected response structure:', data);
                            setResponse({ error: 'Unexpected response structure' });
                        }
                        // alert('/success'); // Redirect to a success page or handle success
                    } else {
                        console.error('Failed to verify payment:', res.statusText);
                        // alert('/failure'); // Redirect to a failure page or handle failure
                    }
                } catch (error) {
                    console.error('Error verifying payment:', error);
                    setResponse({ error: 'Failed to verify payment' });
                }
            };

            verifyPayment();
        }
    }, [location.search]);

    const handleBackToInitialize = () => {
        navigate('/');
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card bg-dark text-white">
                        <div className="card-body">
                            <h2 className="card-title text-center">Verifying Payment...</h2>
                            {response ? (
                                <div className="card-text">
                                    <pre className="bg-light text-dark p-3 rounded">
                                        {JSON.stringify(response, null, 2)}
                                    </pre>
                                </div>
                            ) : (
                                <div className="text-center">Loading...</div>
                            )}
                            <button className="btn btn-light mt-3 w-100" onClick={handleBackToInitialize}>
                                Back to Initialize Payment
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VerifyPaymentPage;
